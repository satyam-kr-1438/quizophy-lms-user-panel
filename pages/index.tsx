import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';

import Footer from 'components/blocks/footer/Footer';
import Testimonial from 'components/blocks/testimonial/Testimonial';
import FAQ from 'components/blocks/faq/FAQ';

import { LiaSalesforce } from "react-icons/lia";
import AuthNavbar from 'components/blocks/navbar/AuthNavbar';
import { getCourses, getPackagesHomePage } from 'components/request/request';
import HomeClient from 'components/blocks/clients/HomeClient';
import HomeSlider from 'components/blocks/hero/HomeSlider';
import { BiCategory } from "react-icons/bi";


const Home = () => {
   const [packages,setPackages]=useState<any[]>([])
   const [categories,setCategories]=useState<any[]>([])
    const getAllPackages=async ()=>{
        try{
          const {data}=await getPackagesHomePage()
          if(data?.success){
            setPackages(data?.data)
          }
        }catch(err){
          console.log(err)
        }
    }
   const getCategories=async ()=>{
      try{
        const {data}=await getCourses()
        setCategories(data?.data)
        //  if(data?.success){
        //   // setPackages(data?.data)
        //  }
      }catch(err){
        console.log(err)
      }
   }

 
   useEffect(()=>{
      getAllPackages()
      getCategories()
   },[])
    
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <AuthNavbar
          // info
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#modal-signin"
              className="btn btn-sm btn-primary py-1 px-2"
              style={{fontWeight:"400",fontSize:"14px"}}
            >
              Sign In
            </a>
          }
        />
      </header>
      <HomeSlider />
      <div className="p-4 my-14">
              <HomeClient />
      </div>
      {/* ========== main content ========== */}
      <main className="container content-wrapper">
                  <div className="my-5">
                      <h4>Browse Packages</h4>
                  </div>
              <div className="row gx-md-4 gy-4 gy-md-4 mb-10">
                    {
                      packages?.map((item:any,index:number)=>{
                         return  <div key={item?.id} className={`project item col-lg-3 col-md-4 col-sm-6 col-9`} style={{cursor:"pointer"}}>
                         <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                               <figure className={`${index==0?"mb-6 position-relative overflow-hidden figure_home_page_landing":index==0?"mb-6 position-relative overflow-hidden figure_home_page_landing1":index==2?"mb-6 position-relative overflow-hidden figure_home_page_landing2":index==3?"mb-6 position-relative overflow-hidden figure_home_page_landing3":index==4?"mb-6 position-relative overflow-hidden figure_home_page_landing4":index==5?"mb-6 position-relative overflow-hidden figure_home_page_landing5":index==6?"mb-6 position-relative overflow-hidden figure_home_page_landing6":"mb-6 position-relative overflow-hidden figure_home_page_landing7"}`}>
                               <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                 <span>
                                   <img src={`${item?.thumbnail}`}  style={{width:"50px",height:"50px",borderRadius:"50%"}} alt="" />
                                 </span>
                                 <span className="ms-5">{item?.name}</span></div>
                               </figure>

                               <div className="post-header px-3 pb-5">
                                 <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                   <div className="post-category text-ash mb-0" style={{minHeight:"50px"}}>
                                    {
                                      item?.description?.length<55?item?.description:`${item?.description?.substring(0,55)}...`
                                    }
                                   </div>
                                   {/* <span className={`ratings`} /> */}
                                 </div>
                                 <p className="price">
                                       <del>
                                         <span className="amount">INR {item?.price_inr*12}</span>
                                       </del>{' '}
                                       <ins>
                                         <span className="amount">INR {item?.price_inr}</span>
                                       </ins>
                                 </p>
                               </div>
                         </div>
                   </div>
                      })
                    }

                      {/* <div className={`project item col-lg-3 col-md-4 col-sm-6 col-9 mx-auto`} style={{cursor:"pointer"}}>
                            <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className="mb-6 position-relative overflow-hidden figure_home_page_landing">
                                  <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <span>
                                      <LiaSalesforce style={{transform:"scale(3)"}}/>
                                    </span>
                                    <span className="ms-5">Salesforce Certification Training Program</span></div>

                                  </figure>

                                  <div className="post-header px-3 pb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                      <div className="post-category text-ash mb-0">Salesforce Certification Training Program</div>
                                    </div>
                                    <p className="price">
                                          <del>
                                            <span className="amount">INR 300</span>
                                          </del>{' '}
                                          <ins>
                                            <span className="amount">INR 126</span>
                                          </ins>
                                    </p>
                                  </div>
                            </div>
                      </div>

                      <div className={`project item col-lg-3 col-md-4 col-sm-6 col-9 mx-auto`} style={{cursor:"pointer"}}>
                            <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className=" mb-6 position-relative overflow-hidden figure_home_page_landing1">
                                  <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <span>
                                      <LiaSalesforce style={{transform:"scale(3)"}}/>
                                    </span>
                                    <span className="ms-5">Salesforce Certification Training Program</span></div>
                                  </figure>

                                  <div className="post-header px-3 pb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                      <div className="post-category text-ash mb-0">Salesforce Certification Training Program</div>
                                    </div>
                                    <p className="price">
                                          <del>
                                            <span className="amount">INR 300</span>
                                          </del>{' '}
                                          <ins>
                                            <span className="amount">INR 126</span>
                                          </ins>
                                    </p>
                                  </div>
                            </div>
                      </div>
                      <div className={`project item col-lg-3 col-md-4 col-sm-6 col-9 mx-auto`} style={{cursor:"pointer"}}>
                            <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className=" mb-6 position-relative overflow-hidden figure_home_page_landing2">
                                  <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <span>
                                      <LiaSalesforce style={{transform:"scale(3)"}}/>
                                    </span>
                                    <span className="ms-5">Salesforce Certification Training Program</span></div>
                                  
                                  </figure>

                                  <div className="post-header px-3 pb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                      <div className="post-category text-ash mb-0">Salesforce Certification Training Program</div>
                                    </div>
                                    <p className="price">
                                          <del>
                                            <span className="amount">INR 300</span>
                                          </del>{' '}
                                          <ins>
                                            <span className="amount">INR 126</span>
                                          </ins>
                                    </p>
                                  </div>
                            </div>
                      </div>
                      <div className={`project item col-lg-3 col-md-4 col-sm-6 col-9 mx-auto`} style={{cursor:"pointer"}}>
                            <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className="mb-6 position-relative overflow-hidden figure_home_page_landing3">
                                    <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <span>
                                      <LiaSalesforce style={{transform:"scale(3)"}}/>
                                    </span>
                                    <span className="ms-5">Salesforce Certification Training Program</span></div>
                                  </figure>

                                  <div className="post-header px-3 pb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                      <div className="post-category text-ash mb-0">Salesforce Certification Training Program</div>
                                    </div>
                                    <p className="price">
                                          <del>
                                            <span className="amount">INR 300</span>
                                          </del>{' '}
                                          <ins>
                                            <span className="amount">INR 126</span>
                                          </ins>
                                    </p>
                                  </div>
                            </div>
                      </div>

                      <div className={`project item col-lg-3 col-md-4 col-sm-6 col-9 mx-auto`} style={{cursor:"pointer"}}>
                            <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className=" mb-6 position-relative overflow-hidden figure_home_page_landing4">
                                  <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <span>
                                      <LiaSalesforce style={{transform:"scale(3)"}}/>
                                    </span>
                                    <span className="ms-5">Salesforce Certification Training Program</span></div>
                                   
                                  </figure>

                                  <div className="post-header px-3 pb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                      <div className="post-category text-ash mb-0">Salesforce Certification Training Program</div>
                                    </div>

                                    <p className="price">
                                          <del>
                                            <span className="amount">INR 300</span>
                                          </del>{' '}
                                          <ins>
                                            <span className="amount">INR 126</span>
                                          </ins>
                                    </p>
                                  </div>
                            </div>
                      </div>


                      <div className={`project item col-lg-3 col-md-4 col-sm-6 col-9 mx-auto`} style={{cursor:"pointer"}}>
                            <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className=" mb-6 position-relative overflow-hidden figure_home_page_landing5">
                                  <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <span>
                                      <LiaSalesforce style={{transform:"scale(3)"}}/>
                                    </span>
                                    <span className="ms-5">Salesforce Certification Training Program</span></div>
                                    
                                  </figure>

                                  <div className="post-header px-3 pb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                      <div className="post-category text-ash mb-0">Salesforce Certification Training Program</div>
                                    </div>
                                    <p className="price">
                                          <del>
                                            <span className="amount">INR 300</span>
                                          </del>{' '}
                                          <ins>
                                            <span className="amount">INR 126</span>
                                          </ins>
                                    </p>
                                  </div>
                            </div>
                      </div>

                      <div className={`project item col-lg-3 col-md-4 col-sm-6 col-9 mx-auto`} style={{cursor:"pointer"}}>
                            <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className=" mb-6 position-relative overflow-hidden figure_home_page_landing6">
                                  <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <span>
                                      <LiaSalesforce style={{transform:"scale(3)"}}/>
                                    </span>
                                    <span className="ms-5">Salesforce Certification Training Program</span></div>
                            
                                  </figure>

                                  <div className="post-header px-3 pb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                      <div className="post-category text-ash mb-0">Salesforce Certification Training Program</div>
                                    </div>
                                    <p className="price">
                                          <del>
                                            <span className="amount">INR 300</span>
                                          </del>{' '}
                                          <ins>
                                            <span className="amount">INR 126</span>
                                          </ins>
                                    </p>
                                  </div>
                            </div>
                      </div>

                      <div className={`project item col-lg-3 col-md-4 col-sm-6 col-9 mx-auto`} style={{cursor:"pointer"}}>
                            <div className="" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className=" mb-6 position-relative overflow-hidden figure_home_page_landing7">
                                  <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <span>
                                      <LiaSalesforce style={{transform:"scale(3)"}}/>
                                    </span>
                                    <span className="ms-5">Salesforce Certification Training Program</span></div>
                                  
                                  </figure>

                                  <div className="post-header px-3 pb-5">
                                    <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                                      <div className="post-category text-ash mb-0">Salesforce Certification Training Program</div>
                                    </div>
                                    <p className="price">
                                          <del>
                                            <span className="amount">INR 300</span>
                                          </del>{' '}
                                          <ins>
                                            <span className="amount">INR 126</span>
                                          </ins>
                                    </p>
                                  </div>
                            </div>
                      </div> */}
                </div>

                <div className="my-3">
                      <h4>Top Categories</h4>
                </div>

                <div className="row gx-md-10 gy-5 mb-10">
                     {
                      categories?.map((item:any)=>{
                        return <div key={item?.id} className={`project item  col-lg-2 col-md-3 col-sm-4 col-6 py-3`} style={{cursor:"pointer"}}>
                        <div className="pt-3" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                              <figure className="mb-2 position-relative overflow-hidden top_category_section" style={{height:"50px"}}>
                                <div className="post-category text-white p-4" style={{fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                  <span>
                                    <BiCategory style={{transform:"scale(3)",color:"black"}}/>
                                  </span>
                                </div>
                              </figure>

                              <div className="pb-4">
                                <div className="d-flex flex-row align-items-center justify-content-between ">
                                  <div className="post-category mx-auto text-dark mb-0" style={{fontSize:"12px",padding:"0px 5px",textAlign:"center"}}>{item?.course_name}</div>
                                </div>
                              </div>
                        </div>
                  </div>
                      })
                     }
                     {/* <div className={`project item  col-lg-2 col-md-3 col-sm-4 col-6 py-3`} style={{cursor:"pointer"}}>
                            <div className="pt-3" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className="mb-2 position-relative overflow-hidden top_category_section" style={{height:"50px"}}>
                                    <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                      <span>
                                        <LiaSalesforce style={{transform:"scale(5)",color:"black"}}/>
                                      </span>
                                    </div>
                                  </figure>

                                  <div className="pb-4">
                                    <div className="d-flex flex-row align-items-center justify-content-between ">
                                      <div className="post-category mx-auto text-dark mb-0">Salesforce</div>
                                    </div>
                                  </div>
                            </div>
                      </div>
                      <div className={`project item col-lg-2 col-md-3 col-sm-4 col-6 py-3`} style={{cursor:"pointer"}}>
                            <div className="pt-3" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className="mb-2 position-relative overflow-hidden top_category_section" style={{height:"50px"}}>
                                    <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                      <span>
                                        <LiaSalesforce style={{transform:"scale(5)",color:"black"}}/>
                                      </span>
                                    </div>
                                  </figure>

                                  <div className="pb-4">
                                    <div className="d-flex flex-row align-items-center justify-content-between ">
                                      <div className="post-category mx-auto text-dark mb-0">Salesforce</div>
                                    </div>
                                  </div>
                            </div>
                      </div>
                      <div className={`project item col-lg-2 col-md-3 col-sm-4 col-6 py-3`} style={{cursor:"pointer"}}>
                            <div className="pt-3" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className="mb-2 position-relative overflow-hidden top_category_section" style={{height:"50px"}}>
                                    <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                      <span>
                                        <LiaSalesforce style={{transform:"scale(5)",color:"black"}}/>
                                      </span>
                                    </div>
                                  </figure>

                                  <div className="pb-4">
                                    <div className="d-flex flex-row align-items-center justify-content-between ">
                                      <div className="post-category mx-auto text-dark mb-0">Salesforce</div>
                                    </div>
                                  </div>
                            </div>
                      </div>
                      <div className={`project item col-lg-2 col-md-3 col-sm-4 col-6 py-3`} style={{cursor:"pointer"}}>
                            <div className="pt-3" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className="mb-2 position-relative overflow-hidden top_category_section" style={{height:"50px"}}>
                                    <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                      <span>
                                        <LiaSalesforce style={{transform:"scale(5)",color:"black"}}/>
                                      </span>
                                    </div>
                                  </figure>

                                  <div className="pb-4">
                                    <div className="d-flex flex-row align-items-center justify-content-between ">
                                      <div className="post-category mx-auto text-dark mb-0">Salesforce</div>
                                    </div>
                                  </div>
                            </div>
                      </div>
                      <div className={`project item col-lg-2 col-md-3 col-sm-4 col-6 py-3`} style={{cursor:"pointer"}}>
                            <div className="pt-3" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className="mb-2 position-relative overflow-hidden top_category_section" style={{height:"50px"}}>
                                    <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                      <span>
                                        <LiaSalesforce style={{transform:"scale(5)",color:"black"}}/>
                                      </span>
                                    </div>
                                  </figure>

                                  <div className="pb-4">
                                    <div className="d-flex flex-row align-items-center justify-content-between ">
                                      <div className="post-category mx-auto text-dark mb-0">Salesforce</div>
                                    </div>
                                  </div>
                            </div>
                      </div>
                      <div className={`project item col-lg-2 col-md-3 col-sm-4 col-6 py-3`} style={{cursor:"pointer"}}>
                            <div className="pt-3" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"5px"}}>
                                  <figure className="mb-2 position-relative overflow-hidden top_category_section" style={{height:"50px"}}>
                                    <div className="post-category text-white p-4" style={{fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                      <span>
                                        <LiaSalesforce style={{transform:"scale(5)",color:"black"}}/>
                                      </span>
                                    </div>
                                  </figure>

                                  <div className="pb-4">
                                    <div className="d-flex flex-row align-items-center justify-content-between ">
                                      <div className="post-category mx-auto text-dark mb-0">Salesforce</div>
                                    </div>
                                  </div>
                            </div>
                      </div> */}
                </div>           
        {/* <LandingPageBanner /> */}
        <section className="wrapper bg-light mt-5">
          <div className="container">
            <div className="">
               <FAQ text="home"/>
            </div>
          </div>
        </section>

        <section className="wrapper" style={{marginTop:"100px"}}>
          <div className="container">
            <div className="">
               <Testimonial />
            </div>
          </div>
        </section>

      </main>
      <Footer/>
    </Fragment>
  );
};

export default Home;
