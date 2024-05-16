"use client"
import React, { FC, Fragment, useState } from 'react'
import { useRouter } from 'next/router';
import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation';
import Flatpickr from "react-flatpickr";
import SelcetDateAndHours from 'components/bookAppointment/SelcetDateAndHours';
import SelectPackage from 'components/bookAppointment/SelectPackage';
import EventDetails from 'components/bookAppointment/EventDetails';

const BookYourAppointment = () => {
    const Router=useRouter()
    const [step,setStep]=useState(1)

    const changeStepAndStoreData=(data:number)=>{
       setStep(data)
    }
  return (
    <Fragment>
         <PageProgress/>
         <TopNavigation text="Book Your Appointment" animation="fade-left"/>
         {/* {step!=1 && <TopNavigation text="Book Your Appointment"/>} */}
         <div className={step==1?"container-fluid":"container-fluid book_appointment_container"} data-aos="fade-left">
               {step==1 && <SelcetDateAndHours changeStepAndStoreData={changeStepAndStoreData}/>}
               {step==2 && <SelectPackage changeStepAndStoreData={changeStepAndStoreData}/>}
               {step==3 && <EventDetails changeStepAndStoreData={changeStepAndStoreData}/>}
         </div>
           
    </Fragment>
  )
}

export default BookYourAppointment