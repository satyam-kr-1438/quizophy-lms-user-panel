import React, { Fragment } from 'react'
import { AiOutlineMessage } from 'react-icons/ai'

const SessionPackage = () => {
  return (
    <Fragment>
           <div className="col-12">
                           <h5>Your Package</h5>
                            
                            <div className="appointment_select_package_container">
                                    <div className="select_package_first_section">
                                        <span>
                                            <AiOutlineMessage className="appointment_select_package_icon"/>
                                        </span>
                                    </div>
                                    <div className="select_package_second_section">
                                        <h5>Messaging</h5>
                                        <p>Chat with Consultant</p>
                                    </div>
                                    <div className="select_package_third_section">
                                        <h5>₹20</h5>
                                        <p>per 30 min</p>
                                    </div>
                            </div>
                    </div>
    </Fragment>
  )
}

export default SessionPackage