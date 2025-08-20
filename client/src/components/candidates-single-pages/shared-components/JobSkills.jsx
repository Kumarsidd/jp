const JobSkills = ({ data }) => {
  return (
    <ul className="job-skills">
      {data?.length > 0 && data.map((skill, i) => (
        <li key={i}>
          <a>{skill.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default JobSkills;
