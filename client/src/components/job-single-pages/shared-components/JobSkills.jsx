const JobSkills = ({ data }) => {
  return (
    <ul className="job-skills">
      {data?.map((skill, i,arr) => (
        <li key={i}>
          <a >{skill.label} </a> 
          {/* {arr?.length-1!==i?<br/>:<></>} */}
        </li>
      ))}
    </ul>
  );
};

export default JobSkills;
