import React, { Fragment } from 'react'

const ProfileSectionTwo = () => {
  return (
    <Fragment>
            <div className="row consultant_profile_poniters">
                    <div className="col-6">
                         <div className='consultant_section2_container'>
                              <div className="consultant_section2_content_main">
                                   <p>Wallet Balance</p>
                                   <h5 className='profile_data margin_0'>₹80</h5>
                              </div>
                         </div>
                    </div>
                    <div className="col-6 left_vertical_border">
                         <div className='consultant_section2_container'>
                              <div className="consultant_section2_content_main">
                                   <p>Appoinments</p>
                                   <h5 className='profile_data margin_0'>05</h5>
                              </div>
                         </div>
                    </div>
               </div>
    </Fragment>
  )
}

export default ProfileSectionTwo