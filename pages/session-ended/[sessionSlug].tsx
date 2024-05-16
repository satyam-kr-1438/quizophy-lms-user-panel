"use client"
import React, { FC, Fragment, useState } from 'react'
import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation';
import SessionEndedSesctionOne from 'components/common/sessionEndedContainer/SessionEndedSesctionOne';
import SessionEndedSectionTwo from 'components/common/sessionEndedContainer/SessionEndedSectionTwo';
import SessionEndedButtonContsiner from 'components/common/sessionEndedContainer/SessionEndedButtonContsiner';

const SessionEnded = () => {
  return (
    <Fragment>
         <PageProgress/>
          <TopNavigation text="" animation="fade-left"/>
         <div className="contsiner-fluid session_ended_main_container">
                <div className="row mb-5" data-aos="fade-left">
                     <SessionEndedSesctionOne/>
                     <SessionEndedSectionTwo/>
                </div>

                <SessionEndedButtonContsiner/>
         </div>
           
    </Fragment>
  )
}

export default SessionEnded