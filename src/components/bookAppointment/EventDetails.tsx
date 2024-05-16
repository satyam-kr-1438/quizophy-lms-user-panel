import React, { Fragment,FC, useState } from 'react'
import Select from "react-select";
import { AiOutlineMessage } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { selectPackageDTO } from 'components/dto/props.dto';
import { useRouter } from 'next/router';

const duration = [
  { value: "30 Minutes", label: "30 Minutes" },
  { value: "60 Minutes", label: "60 Minutes" },
  { value: "90 Minutes", label: "90 Minutes" },
];
const EventDetails:FC<selectPackageDTO> = ({changeStepAndStoreData}) => {
    const [selectPackage,setSelectPackage]=useState({value:"30 Minutes",label:"30 Minutes"})
    const Router=useRouter()
  return (
    <Fragment>
         <div className="row">

            <div className="col-12">
                    <label className='appointment_eventDetail'>
                     <span>Event Name</span>
                     <input type="text" className="form-control py-2" placeholder='Your Event Name'/>
                     </label>

            </div>
            


            <div className="col-12">
                    <h5 className='appointment_select_date'>Select Event Type</h5>
            </div>
            <div className="col-12">
                <div className="appointment_select_duration">
                  <Select
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={selectPackage}
                        options={duration}
                        id="hh"
                    />
                </div>
            </div>


            <div className="col-12">
                    <label className='appointment_eventDetail'>
                     <span>Event Details</span>
                     <textarea rows={5} className="form-control py-2" placeholder='Your Event Details'/>
                     </label>

            </div>
        

            <div className="col-12">
                                        <div className="consultant_review_apply_now_button">
                                             <button onClick={()=>{
                                              Router.push("/appointments")
                                             }}>Submit</button>
                                        </div>
                    </div>  
         </div>
    </Fragment>
  )
}

export default EventDetails