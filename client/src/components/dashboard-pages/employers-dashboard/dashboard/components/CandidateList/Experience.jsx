import { addExperience, addPage } from "@/features/filter/candidateFilterSlice";
import { get } from "@/services/api";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

const Experience = () => {
    const userInfo = useUserInfo();
    const dispatch = useDispatch();
    const {experience_from} = useSelector((state) => state.candidateFilter);

    const handleOnChange = (value) => {
        value=+value
        dispatch(addExperience({ experience_from: value, experience_to: value+1 }));
        dispatch(addPage(1))

    };

    const { data = {}, isLoading } = useQuery({
        queryKey: [`dashboard/applicationoptions/experience`],
        queryFn: async () => {
            let res = (await get(`utilities/applicationoptions/${userInfo?.userTypeValue?._id}/experience`)).data.data;
            return res;
        },
        enabled: !!userInfo?.userTypeValue?._id
    });

    const experienceOptions = (() => {
        const min = data?.minExperience || 0;
        const max = data?.maxExperience || 10;
        return min!==undefined && max!==undefined ? Array.from({ length: max - min + 1 }, (_, i) => min + i):[]
    })();

    return (
        <select
            className="chosen-single chosen-container"
            onChange={(e) => handleOnChange(e.target.value)}
            value={experience_from}
        >
            <option hidden value={""}>Experience</option>
            {experienceOptions.map((year) => (
                <option key={year} value={year}>
                    {year} to {year + 1} years
                </option>
            ))}
        </select>
    );
};

export default Experience;
