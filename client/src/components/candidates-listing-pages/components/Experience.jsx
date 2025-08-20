import { addExperience } from "@/features/filter/candidateFilterSlice";
import { get } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import InputRange from "react-input-range";

const Experience = ({filters={}, updateFilters,clearFilters}) => {
    
    const handleOnChange = (value) => {
        updateFilters('experience_from', value.min)
        updateFilters('experience_to', value.max)
   }

   
    return (
        <div className="range-slider-one salary-range">
            <InputRange
                formatLabel={(value) => ``}
                minValue={0}
                maxValue={10}
                value={{
                    min: filters.experience_from,
                    max: filters.experience_to,
                }}
                onChange={(value) => handleOnChange(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="d-inline-flex align-items-center">
                        <span className="min">{filters.experience_from || 0} year</span>
                        <span className="max ms-2">{filters.experience_to || 10} year</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Experience;
