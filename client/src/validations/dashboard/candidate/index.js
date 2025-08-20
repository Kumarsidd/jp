import * as Yup from "yup"

export const candidateSchema = Yup.object().shape({
    myProfile: Yup.object().shape({
        candidate_name: Yup.object().shape({
            title: Yup.string().required('Title is required'),
            first: Yup.string().required('First name is required'),
            middle: Yup.string().required('Middle name is required'),
            last: Yup.string().required('Last name is required'),
        }),
        designation:Yup.string().required('Designation is required'),
        gender: Yup.string().required('Gender is required'),
        experience: Yup.number().required('experience is required'),
        currentsalary: Yup.number().notRequired(),
        expectedsalary: Yup.number().required('Expected Salary is required'),
        dob: Yup.date().required('Date of birth is required').nullable(),
        marital_status: Yup.string().required('Marital status is required'),
        upload_cv: Yup.mixed().required('CV upload is required').test('is-file-or-object', 'CV upload must be a file', value => value instanceof File || typeof value === 'object'),
        profile: Yup.mixed().required('Profile upload is required').test('is-file-or-object', 'Profile upload must be a file', value => value instanceof File || typeof value === 'object'),
    }),

    contact: Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        permanent_address: Yup.object().shape({
            lane1: Yup.string().required('Lane 1 is required'),
            lane2: Yup.string().required('Lane 2 is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            pin_code: Yup.string().required('Pin code is required'),
            country: Yup.string().required('Country is required')
        }),
        current_address: Yup.object().shape({
            lane1: Yup.string().optional(),
            lane2: Yup.string().optional(),
            city: Yup.string().optional(),
            state: Yup.string().optional(),
            pin_code: Yup.string().optional(),
            country: Yup.string().optional()
        }),
    }),
    education: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Institution name is required'),
            // from: Yup.date().required('Start date is required'),
            to: Yup.date().required('Passing Year is required'),
            qualification: Yup.string().required('Qualification is required'),
            // certificate: Yup.mixed().required('Certificate upload is required').test('is-file-or-object', 'Certificate upload must be a file', value => value instanceof File || typeof value === 'object'),
        }).required('Education is required')
    ).required('Education is required'),
    achievement: Yup.array().of(
        Yup.object({
          year: Yup.string().required('Achievement Year is required'),
          description: Yup.string().required('Achievement Description is required'),
        })
      ).notRequired(),
    // registration_certificate: Yup.mixed().required('Registration Certificate upload is required').test('is-file-or-object', 'Registration Certificate upload must be a file', value => value instanceof File || typeof value === 'object'),
    employment: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Company name is required'),
            position: Yup.string().required('Position is required'),
            department: Yup.string().required('Department is required'),
            from: Yup.date().required('Start date is required'),
            to: Yup.date().required('End date is required'),
            categories: Yup.array().of(
                Yup.object().shape({
                    value: Yup.string().required('Job Sector value is required'),
                    label: Yup.string().required('Job Sector label is required'),
                })
            ).min(1, 'At least Job Sector is required'),
            scope: Yup.string().required('Scope to Work is required'),
        })
    ).required('Employment is required'),
    references: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Reference name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            phone: Yup.string().required('Phone number is required'),
            note: Yup.string().required('Reference name is required'),
        })
    ).required('References is required'),
    // english_language: Yup.object().shape({
    //     certification_attempted: Yup.string().required('Certification attempted is required'),
    //     recent_test: Yup.date().required('Recent test is required'),
    //     test_score: Yup.object().shape({
    //         listening: Yup.number().required('Listening score is required').moreThan(0, 'Listening score is required'),
    //         reading: Yup.number().required('Reading score is required').moreThan(0, 'Reading score is required'),
    //         writing: Yup.number().required('Writing score is required').moreThan(0, 'Writing score is required'),
    //         speaking: Yup.number().required('Speaking score is required').moreThan(0, 'Speaking score is required'),
    //         overall: Yup.number().required('Overall score is required').moreThan(0, 'Overall score is required')

    //     }),
    //     score_card: Yup.mixed().required('Score card upload is required').test('is-file-or-object', 'Score card  upload must be a file', value => value instanceof File || typeof value === 'object')
        
    // }),
    // coverletter: Yup.string().required('Please add cover letter'),
    hear_about_us: Yup.string().required('Please specify how you heard about us')
});

