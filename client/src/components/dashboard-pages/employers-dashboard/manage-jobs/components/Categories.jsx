import { get, getById } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import useUserInfo from "@/utils/hooks/useUserInfo";
const Categories = ({handleChange,search}) => {
    const userInfo=useUserInfo()
  
    const { data=[], isLoading } = useQuery({
        queryKey: [`dashboard/options/categories`],
        queryFn: async () => {
          let res = (await get(`utilities/options/${userInfo?.userTypeValue?._id}/categories.label`)).data.data
          return res;
        },
        enabled:!!userInfo?.userTypeValue?._id
      });
      if (isLoading) return <div>Loading...</div>;

    return (
        <select
        className="chosen-single chosen-container"
        onChange={(e)=>handleChange("categories",e.target.value)}
        value={search?.categories}
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
