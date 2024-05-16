import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const RechargeSkeleton = () => {
  return (
    <Fragment>
            <div className="col-12">
                          <div className="" style={{background:"transparent"}}>
                              <Skeleton style={{height:"80px"}}/>
                          </div>
            </div>


            <div className="col-12 my-5">
                          <div className="recharge_second_section_container">
                              <div className="recharge_amount_first_section">
                                   <h5><Skeleton style={{width:"70px",height:"15px"}}/></h5>
                              </div>
                              <div className="recharge_amount_second_section">
                                 <Skeleton style={{height:"45px"}}/>
                              </div>

                              <div className="recharge_add_amount_section">
                                     <Skeleton style={{width:"80px",height:"40px"}}/>
                                     <Skeleton style={{width:"80px",height:"40px",marginLeft:"10px"}}/>
                                     <Skeleton style={{width:"80px",height:"40px",marginLeft:"10px"}}/>
                              </div>
                          </div>
            </div>



            <div className="col-12">
                         <div className="recharge_summary_heading">
                            <h5><Skeleton style={{width:"90px",height:"15px"}}/></h5>
                         </div>

                         <div className="recharge_summary_container">
                             <div className="recharge_summary_container_fiirst_section">
                                  <div className="recharge_amount_show_section">
                                     <p className="recharge_content_section_show"><Skeleton style={{width:"100px",height:"15px"}}/></p>
                                     <p className="amount_show"><Skeleton style={{width:"100px",height:"15px"}}/></p>
                                  </div>
                                  <div className="recharge_amount_show_section">
                                     <p className="recharge_content_section_show"><Skeleton style={{width:"100px",height:"15px"}}/></p>
                                     <p className="amount_show"><Skeleton style={{width:"100px",height:"15px"}}/></p>
                                  </div>
                             </div>
                             <hr className="recharge_seperator_line"/>
                             <div className="recharge_amount_show_section">
                                     <p className="recharge_content_section_show"><Skeleton style={{width:"100px",height:"15px"}}/></p>
                                     <p className="amount_show"><Skeleton style={{width:"100px",height:"15px"}}/></p>
                                  </div>
                                  <div className="recharge_amount_show_section">
                                     <p className="recharge_content_section_show_p">
                                         <Skeleton style={{width:"100px",height:"15px"}}/>
                                      </p>
                                     <p className="recharge_cahback_content"><Skeleton style={{width:"100px",height:"15px"}}/></p>
                                  </div>
                                  <hr className="recharge_seperator_line"/>

                                  <div className='col-12 recharget_net_balance_container'>
                                      <div className="recharge_net_balance">
                                         <p className="amount_show"><Skeleton style={{width:"100px",height:"25px"}}/></p>
                                         <p className="recharge_net_balance_content"><Skeleton style={{width:"100px",height:"20px"}}/></p>
                                      </div>
                                  </div>
                         </div>
                         
            </div>

            <div className="col-12 mt-5 recharge_last_section_container">
                            <div className="festron_btn_container text-center ">
                                 <Skeleton style={{height:"50px"}}/>
                            </div>
            </div>
    </Fragment>
  )
}

export default RechargeSkeleton