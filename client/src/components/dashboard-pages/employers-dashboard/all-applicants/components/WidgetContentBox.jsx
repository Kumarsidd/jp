
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CandidateCard from "@/components/common/CandidateCard";

const WidgetContentBox = ({ data, title,setStatus }) => {
  const handleChangestatus = (status) => {
    setStatus(status)
  }
  return (
    <div className="widget-content">
      <div className="tabs-box">
       
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>{title}</h6>
            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals" onClick={()=>handleChangestatus("")}>Total(s): {data?.stats?.totals || 0}</Tab>
              <Tab className="tab-btn approved"  onClick={()=>handleChangestatus("shortlisted")}>Approved: {data?.stats?.approved || 0}</Tab>
              <Tab className="tab-btn rejected"  onClick={()=>handleChangestatus("rejected")}>Rejected(s): {data?.stats?.rejected || 0}</Tab>
            </TabList>
          </div>
        
          <div className="tabs-content">
          { [1,2,3].map((item)=>(
             <TabPanel>
             {
               !data ||!data.data || data.data.length === 0?(<p>No candidates found.</p>):(
                 <div className="row">
                 {data?.data.map((item) => (
                   <div
                   className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                   key={item?.candidate?._id}
               >
                  <CandidateCard item={item}/>
                  </div>
                 ))}
               </div>
               )
             }
            
           </TabPanel>
          ))}
            {/* Repeat for other TabPanels with similar checks */}
          </div>
        </Tabs>
      </div>
    </div>
  );
};


export default WidgetContentBox;
