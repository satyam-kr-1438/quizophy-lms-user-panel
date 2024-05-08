import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import TarnsactionHistoryAction from 'components/blocks/navbar/TransactionHistoryAction';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import { getAllTransactionDetails } from 'components/request/request';
const TransactionHistory: NextPage = () => {
   const [transactions,setTransactions]=useState<any[]>([])
   const [loading,setLoading]=useState(true)
  const getTransactionDetailsData=async ()=>{
     try{
        let currUser=getAuthenticatedUserData()
        if(currUser && currUser?.id){
          const {data}=await getAllTransactionDetails(currUser?.id)
          if(data?.success){
            setTransactions(data?.data)
            setLoading(false)
          }else{
            setLoading(false)
          }
        }
     }catch(err){
      setTransactions([])
      setLoading(false)
     }
  }
  useEffect(()=>{
     getTransactionDetailsData()
  },[])

  return (
    <Fragment>
      
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
                <DashboardNavbar
                // info
                navOtherClass="navbar-other ms-lg-4"
                navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                button={<DashboardNavbarModal/>}
                />
      </header>

      <main className="">
          {loading ? <Loading/> : transactions?.length>0 ?<section className="wrapper bg-light">
              <div className="container pt-10 pb-14 " >
                <div className="row gy-10" style={{overflowX:"scroll"}}>
                      <table className="table table-responsive">
                            <thead>
                            <tr>
                                <th scope="col"  style={{fontSize:"12px",color:"#1976d2"}}>Type</th>
                                <th scope="col"  style={{fontSize:"12px",color:"#1976d2"}}>Buy Date</th>
                                <th scope="col"  style={{fontSize:"12px",color:"#1976d2"}}>Total Price</th>
                                <th scope="col"  style={{fontSize:"12px",color:"#1976d2"}}>Payment ID</th>
                                <th scope="col"  style={{fontSize:"12px",color:"#1976d2"}}>Payment Status</th>
                                <th scope="col"  style={{fontSize:"12px",color:"#1976d2"}}>Payment Method</th>
                                <th scope="col"  style={{fontSize:"12px",color:"#1976d2"}}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                               {
                                  transactions?.map((item:any,index:any)=>{
                                     return <tr key={index}>
                                     <th scope="row"  style={{fontSize:"12px"}}>
                                      {
                                        item?.packageid?"Packages":item?.bundleid?"Bundle Packages":"Passes"
                                      }
                                     </th>
                                     <td  style={{fontSize:"12px"}}>{  String(new Date(item?.buydate).getDate()+"-"+new Date(item?.buydate).toLocaleString('default', { month: 'long' })+"-"+new Date(item?.buydate).getFullYear())}</td>
                                     <td  style={{fontSize:"12px"}}>{item?.amount} {item?.currency}</td>
                                     <td  style={{fontSize:"12px"}}>{item?.transactionid}</td>
                                     <td  style={{fontSize:"12px"}}>Success</td>
                                     <td  style={{fontSize:"12px"}}>{item?.payment_method}</td>
                                     <td>
                                         <TarnsactionHistoryAction item={item}/>
                                     </td>
                                 </tr>
                                  })
                               }
                            </tbody>
                      </table>
                </div>
              </div>
          </section>:<ContentNotFound button_text="Back to Home" to="/dashboard/packages"/>}
      </main>
      {/* <ContentNotFound/> */}
      <footer className="footer_container_dashboard_content">
         <DashboardFooter/>
      </footer>

      {/* ========== footer section ========== */}
    </Fragment>
  );
};

export default TransactionHistory;
