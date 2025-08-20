

const CandidatesGender = ({filters={}, updateFilters,clearFilters}) => {
    const { gender } =filters
    return (
        <>
            <select
                className="form-select"
                value={gender}
                onChange={(e)=>updateFilters("gender",e.target.value)}
            >
                <option hidden value={""}>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default CandidatesGender;
