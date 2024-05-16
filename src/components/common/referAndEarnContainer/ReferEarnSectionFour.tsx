import React, { Fragment } from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { PiCoinsLight } from 'react-icons/pi'

const ReferEarnSectionFour = () => {
  return (
    <Fragment>
         <div className="row refer_last_section">
                   <div className="refer_section3_heading">
                        <h5>Your invite status</h5>
                    </div>
                  <div className="col-12">
                     <div className="refer_section3_container">
                        <div className="refer_section3_icon_text">
                             <span><PiCoinsLight className="refer_section3_icon"/></span>
                             <p className="refer_section3_invite_bonus">Invite Bonus</p>
                        </div>
                     
                        <div>
                            <span className="refer_section3_amount">₹ {" "} 200</span>
                        </div>
                     </div>
                  </div>

                  <div className="col-12">
                     <div className="refer_section3_container">
                        <div className="refer_section3_icon_text">
                             <span><BiUserPlus className="refer_section3_icon"/></span>
                             <p className="refer_section3_invite_bonus">Friends Invite</p>
                        </div>
                     
                        <div>
                            <span className="refer_section3_amount">₹ {" "} 200</span>
                        </div>
                     </div>
                  </div>
             </div>
    </Fragment>
  )
}

export default ReferEarnSectionFour