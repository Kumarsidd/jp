import { jobTypeList } from "@/utils/jobTypeList";


const JobType = ({ search, setSearch }) => {
  
//console.log(jobTypeList.map(item=>item.value))
    const isChecked = (value) => {
        return search.job_type.length > 0 ? search?.job_type?.split(",")?.includes(value) : false;
    };

    const handleJobType = (e) => {
        const { value } = e.target;
        const jobTypes = search.job_type.length > 0 ? search.job_type.split(",") : [];
        const ifExists = jobTypes?.includes(value);
        if (jobTypes.length > 0 && ifExists) {
            const filteredValue = search?.job_type?.split(",")?.filter(item => item.toLowerCase() !== value.toLowerCase()).join(",")
            setSearch((prev) => ({ ...prev, job_type: filteredValue,page:1 }));
        } else {
            setSearch((prev) => ({ ...prev,page:1, job_type: prev.job_type ? prev.job_type + ',' + value : value }))
        }
    }

    return (
        <ul className="switchbox">
            {jobTypeList?.map((item) => (
                <li key={item.name}>
                    <label className="switch">
                        <input
                            type="checkbox"
                            value={item.value}
                            checked={isChecked(item.value)}
                            onChange={handleJobType}
                        />
                        <span className="slider round"></span>
                        <span className="title">{item.name}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default JobType;
