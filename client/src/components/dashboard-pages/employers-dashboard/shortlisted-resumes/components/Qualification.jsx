

import { useDispatch, useSelector } from "react-redux";
import { addEdcucation, addPage } from "@/features/filter/candidateFilterSlice";
import { useQuery } from "@tanstack/react-query";
import { get, getById } from "@/services/api";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { useParams } from "react-router-dom";

const Qualification = () => {
    const { qualification } = useSelector((state) => state.candidateFilter) || {};
    const dispatch = useDispatch();
    const userInfo=useUserInfo()
    const {status=""}=useParams()
    // qualification handler
    const qualificationHandler = (e) => {
        dispatch(addEdcucation(e.target.value));
        dispatch(addPage(1))
    };
    const { data=[], isLoading } = useQuery({
        queryKey: [`dashboard/applicationoptions`,status],
        queryFn: async () => {
          let res = (await get(`utilities/applicationoptions/${userInfo?.userTypeValue?._id}/personal_info.info.degree?status=${status}`)).data.data
          return res;
        },
        enabled:!!userInfo?.userTypeValue?._id
      });
      if (isLoading) return <div>Loading...</div>;
      console.log(data)
    return (
            <select
        className="chosen-single chosen-container"
        onChange={qualificationHandler}
        value={qualification}
      >
        <option hidden value="">Qualifications</option>
                {data?.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.value}
                    </option>
                ))}
      </select>
    );
};

export default Qualification;
