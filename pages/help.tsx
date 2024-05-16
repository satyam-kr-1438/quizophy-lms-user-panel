import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment } from 'react'

import { useRouter } from 'next/router';
import TopNavigation from 'components/layouts/TopNavigation';
import { IoIosArrowForward } from "react-icons/io";
import { TbHelpSquareFilled } from "react-icons/tb";

const Help:FC = () => {
    const Router=useRouter()
  return (
    <Fragment>
        <PageProgress/>  
        <TopNavigation text="Get Help" animation="fade-left"/>
        <div className="main_featro_container margin_bootom_every_component" data-aos="fade-left">
                <div className="container-fluid " >
                        <div className="row home_slider_section">
                            <div className="row g-3  mx-auto text-center">
                                       <div className="col-12">
                                           <h5 className="help_heading">Browse help categories</h5>
                                       </div>
                                       <div className="col-4">
                                             <div className='help_specialist_container'>
                                                  <div className="help_specialist_button">
                                                        <TbHelpSquareFilled className="help_icon_1" />
                                                        <span>Help Category</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className='help_specialist_container'>
                                                  <div className="help_specialist_button">
                                                        <TbHelpSquareFilled className="help_icon_1" />
                                                        <span>Help Category</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-4">
                                             <div className='help_specialist_container'>
                                                  <div className="help_specialist_button">
                                                        <TbHelpSquareFilled className="help_icon_1" />
                                                        <span>Help Category</span>
                                                  </div>
                                             </div>
                                        </div>
                                           <div className="col-4">
                                             <div className='help_specialist_container'>
                                                  <div className="help_specialist_button">
                                                        <TbHelpSquareFilled className="help_icon_1" />
                                                        <span>Help Category</span>
                                                  </div>
                                             </div>
                                            </div>
                                          <div className="col-4">
                                             <div className='help_specialist_container'>
                                                  <div className="help_specialist_button">
                                                        <TbHelpSquareFilled className="help_icon_1" />
                                                        <span>Other Issues</span>
                                                  </div>
                                             </div>
                                </div>
                            </div>


                        
                   <div className="col-12">
                         <h5 className="help_heading">Frequently Asked Questions</h5>
                    </div>
                    <div className="row help_containet mx-auto">
                           <div className="help_listing_main_container">
                           <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                            <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                                <hr className="help_seperator_line"/>

                            </div>

                            <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                           <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                                <hr className="help_seperator_line"/>

                            </div>

                            <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                         <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                                <hr className="help_seperator_line"/>
                            </div>

                            <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                         <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                                <hr className="help_seperator_line"/>

                            </div>

                            <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                      <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                                <hr className="help_seperator_line"/>

                            </div>

                            <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                            <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                                <hr className="help_seperator_line"/>

                            </div>

                            <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                           <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                                <hr className="help_seperator_line"/>

                            </div>

                            <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                         <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                                <hr className="help_seperator_line"/>
                            </div>

                            <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                         <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                                <hr className="help_seperator_line"/>

                            </div>

                            <div className="col-12">
                                <div className="help_listing" onClick={()=>{
                                    Router.push("/faqs/faqs-slug")
                                }}>
                                    <div className="first_container">
                                      <p>Why are the terms & conditions for TDS offer ??</p>
                                    </div>
                                    <div className="second_container">
                                        <span><IoIosArrowForward  className="help_icon"/></span>
                                    </div>
                                </div>
                            </div>
                           </div>

              </div>
                        </div>
                    </div>     
        </div>      
    </Fragment>
  )
}

export default Help