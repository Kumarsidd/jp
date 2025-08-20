

import { useDispatch, useSelector } from "react-redux";

import { get, getById } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { addCategory, addPage } from "@/features/filter/candidateFilterSlice";

const Categories = () => {
    const userInfo=useUserInfo()
    const { category } = useSelector((state) => state.candidateFilter) || {};
console.log("category",category)
    const dispatch = useDispatch();

    // category handler
    const categoryHandler = (e) => {
        dispatch(addCategory(e.target.value));
        dispatch(addPage(1))

    };
    const { data=[], isLoading } = useQuery({
        queryKey: [`dashboard/applicationoptions/categories`],
        queryFn: async () => {
          let res = (await get(`utilities/applicationoptions/${userInfo?.userTypeValue?._id}/categories.label`)).data.data
          return res;
        },
        enabled:!!userInfo?.userTypeValue?._id
      });
      if (isLoading) return <div>Loading...</div>;

    return (
        <select
        className="chosen-single chosen-container"
        onChange={categoryHandler}
        value={category}
      >
        <option hidden value="">Job Sector</option>
                {data?.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.value}
                    </option>
                ))}
      </select>
    );
};

export default Categories;
