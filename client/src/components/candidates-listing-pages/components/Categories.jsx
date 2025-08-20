

import { get, getById } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import useUserInfo from "@/utils/hooks/useUserInfo";

const Categories = ({filters={}, updateFilters,clearFilters}) => {
    const userInfo=useUserInfo()
    const {  category } =filters

    // category handler
    const categoryHandler = (e) => {
        updateFilters("category",e.target.value)
    };
    const { data=[], isLoading } = useQuery({
        queryKey: [`dashboard/options`],
        queryFn: async () => {
          let res = (await get(`utilities/applicationoptions/allcandidates/categories.label`)).data.data
          return res;
        },
        
      });
      if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <select
                onChange={categoryHandler}
                value={category}
                className="form-select"
            >
                <option value="">Choose a category</option>
                {data?.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.value}
                    </option>
                ))}
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default Categories;
