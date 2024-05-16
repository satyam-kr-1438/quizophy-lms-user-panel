"use client"
import React, { FC, Fragment, useState } from 'react'
import { useRouter } from 'next/router';
import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation';
import RescheduledReason from 'components/rescheduledAppointment/ReasonForRescheduled';
import RescheduleSelectDateAndTime from 'components/rescheduledAppointment/RescheduledSelectDateAndTime';

const RescheduledAppointment = () => {
    const Router=useRouter()
    const [step,setStep]=useState(1)
    const changeStepAndStoreData=(data:number)=>{
       setStep(data)
    }
  return (
    <Fragment>
         <PageProgress/>
          <TopNavigation text="Reschedule Appointment" animation="fade-left"/>
         <div className={step==2?"container-fluid":"container-fluid book_appointment_container"} data-aos="fade-left">
               {step==1 && <RescheduledReason changeStepAndStoreData={changeStepAndStoreData}/>}
               {step==2 && <RescheduleSelectDateAndTime changeStepAndStoreData={changeStepAndStoreData}/>}
         </div>
           
    </Fragment>
  )
}

export default RescheduledAppointment