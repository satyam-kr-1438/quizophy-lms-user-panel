import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

const SessionEndedButtonContsiner = () => {
    const Router=useRouter()
  return (
    <Fragment>
         <div className='row py-4 session_ended_button_container'>
                            <div className="festron_btn_container_verify text-center ">
                                <button className='btn back' style={{fontSize:"14px"}} onClick={()=>{
                                        Router.push("/home")
                                    }}>Back to Home</button>
                                    <button style={{fontSize:"14px"}} className='btn verify' onClick={()=>{
                                        Router.push("/session-review/session_slug")
                                    }}>Leave a Review</button>
                           </div>
                 </div>
    </Fragment>
  )
}

export default SessionEndedButtonContsiner