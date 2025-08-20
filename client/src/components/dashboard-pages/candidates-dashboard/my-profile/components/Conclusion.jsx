import React, { useEffect, useState } from 'react'

const Conclusion = ({ watch, register, setValue, error }) => {

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const checkboxes = [
        "EMail Campaign / Newsletter", "SMS Promotions",
        "Internet Search", "Facebook",
        "NursHelp Website", "Friends & Family",
        "Flyers",
        "Other"
    ];

    const handleCheckboxChange = (item) => {
        setSelectedCheckboxes(prev => {
            if (prev.includes(item)) {
                return prev.filter(checkbox => checkbox !== item);
            } else {
                return [...prev, item];
            }
        });
    };

    // set the initial state
    useEffect(() => {
        const initialValue = watch('hear_about_us');
        if (initialValue && initialValue.length > 0) {
            setSelectedCheckboxes(initialValue.split(', ').map(item => item.trim()));
        }
    }, [watch("hear_about_us")]);

    // set the new state
    useEffect(() => {
        setValue('hear_about_us', selectedCheckboxes.join(', '));
    }, [selectedCheckboxes, setValue]);

    return (
        <div className="default-form">
            <div className="row">
                <div className="form-group col-lg-12 col-md-12">
                    <h5>How do you hear about us?</h5>
                    <div className="row mt-2 ms-1">
                        {checkboxes?.map((item, index) => (
                            <div className="col-md-6 my-1" key={index}>
                                <label>
                                    <input
                                        type='checkbox'
                                        className='checkboxes'
                                        name='about_us'
                                        value={item}
                                        onChange={() => handleCheckboxChange(item)}
                                        checked={selectedCheckboxes.includes(item)}
                                    />
                                    <span className='ps-2'>{item}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    {error?.hear_about_us?.message && (<span className='error'>{error?.hear_about_us?.message + "!"}</span>)}
                </div>
            </div>
        </div>

    )
}

export default Conclusion