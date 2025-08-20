import { addExperience, addPage } from "@/features/filter/candidateFilterSlice";
import { get } from "@/services/api";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Experience = () => {
    const userInfo = useUserInfo();
    const dispatch = useDispatch();
    const candidateFilter = useSelector((state) => state.candidateFilter);
    const {status=""}=useParams()
    const handleOnChange = (value) => {
        const [min, max] = value.split('-');
        dispatch(addExperience({ experience_from: min, experience_to: max }));
        dispatch(addPage(1))

    };

    const { data = {}, isLoading } = useQuery({
        queryKey: [`dashboard/applicationoptions/experience`,status],
        queryFn: async () => {
            let res = (await get(`utilities/applicationoptions/${userInfo?.userTypeValue?._id}/experience?status=${status}`)).data.data;
            return res;
        },
        enabled: !!userInfo?.userTypeValue?._id
    });

    const experienceOptions = (() => {
        const min = data?.minExperience 
        const max = data?.maxExperience 
        return min!==undefined && max!==undefined ? Array.from({ length: max - min + 1 }, (_, i) => min + i):[]
    })();

    return (
        <select
            className="chosen-single  form-select chosen-container"
            onChange={(e) => handleOnChange(e.target.value)}
        >
            <option hidden value={""}>Experience</option>
            {experienceOptions.map((year) => (
                <option key={year} value={`${year}-${year + 1}`}>
                    {year} to {year + 1} years
                </option>
            ))}
        </select>
    );
};

export default Experience;
