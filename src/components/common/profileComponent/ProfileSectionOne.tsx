import React, { Fragment } from 'react'

const ProfileSectionOne = () => {
  return (
    <Fragment>
             <div className="container-fluid mx-auto text-center">
                    <div className="profile_img">
                         <div className="circle_double_border">
                              <img src="/img/festro/consultant_Profile_Photo.jpg" alt="Profile"/>
                         </div>
                    </div>
                    <div className="profile_img">
                         <h5>Rajendra Rao</h5>
                    </div>
               </div>
    </Fragment>
  )
}

export default ProfileSectionOne