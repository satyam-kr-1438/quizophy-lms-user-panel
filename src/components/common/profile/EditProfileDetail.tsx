import React, { Fragment, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import OTPInput from 'react-otp-input';
import SelectStateAndCity from './SelectStateAndCity';
import Select from "react-select";

const selectGender=[
    {
        label:"Male",
        value:"Male"
    },
    {
        label:"Female",
        value:"Female"
    },
    {
        label:"Others",
        value:"Others"
    }
]
const EditProfileDetail = () => {
  const [open,setOpen]=useState<boolean>(false)
  const [otp,setOtp]=useState<any>()
  const [gender,setGender]=useState<any>({
    label:"Male",
    value:"Male"
  })
  return(
    <Fragment>
        <div className="container-fluid edit_profile_container" data-aos="fade-left">
           <div className="row">
              <div className="col-12">
                  <div className="edit_profile_input_container">
                      <label className="edit_profile_input_field">
                          Enter Full Name
                         <input type="text" className="form-control p-2" placeholder='Enter Full Name'/>
                      </label>
                  </div>

                  <div className="edit_profile_input_container">
                      <label className="edit_profile_input_field edit_profile_input_field_email">
                          Enter Email
                         <input type="text" className="form-control p-2" placeholder='Enter Email'/>
                         <button className="edit_profile_verify_email" onClick={()=>{
                           setOpen(true)
                         }}>Verify  Email</button>
                      </label>
                  </div>

                  <div>
                       <p className="search_consultant_label">Select Gender</p>
                        <Select
                            className="react-select"
                            classNamePrefix="select"
                            value={gender}
                            onChange={(e:any)=>{
                              setGender(e)
                            }}
                            options={selectGender}                 
                        />
                  </div>

                  <SelectStateAndCity/>

                        <div className="my-5">
                                              <div className="search_consultant_button_container text-center ">
                                                        <button className='btn search_consultant_btn_cancel' onClick={()=>{
                                                            if(typeof window!="undefined"){
                                                                window.history.go(-1)
                                                            }
                                                        }}>Back</button>
                                                        <button className='btn search_consultant_btn_filter' onClick={()=>{
                                                        }}>Save Profile</button>
                                              </div>
                        </div>

                  




          
              </div>
           </div>

        </div>
                   {(['bottom'] as const).map((anchor) => (
                         <React.Fragment key={anchor}>
                              <Drawer
                                   anchor={anchor}
                                   open={open}
                                   onClose={()=>{
                                        setOpen(false)
                                   }}
                              >
                                        <div className="col-12 px-4 mt-2">
                                             <div className="text-center">
                                                  <h6>Enter Valid OTP</h6>
                                                  <p className="edit_profile_email_otp"> 6 digit OTP has been sent on your email</p>
                                             </div>
                                        </div>
                                        <div className="col-12 px-4">
                                            <div>
                                                        <OTPInput
                                                            value={otp}
                                                            onChange={setOtp}
                                                            numInputs={6}
                                                            renderSeparator={<span>{" "}</span>}
                                                            inputStyle={{background:"white",border:"1px solid #e3e3e3",outline:"none",borderRadius:"5px",padding:"10px",width:"44px",height:"44px",margin:"2px auto"}}
                                                            renderInput={(props) => <input {...props} />}
                                                          />
                                                    
                                            </div>
                                          
                                        </div>
                                        <div className="col-12 px-1">
                                             <div className="my-5">
                                              <div className="search_consultant_button_container text-center ">
                                                        <button className='btn search_consultant_btn_cancel' onClick={()=>{
                                                           setOpen(false)
                                                        }}>Cancel</button>
                                                        <button className='btn search_consultant_btn_filter' onClick={()=>{
                                                        }}>Verify</button>
                                              </div>
                                             </div>
                                             
                                        </div>
                              </Drawer>
                         </React.Fragment>
                    ))}
    </Fragment>
  )
}

export default EditProfileDetail