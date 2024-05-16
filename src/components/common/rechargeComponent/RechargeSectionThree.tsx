import React, { Fragment } from 'react'

const RechargeSectionThree = () => {
  return (
    <Fragment>
        <div className="col-12">
                         <div className="recharge_summary_heading">
                            <h5>Summary</h5>
                         </div>

                         <div className="recharge_summary_container">
                             <div className="recharge_summary_container_fiirst_section">
                                  <div className="recharge_amount_show_section">
                                     <p className="recharge_content_section_show">Recharge amount</p>
                                     <p className="amount_show">₹2501.00</p>
                                  </div>
                                  <div className="recharge_amount_show_section">
                                     <p className="recharge_content_section_show">GST applicable</p>
                                     <p className="amount_show">- ₹503.09</p>
                                  </div>
                             </div>
                             <hr className="recharge_seperator_line"/>
                             <div className="recharge_amount_show_section">
                                     <p className="recharge_content_section_show">Deposit bal. credit</p>
                                     <p className="amount_show">₹1953.91</p>
                                  </div>
                                  <div className="recharge_amount_show_section">
                                     <p className="recharge_content_section_show_p">
                                        <span>
                                           Promotional bal. credit
                                        </span>
                                        <span className="recharge_cahback_content">
                                         🎉 Recharge Cashback
                                        </span>
                                      </p>
                                     <p className="recharge_cahback_content">+ ₹547.09</p>
                                  </div>
                                  <hr className="recharge_seperator_line"/>

                                  <div className='col-12 recharget_net_balance_container'>
                                      <div className="recharge_net_balance">
                                         <p className="amount_show">₹2501.00</p>
                                         <p className="recharge_net_balance_content">Net Balance</p>
                                      </div>
                                  </div>
                         </div>
                         
                     </div>
    </Fragment>
  )
}

export default RechargeSectionThree