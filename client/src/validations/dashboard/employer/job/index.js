import * as Yup from "yup"

export const jobSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    jobtype: Yup.string().required('Job Type is required'),
    location: Yup.string().required('Location is required'),
    place: Yup.string().required('Place is required'),
    // interview_details: Yup.object().shape({
    //     date: Yup.date().required('Interview date is required'),
    //     time: Yup.string().required('Interview time is required'),
    //     location: Yup.string().required('Interview location is required'),
    //     type: Yup.string()
    //         .oneOf(['in_person', 'online', 'phone'], 'Invalid interview type')
    //         .required('Interview type is required'),
    //     notes: Yup.string()
    // }),
    category: Yup.array().of(
        Yup.object().shape({
            value: Yup.string().required('Job Sector value is required'),
            label: Yup.string().required('Job Sector label is required'),
        })
    ).min(1, 'At least Job Sector is required'),
    opening: Yup.number().required('Opening is required').min(1, 'Opening must be at least 1'),
    // age: Yup.number().required('Age is required'),
    candidate_requirement: Yup.object().shape({
        experience: Yup.string().required('Experience is required'),
        salary_from: Yup.number().label("Salary From").transform((value, originalValue) => (originalValue === "" ? null : value)),
        
        salary_to: Yup.number().min(Yup.ref('salary_from'), 'Salary to must be greater than or equal to Salary from').label("Salary To").transform((value, originalValue) => (originalValue === "" ? null : value)),

        bonus: Yup.boolean().required('Bonus is required'),
        job_info: Yup.string().required('Job description is required'),
        skills: Yup.array().of(
            Yup.object().shape({
                value: Yup.string().required('Skill value is required'),
                label: Yup.string().required('Skill label is required'),
            })
        ).min(1, 'At least one skill is required'),
    }),
    personal_info: Yup.array().of(
        Yup.object().shape({
            info: Yup.string().required('Info is required'),
            assets: Yup.array().of(
                Yup.object().shape({
                    value: Yup.string().required('Skill value is required'),
                    label: Yup.string().required('Skill label is required'),
                })
            ).min(1, 'At least one skill is required'),
        })
    ).required('Personal info is required').min(1, 'At least one personal info is required'),
    deadline: Yup.date().required('Dead Line is required'),

    // timing: Yup.object().shape({
    //     job: Yup.string().required('Job timing is required'),
    //     interview: Yup.string().required('Interview timing is required'),
    // }),
    // company: Yup.object().shape({
    //     name: Yup.string().required('Company name is required'),
    //     contact_person: Yup.string().required('Contact person is required'),
    //     phone: Yup.string().required('Phone is required'),
    //     email: Yup.string().email('Invalid email format').required('Email is required'),
    //     contact_person_profile: Yup.string().required('Contact person profile is required'),
    //     size_of_org: Yup.number().required('Size of organization is required').min(1, 'Size must be at least 1'),
    //     job_address: Yup.string().required('Job address is required'),
    //     vacancy: Yup.string().required('Vacancy is required'),
    // }),
});
