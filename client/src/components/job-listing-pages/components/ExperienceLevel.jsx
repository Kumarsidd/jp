import InputRange from "react-input-range";

const ExperienceLevel = ({ search, setSearch,data }) => {

    const handleOnChange = (value) => {
        setSearch((prev) => ({
            ...prev,
            experience_from: value.min,
            experience_to: value.max
            ,page:1
        }))
    }
    console.log("data",data)
    if(!data) return null
    return (
        <div className="range-slider-one salary-range">
            <InputRange
                formatLabel={(value) => ``}
                minValue={0}
                maxValue={data?.maxeperience?.candidate_requirement?.experience || 10}
                value={{
                    min: search.experience_from,
                    max: search.experience_to,
                }}
                onChange={(value) => handleOnChange(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="d-inline-flex align-items-center">
                        <span className="min">{search.experience_from || 0} year</span>
                        <span className="max ms-2">{search.experience_to || 10} year</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceLevel;
