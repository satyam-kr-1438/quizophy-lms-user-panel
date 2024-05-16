import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { CiGift } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'
import { HiOutlineWallet } from "react-icons/hi2";

const WalletSectionTwo = () => {
    const Router=useRouter()
  return (
    <Fragment>
        <div className="row gy-5">
                        <div className="col-12">
                            <div className="wallet_card_conatiner" onClick={()=>{
                                Router.push("/recharge")
                            }}>
                                <div className="wallet_card_first_section"> 
                                      <div className="wallet_card_first_section_icon">
                                           <span>
                                              <HiOutlineWallet className="wallet_deposite_icon"/>
                                           </span>
                                      </div>
                                      <div className="wallet_card_first_section_deposite">
                                          <div>
                                                 <p>Deposit</p>
                                          </div>
                                          <div className="wallet_card_rupees_amount">
                                                 <span>₹</span>
                                                 <span className="amount_show">998</span>
                                          </div>
                                      </div>
                                </div>
                                <div className="wallet_card_second_section">
                                       <button className="recharge_button">Recharge</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="wallet_card_conatiner" onClick={()=>{
                                Router.push("/refer-earn")
                            }}>
                                <div className="wallet_card_first_section"> 
                                      <div className="wallet_card_first_section_icon">
                                           <span>
                                              <CiGift className="wallet_deposite_icon"/>
                                           </span>
                                      </div>
                                      <div className="wallet_card_first_section_deposite">
                                          <div>
                                                 <p>Promotional</p>
                                          </div>
                                          <div className="wallet_card_rupees_amount">
                                                 <span>₹</span>
                                                 <span className="amount_show">998</span>
                                          </div>
                                      </div>
                                </div>
                                <div className="wallet_card_second_section">
                                        <span>
                                            <IoIosArrowForward  className="wallet_promotional_icon"/>
                                        </span>
                                </div>
                            </div>
                        </div>
        </div>
    </Fragment>
  )
}

export default WalletSectionTwo