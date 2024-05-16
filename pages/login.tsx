import { useRouter } from 'next/router'
import React,{FC, Fragment, useState} from 'react'

import PageProgress from 'components/common/PageProgress';
type Anchor = 'bottom';
const Login:FC = () => {
   const Router=useRouter()
   const [state, setState] = useState<any>({
    bottom: false,
  })

  return (
    <Fragment>
        <PageProgress />
        <div className="login_verify_container_scroll">
            <div className="container-fluid">
                <div className="row">
                  <div className="col-12" data-aos="fade-left">
                        <div className="registration_h2_p_container">
                            <h4>Enter your mobile number</h4>
                            <p>
                             We’ll send you an OTP</p>
                        </div>
                  </div>
                  <div className="col-12" data-aos="fade-left">
                        <div className="form_input_container">
                            <span>+91</span>
                            <input type="tel" placeholder='Enter Phone Number' className="form-control"></input>
                        </div>
                        
                  </div>
                    <div className='festro_text_btn_container_login'>
                    <div className="festron_btn_container text-center ">
                            <button className='btn_dark_festro_round' onClick={()=>{
                                Router.push("/verify-otp")
                            }}>Continue</button>
                  </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Login