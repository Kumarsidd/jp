import React from "react";
const JobDetailsDescriptions = ({ data }) => {
  //console.log("personal_info",data?.personal_info)
  return (
    <div className="job-detail">
      <h4>Job Description</h4>
      <div  dangerouslySetInnerHTML={{__html:data?.candidate_requirement?.job_info}}>
      </div>
        <br/>
        <br/>
        <br/>
      {
           data?.personal_info?.map((item,indx)=>(
            <React.Fragment key={indx}>
            <h4>{item?.info}</h4>
            <ul className="list-style-three">
              {
                item.assets?.map((a,i)=>( <li key={i}>{a.label} </li>))
              }
             
            </ul> 
            </React.Fragment>
              
           ))
      }
      {/* <h4>Key Responsibilities</h4>
      <ul className="list-style-three">
        <li>
          Be involved in every step of the product design cycle from discovery
          to developer handoff and user acceptance testing.
        </li>
      </ul> */}
    
    </div>
  );
};

export default JobDetailsDescriptions;
