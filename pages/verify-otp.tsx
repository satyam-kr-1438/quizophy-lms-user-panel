import { useRouter } from 'next/router'
import React,{FC, Fragment, useState} from 'react'

import PageProgress from 'components/common/PageProgress';
import OTPInput from 'react-otp-input';

const VerifyOtp:FC = () => {
   const Router=useRouter() 
   const [otp,setOtp]=useState<any>()
  return (
    <Fragment>
        <PageProgress />
        <div className="login_verify_container_scroll">
            <div className="container-fluid">
                <div className="row">
                  <div className="col-12" data-aos="fade-left">
                        <div className="registration_h2_p_container">
                            <h4>Verify Phone</h4>
                            <p>
                            OTP has been sent to +91-8541889529</p>
                        </div>
                  </div>
                  <div className="col-12" data-aos="fade-left">
                        <div className="form_input_container">
                                                       <OTPInput
                                                            value={otp}
                                                            onChange={setOtp}
                                                            numInputs={6}
                                                            renderSeparator={<span>{" "}</span>}
                                                            inputStyle={{background:"white",border:"1px solid #e3e3e3",outline:"none",borderRadius:"5px",padding:"10px",width:"44px",height:"44px",margin:"2px auto"}}
                                                            renderInput={(props) => <input {...props} />}
                                                          />
                        </div>

                        <div>
                            <div className="resendotp_container">
                              <p>Didn’t receive code? {" "}<span>Resend OTP</span></p>
                            </div>

                        </div>
                        
                  </div>
                    <div className='festro_text_btn_container_login'>
                    <div className="festron_btn_container_verify text-center ">
                          <button className='btn back btn_dark_festro_round' onClick={()=>{
                                Router.push("/login")
                            }}>Back</button>
                            <button className='btn verify btn_dark_festro_round' onClick={()=>{
                                Router.push("/home")
                            }}>Verify</button>
                  </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default VerifyOtp