

import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
const Qualification = ({filters={}, updateFilters,clearFilters}) => {
    const { qualification } = filters || {};
  
    const { data=[], isLoading } = useQuery({
        queryKey: [`dashboard/options`,"utilities/applicationoptions/allcandidates/personal_info.info.degree"],
        queryFn: async () => {
          let res = (await get(`utilities/applicationoptions/allcandidates/personal_info.info.degree`)).data.data
          return res;
        },
        
      });
      if (isLoading) return <div>Loading...</div>;
      console.log("qualification",qualification)
    return (
        <ul className="switchbox">
            {data?.map((item) => (
                <li key={item.value}>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={item.value==qualification}
                            value={item.value}
                            onChange={(e) =>updateFilters("qualification",e.target.value)}
                        />
                        <span className="slider round"></span>
                        <span className="title">{item.value}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default Qualification;
