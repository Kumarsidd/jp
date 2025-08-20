import { API_CANDIDATE_PATH } from '@/lib/config';
import { getById } from '@/services/api';
import useUserInfo from '@/utils/hooks/useUserInfo';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import "./portfolio.css"
const PersonalPortfolio = () => {
    const userInfo = useUserInfo();
    const { data, isLoading } = useQuery({
        queryKey: [`candidate${userInfo._id}`],
        queryFn: async () => {
            try {
                const res = await getById('/candidate', userInfo._id);
                return res.data.data;
            } catch (error) {
                if (error.response?.data?.error === 'Failed to find candidate') {
                    toast.info('Please fill the information to get going!');
                }
            }
        },
        enabled: !!userInfo._id,
    });

    if (isLoading) {
        return <div className="wrapper">Loading...</div>;
    }

    return (
        <div className="wrapper">
            <div className="intro">
                <div className="profile">
                    <div className="photo">
                        <img 
                            src={data?.profile?.filename ? `${API_CANDIDATE_PATH}${data.profile.filename}` : ''} 
                            alt={data?.name || 'Profile'} 
                        />
                    </div>
                </div>
                <div className="intro-section">
                    <h1 className="title">Contact</h1>
                    <div className="info-section">
                        <i className="fas fa-phone"></i>
                        <span>{data?.contact?.phone || 'Phone Not Available'}</span>
                    </div>
                    <div className="info-section">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>
                            {data?.contact?.current_address?.city && data?.contact?.current_address?.state ? 
                                `${data.contact.current_address.city}, ${data.contact.current_address.state}` : 
                                'Location Not Available'}
                        </span>
                    </div>
                    <div className="info-section">
                        <i className="fas fa-envelope"></i>
                        <span>{data?.contact?.email || 'Email Not Available'}</span>
                    </div>
                </div>

                <div className="intro-section">
                    <h1 className="title">Education</h1>
                    {data?.education?.map((edu, index) => (
                        <div key={index} className="info-section">
                            <span className="education">{edu.name}</span>
                            <br />
                            <span className="education">{edu.qualification}</span>
                            <br />
                            <ul>
                                <li style={{ listStyle: "disc" }}>
                                    {new Date(edu.to).getFullYear()}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="detail">
                <div className="bio">
                    <h1 className="name">{data?.name || 'Name Not Available'}</h1>
                    <p className="profession">{data?.designation || 'Designation Not Available'}</p>
                    <span className="border-bottom"></span>
                </div>

                <div className="detail-section">
                    <div className="detail-title">
                        <div className="title-icon">
                            <i className="fas fa-user-graduate"></i>
                        </div>
                        <strong style={{ fontSize: "1.4rem" }}>Work Experience</strong>
                    </div>
                    <div className="detail-content">
                        {data?.employment?.map((job, index) => (
                            <div key={index} className="timeline-block">
                                <time>
                                    {new Date(job.from).toLocaleDateString()} - {new Date(job.to).toLocaleDateString()}
                                </time>
                                <h1>{job.name}</h1>
                                <p>{job.position}</p>
                                <p>Department: {job.department}</p>
                                <p>Job Sector: {job.categories?.map(cat => cat.label).join(', ')}</p>
                                <p>Scope: {job.scope}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="detail-section">
                    <div className="detail-title">
                        <div className="title-icon">
                            <i className="fas fa-tools"></i>
                        </div>
                        <strong style={{ fontSize: "1.4rem" }}>References</strong>
                    </div>
                    <div className="detail-content">
                        <ul className="tool-list">
                            {data?.references?.map((ref, index) => (
                                <li key={index}>
                                    <span className="tl-name">{ref.name}</span>
                                    <br />
                                    <span className="tl-note">{ref.note}</span>
                                    <br />
                                    Email: <span className="tl-email">{ref.email}</span>
                                    <br />
                                    Phone: <span className="tl-phone">{ref.phone}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="detail-section">
                    <div className="detail-title">
                        <div className="title-icon">
                            <i className="fas fa-heart"></i>
                        </div>
                        <span>Additional Information</span>
                    </div>
                    <div className="detail-content">
                        <div className="outer-frame">
                            <ul className="favor-list">
                                <li>Experience: {data?.experience} years</li>
                                <li>Current Salary: {data?.currentsalary} LPA</li>
                                <li>Expected Salary: {data?.expectedsalary} LPA</li>
                                <li>Marital Status: {data?.marital_status}</li>
                                <li>Gender: {data?.gender}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {data?.achievement?.length > 0 && (
                    <div className="detail-section">
                        <div className="detail-title">
                            <div className="title-icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <span>Achievements</span>
                        </div>
                        <div className="detail-content">
                            <div className="outer-frame">
                                <ul className="favor-list">
                                    {data.achievement.map((achieve, index) => (
                                        <li key={index}>
                                            <span>{achieve.year} - {achieve.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonalPortfolio;