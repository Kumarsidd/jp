import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { post } from '@/services/api';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const [isLoading,setIsLoading]=useState(false)
  // Initialize the form with validation schema via yupResolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // TanStack Query mutation hook for form submission
  const { mutate, error, data } = useMutation({
    mutationFn: async (formData) => {
      setIsLoading(true)
      console.log('API call initiated with data:', formData);
      let res= await post("utilities/ContactUs", formData);
      setIsLoading(false)
      return res
      
    },
    onSuccess: (data) => {
      console.log('Form submitted successfully:', data);
      setIsLoading(false)
  
    },
    onError: (err) => {
      setIsLoading(false)
      console.error('Error submitting form:', err);
    },
  });

  // Form submission handler
  const onSubmit = (formData) => {
    console.log('Submitting form data:', formData);
    mutate(formData);
    console.log('isLoading after mutate call:', isLoading);
  };
console.log("isLoading",isLoading)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* Name Field */}
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Your Name*"
            className={`${errors?.username?.message ? 'error' : ''}`}
            {...register('username')}
          />
          {errors?.username?.message && <small className="error-text">{errors.username.message}</small>}
        </div>

        {/* Email Field */}
        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Your Email*"
            {...register('email')}
            className={`${errors?.email?.message ? 'error' : ''}`}
          />
          {errors?.email?.message && <small className="error-text">{errors.email.message}</small>}
        </div>

        {/* Subject Field */}
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Subject *"
            {...register('subject')}
            className={`${errors?.subject?.message ? 'error' : ''}`}
          />
          {errors?.subject?.message && <small className="error-text">{errors.subject.message}</small>}
        </div>

        {/* Message Field */}
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Your Message</label>
          <textarea
            placeholder="Write your message..."
            {...register('message')}
            className={`${errors?.message?.message ? 'error' : ''}`}
          />
          {errors?.message?.message && <small className="error-text">{errors.message.message}</small>}
        </div>

        {/* Submit Button */}
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button className="theme-btn btn-style-one" type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {/* Response Message */}
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="response">
            {error && <div className="error">{error.message}</div>}
            {data && <div className="success">Form submitted successfully!</div>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
