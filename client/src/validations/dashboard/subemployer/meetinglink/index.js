import * as yup from "yup"

export const meetingSchema = yup.object().shape({
    date: yup
    .date()
    .required('Date is required')
    .typeError('Date must be a valid ISO string'),
time: yup.string().required('Time is required'),
timeDuration: yup
    .number()
    .min(15, 'Time duration must be at least 15 minutes')
    .required('Time duration is required'),
email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
phone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, 'Phone must be a valid number')
    .required('Phone is required'),
message: yup.string(),
address: yup.string(),
meetingLink: yup.string().notRequired().url('Meeting link must be a valid URL')
    // registration_certificate: Yup.mixed().required('Registration certificate is required'),
});