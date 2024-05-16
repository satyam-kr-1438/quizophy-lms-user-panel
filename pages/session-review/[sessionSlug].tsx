import PageProgress from 'components/common/PageProgress'
import SessionReviewButton from 'components/common/sessionReviewComponent/SessionReviewButtonContainer'
import SessionReviewFirstSection from 'components/common/sessionReviewComponent/SessionReviewFirstSection'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { Fragment } from 'react'

const SessionReview = () => {
  return (
    <Fragment>
        <PageProgress/>
        <TopNavigation text="Session Review" animation="fade-left" />
        <div className="container-fluid session_ended_main_container" >
             <div className="row" data-aos="fade-left">
                 <SessionReviewFirstSection/>
             </div>
             <div className="row">
             <SessionReviewButton/>
             </div>


        </div>
    </Fragment>
  )
}

export default SessionReview