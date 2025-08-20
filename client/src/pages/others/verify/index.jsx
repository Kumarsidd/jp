import DashboardHeader from '@/components/header/DashboardHeader';
import MobileMenu from '@/components/header/MobileMenu';
import Header from '@/components/pages-menu/login/Header';
import { encrypt } from '@/lib/encrypt';
import { getById, post } from '@/services/api';
import { paths } from '@/services/paths';
import { login } from '@/store/reducers/user';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Verify = () => {
    const [otp, setOtp] = useState(Array(4).fill(""));
    const [email, setEmail] = useState('')
    const inputRefs = useRef([]);

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleKeyDown = (e) => {
        if (
            !/^[0-9]{1}$/.test(e.key) &&
            e.key !== "Backspace" &&
            e.key !== "Delete" &&
            e.key !== "Tab" &&
            !e.metaKey
        ) {
            e.preventDefault();
        }

        const index = inputRefs.current.indexOf(e.target);
        if (e.key === "Delete" || e.key === "Backspace") {
            e.preventDefault();
            setOtp((prevOtp) => {
                const newOtp = [...prevOtp];
                if (newOtp[index] !== "") {
                    newOtp[index] = "";
                } else if (index > 0) {
                    newOtp[index - 1] = "";
                    inputRefs.current[index - 1].focus();
                }
                return newOtp;
            });
        }
    };

    const handleInput = (e) => {
        const { target } = e;
        const index = inputRefs.current.indexOf(target);
        if (target.value) {
            setOtp((prevOtp) => [
                ...prevOtp.slice(0, index),
                target.value,
                ...prevOtp.slice(index + 1),
            ]);
            if (index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const handlePaste = (e) => {
        e.preventDefault();
        //console.log("Paste event triggered");
        const pastedData = e.clipboardData.getData("text");
        //console.log("Pasted data:", pastedData);

        const pastedCode = pastedData.slice(0, 4).split('');
        //console.log("Processed pasted code:", pastedCode);

        if (pastedCode.length === 4 && pastedCode.every(char => /^\d$/.test(char))) {
            //console.log("Valid OTP, updating state");
            setOtp(pastedCode);
            inputRefs.current[3].focus();
        } else {
            //console.log("Invalid OTP, not updating state");
        }
    };

    const mutation = useMutation({
        mutationFn: (data) => post('/user/verify', data),
        onSuccess: async (res) => {
            toast.success('User verification completed!');
           
            let user;
            if (res.data.success) {
                sessionStorage.setItem("session", res.data.token)
                user = (await getById(`/user`, res.data.data._id)).data.data
            }

            let enData = encrypt(user);

            sessionStorage.setItem("userInfo", enData);
            dispatch(login(enData));
            console.log("End Data",user)
            window.location.href = user.userType.name === 'Candidate' ? paths.candidate : user.userType.name==="Subemployer"?paths.sub_employer_profile:paths.employer;  
        },
        onError: (err) => {
            //console.log(err)
            toast.error(err.response.data.error)
        }
    });

    const handleOtpSubmit = (_) => {
        _.preventDefault()
        mutation.mutate({
            email,
            otp: otp.join("")
        })
    }

    const mutation1 = useMutation({
        mutationFn: (data) => post('/user/resend', data),
        onSuccess: (res) => {
            toast.success('User otp resend!');
        },
        onError: (err) => {
            //console.log(err)
            toast.error(err.response.data.error)
        }
    });

    const handleResendSubmit = (_) => {
        _.preventDefault()
        mutation1.mutate({ email })
    }

    useEffect(() => {
        const div = document.getElementsByClassName('modal-backdrop');
        if (div.length > 0) {
            div[0].parentNode.removeChild(div[0]);
        };

        if (location.search || localStorage.getItem("email")) {
            if (location.search) {
                setEmail(location.search.split("=")[1]);
            } else {
                setEmail(localStorage.getItem("email"))
            }
        }

    }, [])

    return (
        <>
        <DashboardHeader/>
            <MobileMenu />
            <div className="login-section">
                <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
                        <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your email - <span className='verify-otp'>{email}</span>.</p>
                    </header>
                    <form onSubmit={handleOtpSubmit}>
                        <div className="flex items-center justify-center gap-3">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="shadow-xs rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl mt-4"
                                    pattern="\d*"
                                    value={digit}
                                    onChange={handleInput}
                                    onKeyDown={handleKeyDown}
                                    onFocus={handleFocus}
                                    onPaste={handlePaste}
                                    maxLength="1"
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    style={{ width: '8%', marginRight: '10px', borderRadius: '10px' }}
                                />
                            ))}
                        </div>
                        <div className="max-w-[260px] mx-auto mt-4">
                            <button className="theme-btn btn-style-one" type="submit" name="log-in">
                                Verify Account
                            </button>
                        </div>
                    </form>
                    <div className="text-sm text-slate-500 mt-4">
                        Didn't receive code?
                        <button className="verify-otp" style={{ paddingLeft: '4px' }} onClick={handleResendSubmit}>Resend</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verify