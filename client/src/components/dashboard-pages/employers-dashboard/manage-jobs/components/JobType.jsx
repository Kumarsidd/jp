import { jobTypeList } from '@/utils/jobTypeList'
import React from 'react'

const JobType = ({handleChange,search}) => {
  return (
      <select
           className="chosen-single chosen-container"
           onChange={(e)=>handleChange("job_type",e.target.value)}
           value={search.job_type}
         >
           <option hidden value="">Job Type</option>
                   {jobTypeList?.map((item) => (
                       <option key={item.value} value={item.value}>
                           {item.name}
                       </option>
                   ))}
         </select>
  )
}

export default JobType