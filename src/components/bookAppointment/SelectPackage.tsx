import React, { Fragment,FC, useState } from 'react'
import Select from "react-select";
import { AiOutlineMessage } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { selectPackageDTO } from 'components/dto/props.dto';

const duration = [
  { value: "30 Minutes", label: "30 Minutes" },
  { value: "60 Minutes", label: "60 Minutes" },
  { value: "90 Minutes", label: "90 Minutes" },
];
const SelectPackage:FC<selectPackageDTO> = ({changeStepAndStoreData}) => {
    const [selectPackage,setSelectPackage]=useState({value:"30 Minutes",label:"30 Minutes"})
  return (
    <Fragment>
         <div className="row">
            <div className="col-12">
                    <h5 className='appointment_select_date mt-3'>Select Duration</h5>
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

            <div className="col-12 margin-top-15">
                <h5 className='appointment_select_date'>Select Package</h5>
            </div>
            <div className="col-12">
                <div className="appointment_select_package_container">
                     <div className="select_package_first_section">
                         <span>
                              <AiOutlineMessage className="appointment_select_package_icon"/>
                         </span>
                     </div>
                     <div className="select_package_second_section">
                         <h5>Messaging</h5>
                         <p>Chat with Consultant</p>
                     </div>
                     <div className="select_package_third_section">
                         <h5>₹20</h5>
                         <p>per 30 min</p>
                     </div>
                </div>


                <div className="appointment_select_package_container_selected">
                     <div className="select_package_first_section_selected">
                         <span>
                              <BiPhoneCall className="appointment_select_package_icon_selected"/>
                         </span>
                     </div>
                     <div className="select_package_second_section_selected">
                         <h5>Voice Call</h5>
                         <p>Call with Consultant</p>
                     </div>
                     <div className="select_package_third_section_selected">
                         <h5>₹20</h5>
                         <p>per 30 min</p>
                     </div>
                </div>



                <div className="appointment_select_package_container">
                     <div className="select_package_first_section">
                         <span>
                              <IoVideocamOutline className="appointment_select_package_icon"/>
                         </span>
                     </div>
                     <div className="select_package_second_section">
                         <h5>Video Call</h5>
                         <p>Video Call with Consultant</p>
                     </div>
                     <div className="select_package_third_section">
                         <h5>₹20</h5>
                         <p>per 30 min</p>
                     </div>
                </div>
            </div>

            <div className="col-12">
                   <div className="consultant_review_apply_now_button" onClick={()=>{
                        changeStepAndStoreData(3)
                    }}>
                          <button>Next</button>
                   </div>
            </div>  
         </div>
    </Fragment>
  )
}

export default SelectPackage