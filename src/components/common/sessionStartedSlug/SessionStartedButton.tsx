import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { AiOutlineMessage } from 'react-icons/ai'

const SessionStartedButton = () => {
    const Router=useRouter()
  return (
    <Fragment>
            <div className="col-12">
                         <div className="appintment_session_button">
                             <button className="button_details_start_session">
                                        <span >
                                            <AiOutlineMessage className="appointment_select_package_icon"/>
                                        </span>
                                        <span className="button_details_start_session_text" onClick={()=>{
                                            Router.push("/session-ended/session_slug")
                                        }}>
                                            Message (Start at 6:00PM)
                                        </span>
                             </button>
                         </div>
                    </div>
    </Fragment>
  )
}

export default SessionStartedButton