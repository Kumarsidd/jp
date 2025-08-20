import * as Yup from "yup"

export const employerSchema = Yup.object().shape({
    business_name: Yup.string().required('Business name is required'),
    business_gst: Yup.string().required('GST is required'),
    categories: Yup.array().of(
        Yup.object().shape({
            value: Yup.string().required('Job Sector value is required'),
            label: Yup.string().required('Job Sector label is required'),
        })
    ).min(1, 'At least Job Sector is required'),
    name: Yup.object().shape({
        // title: Yup.string().required('Title is required'),
        first: Yup.string().required('First name is required'),
        middle: Yup.string(),
        last: Yup.string().required('Last name is required'),
    }),
    email: Yup.string().required('Email is required'),
    phone_area: Yup.string().required('Phone area is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.object().shape({
        lane1: Yup.string().required('Lane 1 is required'),
        lane2: Yup.string(),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        pin_code: Yup.number().required('Pin code is required'),
        country: Yup.string().required('Country is required')
    }),
    product_services: Yup.string().required('Product/services are required'),
    url: Yup.string().url('Invalid URL format').required('URL is required'),
    // url: Yup.string()
    //     .required('URL is required')
    //     .test('is-valid-url', 'Invalid URL format', value => {
    //         const urlPattern = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
    //         return value ? urlPattern.test(value) || value.startsWith('http://localhost') : false;
    //     }),
    year_established: Yup.date().required('Year established is required'),
    keywords: Yup.string().required('Keyword is required'),
    logo: Yup.mixed().required('Logo upload is required').test('is-file-or-object', 'Logo upload must be a file', value => value instanceof File || typeof value === 'object'),
    videos: Yup.mixed().test('is-file-or-object', 'Video upload must be a file', value => value instanceof File || typeof value === 'object'),
    pictures: Yup.mixed().test('is-file-or-object', 'Picture upload must be a file', value => value instanceof File || typeof value === 'object'),
});
