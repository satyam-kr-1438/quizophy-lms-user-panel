import React, { Fragment } from 'react'
import { CiGift } from 'react-icons/ci'
import { HiOutlineWallet } from 'react-icons/hi2'
import { IoIosArrowForward } from 'react-icons/io'
import { LuWalletCards } from 'react-icons/lu'
import { MdAddChart, MdSupportAgent } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const WalletSkeleton = () => {
  return (
    <Fragment>
           <div className="row">
                        <div className="col-12">
                            <div className="wallet_amount_container">
                                <div className="total_balance_container">
                                    <h5><Skeleton style={{width:"30px",height:"35px"}}/></h5>
                                    <h5 className="wallet_amount_show"><Skeleton style={{width:"90px",height:"35px"}}/></h5>
                                </div>
                                <div className="total_balance_container2">
                                    <p><Skeleton style={{width:"120px",height:"25px"}}/></p>
                                </div>
                            </div>
                        </div>
          </div>

          <div className="row gy-5">
                        <div className="col-12">
                            <div className="wallet_card_conatiner">
                                <div className="wallet_card_first_section"> 
                                      <div className="wallet_card_first_section_icon">
                                           <span>
                                              <Skeleton style={{width:"30px",height:"25px"}}/>
                                           </span>
                                      </div>
                                      <div className="wallet_card_first_section_deposite">
                                          <div>
                                                 <p><Skeleton style={{width:"80px",height:"15px"}}/></p>
                                          </div>
                                          <div className="wallet_card_rupees_amount" style={{display:"flex"}}>
                                                 <span><Skeleton style={{width:"20px",height:"25px"}}/></span>
                                                 <span className="amount_show"><Skeleton style={{width:"50px",height:"25px"}}/></span>
                                          </div>
                                      </div>
                                </div>
                                <div className="wallet_card_second_section">
                                     <Skeleton style={{width:"100px",height:"40px"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="wallet_card_conatiner">
                                <div className="wallet_card_first_section"> 
                                      <div className="wallet_card_first_section_icon">
                                           <span>
                                              <Skeleton style={{width:"30px",height:"25px"}}/>
                                           </span>
                                      </div>
                                      <div className="wallet_card_first_section_deposite">
                                          <div>
                                                 <p><Skeleton style={{width:"80px",height:"15px"}}/></p>
                                          </div>
                                          <div className="wallet_card_rupees_amount" style={{display:"flex"}}>
                                                 <span><Skeleton style={{width:"20px",height:"25px"}}/></span>
                                                 <span className="amount_show"><Skeleton style={{width:"50px",height:"25px"}}/></span>
                                          </div>
                                      </div>
                                </div>
                                <div className="wallet_card_second_section">
                                     <Skeleton style={{width:"100px",height:"40px"}}/>
                                </div>
                            </div>
                        </div>
          </div>




          <div className="row">
                                <div className="col-12">
                                    <h5 className="wallet_heading_main"><Skeleton style={{width:"100px",height:"24px"}}/></h5>
                                </div>
                                <div className="col-12 wallet_listing_main_container">
                                            <div className="col-12">
                                                <div className="wallet_listing" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                                    <div className="first_icon_heading_container">
                                                            <span><Skeleton style={{width:"20px",height:"24px"}}/></span>
                                                            <div className="heading_desc_container">
                                                               <p className="wallet_heading"><Skeleton style={{width:"100px",height:"16px"}}/></p>
                                                               <p className="wallet_desc"><Skeleton style={{width:"100px",height:"16px"}}/></p>
                                                            </div>
                                                    </div>
                                                    <div className="second_container">
                                                        <span style={{display:"inline-block"}}><Skeleton style={{marginTop:"35px",marginRight:"-11px",width:"25px"}}/></span>
                                                    </div>
                                                </div>
                                                <hr className="wallet_seperator_line"/>
                                            </div>

                                            <div className="col-12">
                                                <div className="wallet_listing" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                                    <div className="first_icon_heading_container">
                                                            <span><Skeleton style={{width:"20px",height:"24px"}}/></span>
                                                            <div className="heading_desc_container">
                                                               <p className="wallet_heading"><Skeleton style={{width:"100px",height:"16px"}}/></p>
                                                               <p className="wallet_desc"><Skeleton style={{width:"100px",height:"16px"}}/></p>
                                                            </div>
                                                    </div>
                                                    <div className="second_container">
                                                        <span style={{display:"inline-block"}}><Skeleton style={{marginTop:"35px",marginRight:"-11px",width:"25px"}}/></span>
                                                    </div>
                                                </div>
                                                <hr className="wallet_seperator_line"/>
                                            </div>



                                            <div className="col-12">
                                                <div className="wallet_listing" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                                    <div className="first_icon_heading_container">
                                                            <span><Skeleton style={{width:"20px",height:"24px"}}/></span>
                                                            <div className="heading_desc_container">
                                                               <p className="wallet_heading"><Skeleton style={{width:"100px",height:"16px"}}/></p>
                                                               <p className="wallet_desc"><Skeleton style={{width:"100px",height:"16px"}}/></p>
                                                            </div>
                                                    </div>
                                                    <div className="second_container">
                                                        <span style={{display:"inline-block"}}><Skeleton style={{marginTop:"35px",marginRight:"-11px",width:"25px"}}/></span>
                                                    </div>
                                                </div>
                                                <hr className="wallet_seperator_line"/>
                                            </div>


                                </div>
            </div>
    </Fragment>
  )
}

export default WalletSkeleton