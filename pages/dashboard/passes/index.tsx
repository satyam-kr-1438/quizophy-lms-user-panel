import { NextPage } from 'next';
import { Fragment, useEffect, useMemo, useState } from 'react';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import { getAllPasses } from 'components/request/request';
import { ErrorMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import BuyNowComponent from 'components/dashboardComponent/common/BuyNowComponent';
import { useSelector } from 'react-redux';
import { checkUserProfileStatus } from 'hooks/localStorageInfo';
import { useRouter } from 'next/router';


const Passes: NextPage = () => {
  const [loading,setLoading]=useState(true)
  const [passes,setPasses]=useState<any[]>([])
  const router=useRouter()
  const [passesFeatures,setPassesFeatures]=useState<any[]>([])
  const [buyNowSection,setBuyNowSection]=useState<boolean>(false)
  const [selectedPlanType,setSelectedPlanType]=useState<any>("Pro")
  const [selectedPlan,setSelectedPlan]=useState<any>(1)
  const [packages,setPackages]=useState<any>(undefined)
  const [features,setFeatures]=useState<any[]>(["Free Quizzes","Live Quizzes"])
  const {premiumPackages}:any=useSelector((state:any)=>state?.reducerSlice)

  const memoizedBuyComponent=useMemo(()=>{
    if(packages){
       return <BuyNowComponent packageDetail={packages} type="Pass"/>
    }
 },[packages])

  const getAllPAssesData=async()=>{
     try{
            const {data}=await getAllPasses()
            if(data?.success){
              // setFeatures(data?.features)
              setPasses(data?.data)
              setPassesFeatures(data?.data2)
              setTimeout(()=>{
                  setLoading(false)
              },200)
            }
     }catch(err){
         ErrorMessage("Something went Wrong.")
         setLoading(false)
     }
  }
  useEffect(()=>{
    getAllPAssesData()
  },[])
  return (
    <Fragment>
                <header className="wrapper bg-soft-primary">
                    <DashboardNavbar
                    // info
                    navOtherClass="navbar-other ms-lg-4"
                    navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                    button={<DashboardNavbarModal/>}
                    />
                </header>





                {
                  loading ? <Loading/>:<>
                       {passes?.length>0 ? buyNowSection? <main className="content-wrapper">
                        {
                          memoizedBuyComponent
                        }
                      </main>:
                      <main className="content-wrapper" style={{background:"#e6effb"}}>
                        {/* ========== title section ========== */}
                        <section className="wrapper">
                          <div className="container-fluid text-center">
                            <div className="row">
                              <div className="col-12  mx-auto">
                                  <div className="main_passes_container_top">
                                      <div className={selectedPlanType=="Pro"?"passes_top_section_pro_pass1 passes_top_section_pro_pass_common_active":"passes_top_section_pro_pass1 passes_top_section_pro_pass_common"} onClick={()=>{
                                        setSelectedPlanType("Pro")
                                        setPackages(undefined)
                                      }}>
                                          <p>Pass Pro</p>
                                          <img src="/img/pass-pro-brand.svg" alt="Pass Pro"/>
                                          <span>Suggested</span>
                                      </div>
                                      <div className={selectedPlanType=="Pass"?"passes_top_section_pro_pass2 passes_top_section_pro_pass_common_active":"passes_top_section_pro_pass2 passes_top_section_pro_pass_common"} onClick={()=>{
                                        setSelectedPlanType("Pass")
                                        setPackages(undefined)

                                      }}>
                                          <p>Pass</p>
                                          <img src="/img/pass-ticket-blue.svg" alt="pass"/>
                                      </div>
                                  </div>

                                  
                              </div>
                            </div>
                          </div>
                        </section>

                        <section className="wrapper" style={{paddingBottom:"100px"}}>
                          <div className="container pb-5 pb-md-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                              <div className="col-lg-7 col-md-12 col-12">
                                                        <div className={`card my-5 mx-3 py-3 px-2 col-12 mx-auto`}>
                                                              <table>
                                                                  <tr className="">
                                                                      {/* <th className="text-center"> */}
                                                                          <td className="table_features_td">Pass benefits</td>
                                                                      {/* </th> */}
                                                                      {/* <th className="text-center" style={{backgroundColor:`${selectedPlanType=="Pro"?"#FAF0D1":""}`,borderRadius:"5px 5px 0px 0px",textAlign:"center",marginLeft:"auto"}}> */}
                                                                          <td className="table_features_td text-center"style={{backgroundColor:`${selectedPlanType=="Pro"?"#FAF0D1":""}`,borderRadius:"5px 5px 0px 0px",textAlign:"center",marginLeft:"auto"}} onClick={()=>{
                                                                            setSelectedPlanType("Pro")
                                                                          }}>Pass Pro</td>
                                                                      {/* </th> */}
                                                                      {/* <th style={{backgroundColor:`${selectedPlanType=="Pass"?"#FAF0D1":""}`,borderRadius:"5px 5px 0px 0px",textAlign:"center",marginLeft:"auto"}}> */}
                                                                          <td className="table_features_td text-center" style={{backgroundColor:`${selectedPlanType=="Pass"?"#FAF0D1":""}`,borderRadius:"5px 5px 0px 0px",textAlign:"center",marginLeft:"auto"}} onClick={()=>{
                                                                            setSelectedPlanType("Pass")
                                                                          }}>Pass</td>
                                                                      {/* </th> */}
                                                                  </tr>

                                                                  <tbody>
                                                                      {
                                                                        features?.map((item:any,index:any)=>{
                                                                          return <tr key={index} onClick={()=>{
                                                                            if(selectedPlanType=="Pro"){

                                                                            }
                                                                          }}>
                                                                          <td className="table_features_td" style={{fontSize:"12px"}}>{item}</td>
                                                                          {
                                                                            passesFeatures?.find((item2:any)=>item2?.name=="Pass Pro")?.features?.find((item3:any,index3:any)=>item3?.feature==item)?.feature==item ?
                                                                            <td className="table_features_td text-center" style={{backgroundColor:`${selectedPlanType=="Pro"?"#FAF0D1":""}`}} onClick={()=>{
                                                                                setSelectedPlanType("Pro")
                                                                              }}><span style={{textAlign:"center",marginBottom:"10px",fontSize:"12px"}}><IoCheckmarkOutline  style={{color:"green",transform:"scale(1.4)"}}/></span></td>:
                                                                            <td className="table_features_td text-center" style={{backgroundColor:`${selectedPlanType=="Pro"?"#FAF0D1":""}`}} onClick={()=>{
                                                                                setSelectedPlanType("Pro")
                                                                              }}><span style={{textAlign:"center",marginBottom:"10px",fontSize:"12px"}}><RxCross1  style={{color:"red",transform:"scale(1.2)"}}/></span></td> 
                                                                          }

                                                                        {
                                                                            passesFeatures?.find((item2:any)=>item2?.name=="Pass")?.features?.find((item3:any,index3:any)=>item3?.feature==item)?.feature==item ?
                                                                            <td className="table_features_td text-center" style={{backgroundColor:`${selectedPlanType=="Pass"?"#FAF0D1":""}`}} onClick={()=>{
                                                                                setSelectedPlanType("Pass")
                                                                              }}><span style={{textAlign:"center",marginBottom:"10px",fontSize:"12px"}}><IoCheckmarkOutline  style={{color:"green",transform:"scale(1.4)"}}/></span></td>:
                                                                            <td className="table_features_td text-center" style={{backgroundColor:`${selectedPlanType=="Pass"?"#FAF0D1":""}`}} onClick={()=>{
                                                                                setSelectedPlanType("Pass")
                                                                              }}><span style={{textAlign:"center",marginBottom:"10px",fontSize:"12px"}}><RxCross1  style={{color:"red",transform:"scale(1.2)"}}/></span></td> 
                                                                          }

                                                                          
                                                                      </tr>
                                                                        })
                                                                      }

                                                                      <tr>
                                                                          <td>

                                                                          </td>
                                                                          <td  className="table_features_td text-center" style={{backgroundColor:`${selectedPlanType=="Pro"?"#FAF0D1":""}`}}>
                                                                          <input className="form-check-input text-center mx-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={selectedPlanType=="Pro"} onClick={()=>{
                                                                            setSelectedPlanType("Pro")
                                                                          }}/>

                                                                          </td>
                                                                          <td className="table_features_td text-center" style={{backgroundColor:`${selectedPlanType=="Pass"?"#FAF0D1":""}`}}>
                                                                          <input className="form-check-input text-center mx-auto text-center" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={selectedPlanType=="Pass"} onClick={()=>{
                                                                            setSelectedPlanType("Pass")
                                                                          }}/>
                                                                          </td>
                                                                      </tr>
                                                                      
                                                                  </tbody>
                                                              </table>
                                                        </div>

                                                        <div className="d-md-none d-sm-none d-none d-lg-block">
                                                            <button className="btn btn-outline-primary" onClick={()=>{
                                                                    if( packages=="undefined" ||  typeof packages=="undefined" || !packages?.id){
                                                                      ErrorMessage("Please select Passes")
                                                                    }else{         
                                                                      if(!checkUserProfileStatus()){
                                                                        ErrorMessage("Please Complete your Profile.")
                                                                        router.push("/dashboard/profile")
                                                                      }else{
                                                                        setBuyNowSection(true)
                                                                      }
                                                                    }
                                                            }}>Buy Now</button>
                                                        </div>
                                              </div>


                                              <div className="col-lg-5 col-md-12 col-12">

                                                  {
                                                    selectedPlanType=="Pro" && passes?.filter((item)=>item?.tblpass_type?.name=="Pass Pro")?.map((item2:any,index2:any)=>{
                                                        return <div key={index2} className={`card my-5 mx-3 py-3 px-2 col-12 mx-auto`} style={{cursor:"pointer"}} onClick={()=>{
                                                          setPackages(item2)
                                                        }}>
                                                        <label>
                                                            <div className="pass_detail_container_main">
                                                                  <div className="" style={{display:"flex",flexDirection:"column",justifyContent:'flex-start',alignItems:"flex-start"}}>
                                                                      <div  style={{display:"flex",flexDirection:"row",justifyContent:'flex-start',alignItems:"center"}}>
                                                                          <input className="form-check-input" type="radio" checked={packages?.id==item2?.id}/>
                                                                          <div style={{marginLeft:"10px"}}>
                                                                            <div className="">
                                                                                <span className="" style={{fontSize:"14px",display:"flex",justifyContent:"flex-start",alignItems:'center'}}>
                                                                                  <span>{item2?.pass_name}</span> 
                                                                                  {
                                                                                  premiumPackages?.length>0  && premiumPackages?.find((itemData:any)=>{
                                                                                    if(itemData?.passid){
                                                                                        return itemData?.passid==item2?.id
                                                                                    }
                                                                                  }) && <span style={{fontSize:"10px",color:"green",marginLeft:"6px"}}>
                                                                                    <img src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" style={{width:"20px",height:"20px"}} alt="Featured"/>
                                                                                  </span>}
                                                                                  </span>
                                                                            </div>                                                   
                                                                            <div className="" >
                                                                                <span className="" style={{fontSize:"10px"}}>Valid for {item2?.duration}</span>
                                                                            </div>
                                                                          </div>
                                                                      </div>
                                                                    
                                                                  </div>
                                                                  <div className="">
                                                                      <span style={{fontSize:"11px"}}>{item2?.price_inr} INR </span>
                                                                      <hr style={{margin:"1px"}}/>
                                                                        <span style={{fontSize:"11px"}}>{item2?.price_usd} USD</span>
                                                                      </div>
                                                            </div>
                                                        </label>
                                                        </div>
                                                    })
                                                  }

                                                  {
                                                    selectedPlanType=="Pass" && passes?.filter((item)=>item?.tblpass_type?.name=="Pass")?.map((item2:any,index2:any)=>{
                                                        return <div key={index2} className={`card my-5 mx-3 py-3 px-2 col-12 mx-auto`} style={{cursor:"pointer"}} onClick={()=>{
                                                          setPackages(item2)
                                                        }}>
                                                        <label>
                                                            <div className="pass_detail_container_main">
                                                                  <div className="" style={{display:"flex",flexDirection:"column",justifyContent:'flex-start',alignItems:"flex-start"}}>
                                                                      <div  style={{display:"flex",flexDirection:"row",justifyContent:'flex-start',alignItems:"center"}}>
                                                                          <input className="form-check-input" type="radio"  checked={packages?.id==item2?.id}/>
                                                                          <div style={{marginLeft:"10px"}}>
                                                                            <div className="">
                                                                            <span className="" style={{fontSize:"14px",display:"flex",justifyContent:"flex-start",alignItems:'center'}}>
                                                                                  <span>{item2?.pass_name}</span> 
                                                                                  {
                                                                                  premiumPackages?.length>0  && premiumPackages?.find((itemData:any)=>{
                                                                                    if(itemData?.passid){
                                                                                        return itemData?.passid==item2?.id
                                                                                    }
                                                                                  }) && <span style={{fontSize:"10px",color:"green",marginLeft:"6px"}}>
                                                                                    <img src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" style={{width:"20px",height:"20px"}} alt="Featured"/>
                                                                                  </span>}
                                                                                  </span>
                                                                            </div>                                                   
                                                                            <div className="" >
                                                                                <span className="" style={{fontSize:"10px"}}>Valid for {item2?.duration}</span>
                                                                            </div>
                                                                          </div>
                                                                      </div>
                                                                    
                                                                  </div>
                                                                  <div className="">
                                                                      <span style={{fontSize:"11px"}}>{item2?.price_inr} INR </span>
                                                                      <hr style={{margin:"1px"}}/>
                                                                        <span style={{fontSize:"11px"}}>{item2?.price_usd} USD</span>
                                                                      </div>
                                                            </div>
                                                        </label>
                                                        </div>
                                                    })
                                                  }                                     
                                              </div>

                                              <div className="d-md-block d-sm-block d-block d-lg-none">
                                                            <button className="btn btn-outline-primary" onClick={()=>{
                                                            
                                                                if( packages=="undefined" ||  typeof packages=="undefined" || !packages?.id){
                                                                  ErrorMessage("Please select Passes")
                                                                }else{         
                                                                  if(!checkUserProfileStatus()){
                                                                    ErrorMessage("Please Complete your Profile.")
                                                                    router.push("/dashboard/profile")
                                                                  }else{
                                                                    setBuyNowSection(true)
                                                                  }
                                                                }
                                                            }}>Buy Now</button>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                          </div>
                        </section>

                        {/* ========== our community section ========== */}
                        {/* <CTA3 /> */}
                      </main>:<main className="content-wrapper">
                            <ContentNotFound button_text="Back to Home" to="/dashboard/packages"/>
                      </main>}
                  </>
                }




                {/* ========== footer section ========== */}
                <footer className="footer_container_dashboard_content">
                  <DashboardFooter/>
                </footer> 
    </Fragment>
  );
};

export default Passes;
