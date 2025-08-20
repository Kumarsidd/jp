import { get, getById } from "@/services/api";
import { paths } from "@/services/paths";
import { dateFormatter } from "@/utils/dateformater";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const PackageDataTable = () => {
  const {data,isLoading,isError,error}=useQuery({
    queryKey:["plans"],
    queryFn: async () => {
        let res = (await get('payment/subscription')).data.data;
        return res;
    }

  })
  
  
  if (isLoading) return <div>Loading...</div>
  if (isError) {
    return(
    <div className="error">
      {error?.response?.data?.error || error.message}
      <Link to={paths.pricing}>Buy Packages</Link>
      </div>
    )
  }

  return (
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Transaction id</th>
          <th>Package</th>
          <th>Expiry</th>
          <th>Total Jobs Limit</th>
          <th>Used</th>
          <th>Remaining</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td className="trans-id">{data?.orderId}</td>
          <td className="package">
            <a href="#">{data?.plan_id?.name}</a>
          </td>
          <td className="expiry">
          {data?.expiresAt ? dateFormatter.format(new Date(data.expiresAt)) : ""}

          </td>
          <td className="total-jobs">{data?.plan_id?.jobPostLimit}</td>
          <td className="used">{data?.jobPostsUsed}</td>
          <td className="remaining">{
           data?.jobPostLimit
            }</td>
          <td className="status">{data?.isActive?"Active":'In Active'}</td>
        </tr>
     
      </tbody>
    </table>
  );
};

export default PackageDataTable;
