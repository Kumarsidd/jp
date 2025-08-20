import { get } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import InputRange from "react-input-range";

const SalaryRangeSlider = ({ search, setSearch,data }) => {
    
    const handleOnChange = (value) => {
        setSearch((prev) => ({
            ...prev,
            salary_from: value.min,
            salary_to: value.max
            ,page:1
        }))
    }

    return (
        <div className="range-slider-one salary-range">
            <InputRange
                formatLabel={(value) => ``}
                minValue={0}
                maxValue={data?.maxsalary?.candidate_requirement?.salary_to || 30000}
                value={{
                    min: search.salary_from,
                    max: search.salary_to,
                }}
                onChange={(value) => handleOnChange(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="d-inline-flex align-items-center">
                        <span className="min">₹{search.salary_from}</span>
                        <span className="max ms-2">₹{search.salary_to}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SalaryRangeSlider;
