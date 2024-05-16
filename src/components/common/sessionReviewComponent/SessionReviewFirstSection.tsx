import React, { Fragment } from 'react'
import Rating from '@mui/material/Rating';

const SessionReviewFirstSection = () => {
  return (
    <Fragment>
                     <div className="col-12">
                         <div className="session_ended_consultant_image">
                             <img src="/img/festro/session_ended_consultant_pic.png" alt="Sesssion Ended"/>
                         </div>

                         <div className="session_ended_text_contsiner">
                           <h5>How was your experience with Mr. Satyam Kumar ??</h5>
                         </div>
                         <div className="session_review_rating">
                             <Rating name="hover-feedback"  precision={0.5} className="rating_session_review" onChange={()=>{}} />
                             
                         </div>
                     </div>

                     <div className="col-12 mt-5">
                              <label className='appointment_eventDetail'>
                              <span>Write Your Review</span>
                              <textarea rows={5} className="form-control py-2" placeholder='Write Your Review'/>
                              </label>
                      </div>
    </Fragment>
  )
}

export default SessionReviewFirstSection