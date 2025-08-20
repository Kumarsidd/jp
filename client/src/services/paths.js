export const paths = {
    // Existing paths
    home: '/',
    login: '/login',
    applicant: '/applicant',
    register: '/register',
    forgot: '/forgot',
    pricing: '/pricing',
    packages: '/employers-dashboard/packages',
    verify: '/verify',
    candidate: '/candidates-dashboard/dashboard',
    candidatelist: '/candidates-list-v1',
    admin: '/admin-dashboard/employers',
    employer: '/employers-dashboard/dashboard',
    candidate_profile: '/candidates-dashboard/my-profile',
    publicemployer: '/employer',
    applicationid: '/candidate',
    candidatev2: '/candidatev2',
    employer_profile: '/employers-dashboard/company-profile',
    sub_employer_profile: '/subemployers-dashboard/dashboard',
    employer_all_applicants: '/employers-dashboard/all-applicants',
    manage_jobs: '/employers-dashboard/manage-jobs',
    edit_job: '/employers-dashboard/edit-job',
    shotlistesumes: '/employers-dashboard/forward-resumes/',
    job_list: '/job-list-v1',
    job: '/job',
    blog: '/blog-list-v1',
    about: '/about',
    contact: '/contact',

    // New paths from BrowserRouter
    faq: '/faq',
    privacy:"/privacy",
    terms: '/terms',
    invoice: '/invoice',
    resetpassword: '/resetpassword',
    unauthorized: '/unauthorized',
    
    // Employer dashboard paths
    employer_subemployer: '/employers-dashboard/subemployer',
    employer_post_jobs: '/employers-dashboard/post-jobs',
    employer_shortlisted: '/employers-dashboard/shortlisted-candidates',
    employer_meeting_links: '/employers-dashboard/meetinglinks',
    employer_messages: '/employers-dashboard/messages',
    employer_resume_alerts: '/employers-dashboard/resume-alerts',
    employer_change_password: '/employers-dashboard/change-password',

    // Subemployer dashboard paths
    subemployer_meeting_links: '/subemployers-dashboard/meetinglinks',
    subemployer_forward_resumes: '/subemployers-dashboard/forward-resumes',
    subemployer_change_password: '/subemployers-dashboard/change-password',

    // Candidate dashboard paths
    candidate_applied_jobs: '/candidates-dashboard/applied-jobs',
    candidate_saved_jobs: '/candidates-dashboard/saved-jobs',
    candidate_change_password: '/candidates-dashboard/change-password',
    candidate_resume: '/candidates-dashboard/my-resume',
    candidate_packages: '/candidates-dashboard/packages',
    candidate_shortlisted: '/candidates-dashboard/short-listed-jobs',

    // Dynamic paths
    job_details: '/job/:id',
    employer_details: '/employer/:id',
    candidate_details: '/candidate/:id',
    applicant_details: '/applicant/:id',
    blog_details: '/blog-details/:id',
    edit_job_details: '/employers-dashboard/edit-job/:id',
    employer_forward_resumes: '/employers-dashboard/forward-resumes/:EmployerId',
    employer_shortlisted_status: '/employers-dashboard/shortlisted-candidates/:status',
    subemployer_meeting_creator: '/subemployers-dashboard/meetinglinks/:createdBy',
    subemployer_forward_resumes_id: '/subemployers-dashboard/forward-resumes/:SubEmployerId'
};

export const  authverify=["/forgot","/login","/register","/resetpassword","/verify"]