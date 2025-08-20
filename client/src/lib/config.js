const API_PROD = import.meta.env.VITE_API_PROD;
const API_DEV = import.meta.env.VITE_API_DEV;
const MODE=import.meta.env.MODE

const API_EMPLOYER_PATH = import.meta.env.VITE_EMPLOYER_URL;
const API_CANDIDATE_PATH =  import.meta.env.VITE_CANDIDATE_URL;
// const API_EMPLOYER_PATH = import.meta.env.VITE_DEV_EMPLOYER_URL
// const API_CANDIDATE_PATH = import.meta.env.VITE_CANDIDATE_URL;
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = import.meta.env.VITE_RAZORPAY_KEY_SECRET;


export {
    API_PROD, API_DEV, API_EMPLOYER_PATH, API_CANDIDATE_PATH,RAZORPAY_KEY_ID,RAZORPAY_KEY_SECRET
}