import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router';

import UpcomingEvent from 'components/myAppointment/UpcomingEvent';
import CompletedEvent from 'components/myAppointment/CompletedEvent';
import CancelledEvent from 'components/myAppointment/CancelledEvent';
const Appointments = () => {
     const Router=useRouter()
     const [activeTab,setActiveTab]=useState(1)
  return (
    <Fragment>
         <PageProgress/>
         <TopNavigation text="My Appointments"/>
         <div className="container-fluid my_appointments_main_container" >
              <div className="row">
                 <div className="col-12">
                      <div className="my_appointment_tab_navigation">
                           <div className={activeTab==1?"my_appointment_active_tab":"my_appointment_tab"} onClick={()=>{
                                  setActiveTab(1)
                               }}>
                               <p>Upcoming</p>
                           </div>
                           <div>
                               <p className={activeTab==2?"my_appointment_active_tab":"my_appointment_tab"} onClick={()=>{
                                  setActiveTab(2)
                               }}>Completed</p>
                           </div>
                           <div>
                               <p className={activeTab==3?"my_appointment_active_tab":"my_appointment_tab"} onClick={()=>{
                                  setActiveTab(3)
                               }}>Cancelled</p>
                           </div>
                      </div>
                 </div>
                    {
                        activeTab==1 && <UpcomingEvent/>
                    }
                    {
                        activeTab==2 && <CompletedEvent/>
                    }
                    {
                        activeTab==3 && <CancelledEvent/>
                    }
              </div>
         </div>
    </Fragment>
  )
}

export default Appointments