import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import BusinessDetail from "./components/BusinessDetail";

import { getById, put } from "@/services/api";
import { employerSchema } from "@/validations/dashboard/employer";
import useUserInfo from "@/utils/hooks/useUserInfo";
import BusinessPreviewModal from "./components/BusinessPreviewModal";
import DashboardSidebar from "@/components/header/DashboardSideBar";

const index = () => {
    const userInfo = useUserInfo();
const [previewData,setPreviewData]=useState(null)
    const { data, isLoading } = useQuery({
        queryKey: [`employer${userInfo.createdBy}`],
        queryFn: async () => {
            const res = await getById('/employer', userInfo.createdBy);
            return res.data.data;
        },
        enabled: !!userInfo.createdBy
    });

    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm({
        resolver: yupResolver(employerSchema),
        defaultValues: {
            business_name: '',
            name: {
                first: '',
                middle: '',
                last: '',
            },
            email: '',
            business_gst: '',
            categories: [],
            phone_area: '',
            phone: '',
            address: {
                lane1: '',
                lane2: '',
                city: '',
                state: '',
                pin_code: '',
                country: ''
            },
            product_services: '',
            url: '',
            year_established: new Date(),
            logo: {},
            keywords: '',
            videos: {},
            pictures: {},
        }
    });

    const mutation = useMutation({
        mutationFn: (data) => put(`/employer`, userInfo.createdBy, data),
        onSuccess: (res) => {
            //console.log(res);
            toast.success(res.data.message)
        },
        onError: (err) => {
            toast.error(err.response.data.error)
        }
    });

    const handleRegisterSubmit = async (data) => {
        const formData = new FormData();
        
        // Format the name
        const name = `${data.name.first} ${data.name.middle} ${data.name.last}`.trim();
        
        // Create the base data object
        const formattedData = {
            business_name: data.business_name,
            business_gst: data.business_gst,
            categories: data.categories,
            email: data.email,
            name: name,
            phone_area: data.phone_area,
            phone: data.phone,
            address: {
                lane1: data.address.lane1,
                lane2: data.address.lane2,
                city: data.address.city,
                state: data.address.state,
                pin_code: data.address.pin_code,
                country: data.address.country
            },
            keywords: data.keywords,
            product_services: data.product_services,
            url: data.url,
            year_established: data.year_established,
            logo:data.logo ,
            videos:data.videos ,
            pictures:data.pictures 
        };
    
        // Handle single file uploads
        const logo = watch("logo");
        if (logo instanceof File) {
            formData.append("logo", logo);
        }
    
        const video = watch("videos");
        if (video instanceof File) {
            formData.append("videos[]", video);
        }
    
        const picture = watch("pictures");
        if (picture instanceof File) {
            formData.append("pictures[]", picture);
        }
    
        // Append the JSON data
        formData.append("parse", JSON.stringify(formattedData));
    
        // Log FormData contents for debugging
        for (let pair of formData.entries()) {
            //console.log('FormData:', pair[0], pair[1]);
        }
    
        mutation.mutate(formData);
    };

  

    useEffect(() => {
        if (data) {
            reset({
                business_name: data.business_name || '',
                name: {
                    first: data.name.split(" ")[0] || '',
                    middle: data.name.split(" ")[1] || '',
                    last: data.name.split(" ")[2] || '',
                },
                email: data.email || '',
                business_gst: data.business_gst || '',
                categories: data.categories || '',
                phone_area: data.phone_area || '',
                phone: data.phone || '',
                address: {
                    lane1: data.address.lane1 || '',
                    lane2: data.address.lane2 || '',
                    city: data.address.city || '',
                    state: data.address.state || '',
                    pin_code: data.address.pin_code || '',
                    country: data.address.country || ''
                },
                product_services: data.product_services || '',
                url: data.url || '',
                year_established: data.year_established || new Date(),
                keywords: data.keywords || '',
                logo: data.logo || {},
                videos: data.videos || {},
                pictures: data.pictures || {},
            });
        }
    }, [data, reset]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="page-wrapper dashboard">
           <DashboardSidebar/>
            <section className="user-dashboard">
                <form className="dashboard-outer">
                    <BreadCrumb title="Company Profile!" />
                    <MenuToggler />
                    <BusinessDetail watch={watch} register={register} setValue={setValue} error={errors} />

                    <div className="d-flex justify-content-end">
                        <button
                            type="button"
                            onClick={()=>setPreviewData(watch())}
                            className="theme-btn btn-style-one"
                        >
                            Preview
                        </button>
                        <button
                            onClick={handleSubmit(handleRegisterSubmit)}
                            className="theme-btn btn-style-one"
                        >
                            Submit
                        </button>
                    </div>
                </form>

               <BusinessPreviewModal previewData={previewData} setPreviewData={setPreviewData}/>

            </section>
            <CopyrightFooter />
        </div>
    );
};

export default index;
