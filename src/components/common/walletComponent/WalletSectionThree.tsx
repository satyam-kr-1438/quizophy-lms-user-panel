import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdAddChart } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { LuWalletCards } from "react-icons/lu";

const WalletSectionThree = () => {
    const Router=useRouter()
  return (
    <Fragment>
               <div className="row">
                                <div className="col-12">
                                    <h5 className="wallet_heading_main">Quick Actions</h5>
                                </div>
                                <div className="col-12 wallet_listing_main_container">
                                            <div className="col-12">
                                                <div className="wallet_listing" onClick={()=>{
                                                    Router.push("/transaction-history")
                                                }}>
                                                    <div className="first_icon_heading_container">
                                                            <span><LuWalletCards className="wallet_icon"/></span>
                                                            <div className="heading_desc_container">
                                                               <p className="wallet_heading">Transaction History</p>
                                                               <p className="wallet_desc">For all balance debit & credit</p>
                                                            </div>
                                                    </div>
                                                    <div className="second_container">
                                                        <span><IoIosArrowForward  className="wallet_icon"/></span>
                                                    </div>
                                                </div>
                                                <hr className="wallet_seperator_line"/>
                                            </div>

                                            <div className="col-12">
                                                <div className="wallet_listing" onClick={()=>{
                                                }}>
                                                    <div className="first_icon_heading_container">
                                                            <span><MdSupportAgent className="wallet_icon"/></span>
                                                            <div className="heading_desc_container">
                                                               <p className="wallet_heading">Support Centre</p>
                                                               <p className="wallet_desc">Get support for failed transactions</p>
                                                            </div>
                                                    </div>
                                                    <div className="second_container">
                                                        <span><IoIosArrowForward  className="wallet_icon"/></span>
                                                    </div>
                                                </div>
                                                <hr className="wallet_seperator_line"/>
                                            </div>


                                            <div className="col-12">
                                                <div className="wallet_listing" onClick={()=>{
                                                }}>
                                                    <div className="first_icon_heading_container">
                                                            <span><MdAddChart className="wallet_icon"/></span>
                                                            <div className="heading_desc_container">
                                                               <p className="wallet_heading">Wallet Recharge Help</p>
                                                               <p className="wallet_desc">How to add fund in wallet</p>
                                                            </div>
                                                    </div>
                                                    <div className="second_container">
                                                        <span><IoIosArrowForward  className="wallet_icon"/></span>
                                                    </div>
                                                </div>
                                            </div>

                                </div>
               </div>
    </Fragment>
  )
}

export default WalletSectionThree