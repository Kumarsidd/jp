import { get } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const CurrentCompany = ({ watch, register, setValue, error, control }) => {
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [options, setOptions] = useState([]);

    const { data, isLoading } = useQuery({
        queryKey: [`utilities/employers`, page],
        queryFn: async () => {
            try {
                const res = (await get(`/utilities/employers?page=${page}&limit=${limit}`)).data;
                if (res?.data) {
                    setOptions(res?.data?.map(company => ({ value: company._id, label: company.business_name }))
                    );
                }
                delete res.data;
                return res;
            } catch (error) {
                return null;
            }
        },
    });

    const handleMenuScrollToBottom = () => {
        if (data && data.totalPages > page) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        const initialValue = watch('current_company');
        if (initialValue) {
            setSelectedCompanies(initialValue);
        }
    }, [watch("current_company")]);

    return (
        <div className="default-form">
            <label>Select Current Companies</label>
            <Controller
                name="current_company"
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        value={options.filter(option => selectedCompanies.includes(option.value))}
                        onChange={(selectedOptions) => {
                            const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
                            setSelectedCompanies(values);
                            field.onChange(values);
                        }}
                        options={options}
                        isLoading={isLoading}
                        isClearable
                        isMulti
                        placeholder="Search for companies..."
                        // onMenuScrollToBottom={handleMenuScrollToBottom}
                    />
                )}
            />
            {error?.current_company?.message && (<span className='error'>{error?.current_company?.message + "!"}</span>)}
        </div>
    );
};

export default CurrentCompany;