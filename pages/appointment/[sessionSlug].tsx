import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { Fragment } from 'react'
import SessionStartedButton from 'components/common/sessionStartedSlug/SessionStartedButton';
import AboutSession from 'components/common/sessionStartedSlug/AboutSession';
import SessionPackage from 'components/common/sessionStartedSlug/SessionPackage';
import SessionScheduled from 'components/common/sessionStartedSlug/SessionScheduled';
import SessionConsultantDetails from 'components/common/sessionStartedSlug/SessionConsultantDetails';
import Rating from '@mui/material/Rating';
import { FaStar } from "react-icons/fa";
import { useRouter } from 'next/router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineMessage } from 'react-icons/ai';

const AppointmentSession = () => {
     const Router=useRouter()
  return (
    <Fragment>
         <PageProgress/>
         <TopNavigation text="Consultant Name" animation="fade-left"/>
         <div className="container-fluid consultant_profile_detail_container" data-aos="fade-left">
               <SessionConsultantDetails/>
               <SessionScheduled/>
               <div className="row">
                     <SessionPackage/>
                     <AboutSession/>
                     <SessionStartedButton/>
               </div>
          </div>
    </Fragment>
  )
}

export default AppointmentSession