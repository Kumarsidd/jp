import * as Yup from "yup"

export const loginSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required("Password is required").label("Password"),
})

export const registerSchema = Yup.object().shape({
    // name: Yup.string().min(6).required().label("Name"),
    // phone: Yup.string()
    //     .min(10, "Please enter a valid 10-digit phone number")
    //     .max(10, "Please enter a valid 10-digit phone number")
    //     .required()
    //     .label("Phone Number"),
    // gender: Yup.string().required().label("Gender"),
    email: Yup.string().min(6).email().required().label("Email"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .label("Password"),
    userType: Yup.string().required()
});

export const resetAuthenticatedSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    newPassword: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .label("Password"),
    comparePassword: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .label("Password")
        .oneOf([Yup.ref('newPassword'), null], "Passwords must match"),
})
export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
})
export const ChangePasswordSchema = Yup.object().shape({

    newPassword: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .label("Password"),
    comparePassword: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        .label("Password")
        .oneOf([Yup.ref('newPassword'), null], "Passwords must match"),
})
