import React from 'react';
import useUserInfo from '@/utils/hooks/useUserInfo';
import { useQuery } from '@tanstack/react-query';
import { getById } from '@/services/api';
import { toast } from 'react-toastify';
import { API_CANDIDATE_PATH } from '@/lib/config';
import data from "./resumedata.json"
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { Factory } from 'lucide-react';
const PersonalPortfolio = () => {
  const userInfo = useUserInfo();

  const { data, isLoading } = useQuery({
    queryKey: [`candidate${userInfo._id}`],
    queryFn: async () => {
      try {
        const res = await getById('/candidate', userInfo._id);
        return res.data.data;
      } catch (error) {
        if (error.response.data.error === 'Failed to find candidate') {
          toast.info('Please fill the information to get going!')
        }
      }
    },
    enabled: !!userInfo._id,
  });
  const jobSector=data?.employment
  ?.flatMap(item => item.categories)
  ?.filter((category, index, self) =>
    index === self.findIndex(c => c.value === category.value)
  )
  console.log("jobSector",jobSector)
  return (
    <div className="resume">
      <div className="resume_left">
        <div className="resume_profile">
          <img src={API_CANDIDATE_PATH+data?.profile?.filename} className='rounded-circle p-1' alt="Profile" onError={(e) => e.target.src = "/images/profile.png"} />
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold">{data?.name}</p>
              <p className="regular">{data?.designation}</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fas fa-map-signs" />
                </div>
                <div className="data">
                  {data?.contact?.current_address?.city}, {data?.contact?.current_address?.state}, {data?.contact?.current_address?.country}
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-mobile-alt" />
                </div>
                <div className="data">{data?.contact?.phone}</div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="data">{data?.email}</div>
              </li>
              <li>
                <div className="icon">
                <i className="fas fa-industry" />
                </div>
                <div className="data">{jobSector?.map((item=>item.label))?.join(" ,")}</div>
              </li>
            </ul>
          </div>

          {/* <div className="resume_item resume_skills">
            <div className="title">
              <p className="bold">skill's</p>
            </div>
            <ul>
              <li>
                <div className="skill_name">HTML</div>
                <div className="skill_progress">
                  <span style={{ width: "80%" }} />
                </div>
                <div className="skill_per">80%</div>
              </li>
              <li>
                <div className="skill_name">CSS</div>
                <div className="skill_progress">
                  <span style={{ width: "70%" }} />
                </div>
                <div className="skill_per">70%</div>
              </li>
              <li>
                <div className="skill_name">SASS</div>
                <div className="skill_progress">
                  <span style={{ width: "90%" }} />
                </div>
                <div className="skill_per">90%</div>
              </li>
              <li>
                <div className="skill_name">JS</div>
                <div className="skill_progress">
                  <span style={{ width: "60%" }} />
                </div>
                <div className="skill_per">60%</div>
              </li>
              <li>
                <div className="skill_name">JQUERY</div>
                <div className="skill_progress">
                  <span style={{ width: "88%" }} />
                </div>
                <div className="skill_per">88%</div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Social</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fab fa-facebook-square" />
                </div>
                <div className="data">
                  <p className="semi-bold">Facebook</p>
                  <p>Stephen@facebook</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-twitter-square" />
                </div>
                <div className="data">
                  <p className="semi-bold">Twitter</p>
                  <p>Stephen@twitter</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-youtube" />
                </div>
                <div className="data">
                  <p className="semi-bold">Youtube</p>
                  <p>Stephen@youtube</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-linkedin" />
                </div>
                <div className="data">
                  <p className="semi-bold">Linkedin</p>
                  <p>Stephen@linkedin</p>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="resume_right">
        {/* About Section */}
        <div className="resume_item resume_about">
          <div className="title">
            <p className="bold">About</p>
          </div>
          <ul >
            <li>
              Gender: {data?.gender} <br />
            </li>
            <li>

              Marital Status: {data?.marital_status}
            </li>
            <li>
              Date of Birth: {new Date(data?.dob).toLocaleDateString()} <br />

            </li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="resume_item resume_work">
          <div className="title">
            <p className="bold">Work Experience</p>
          </div>
          <ul>
            {data?.employment?.map((job, index) => (
              <li key={index}>
                <div className="date">
                  <span className="from">{new Date(job.from).getFullYear()}</span> -{' '}
                  <span className="to">{new Date(job.to).getFullYear()}</span>
                </div>
                <div className="info">
                  <p className="semi-bold">
                    {job.position} at {job.name}
                  </p>
                  <p>
                    Worked in the {job.department} department, focusing on sectors like{' '}
                    {job.categories.map((cat) => cat.label).join(', ')}.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Education Section */}
        <div className="resume_item resume_education">
          <div className="title">
            <p className="bold">Education</p>
          </div>
          <ul>
            {data?.education?.map((edu, index) => (
              <li key={index}>
                <div className="date">
                  <span className="to">{new Date(edu.to).getFullYear()}</span>
                </div>
                <div className="info">
                  <p className="semi-bold">
                    {capitalizeFirstLetter(edu.qualification)} from {capitalizeFirstLetter(edu.name)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements Section */}
        {Array.isArray(data?.achievement)&& data?.achievement?.length> 0 &&   <div className="resume_item resume_achievements">
          <div className="title">
            <p className="bold">Achievements</p>
          </div>
          <ul>
            {data?.achievement?.map((achieve, index) => (
              <li key={index}>
                <div className="date">{achieve.year}</div>
                <div className="info">
                  <p>{achieve.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div> }
      

        {/* References Section */}
        {/* <div className="resume_item resume_references">
          <div className="title">
            <p className="bold">References</p>
          </div>
          <ul>
            {data?.references?.map((ref, index) => (
              <li key={index}>
                <p>
                  <span className="semi-bold">{ref.name}</span> ({ref.note})<br />
                  Email: {ref.email}, Phone: {ref.phone}
                </p>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Compensation Section */}
        {/* <div className="resume_item resume_compensation">
          <div className="title">
            <p className="bold">Compensation</p>
          </div>
          <p>
            Current Salary: {data?.currentsalary} LPA <br />
            Experience: {data?.experience} years
          </p>
        </div> */}
      </div>
    </div>


  );
};

export default PersonalPortfolio;