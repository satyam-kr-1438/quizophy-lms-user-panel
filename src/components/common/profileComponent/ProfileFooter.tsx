import React, { Fragment } from 'react'
import { CiFacebook, CiTwitter } from 'react-icons/ci'
import { IoLogoInstagram } from 'react-icons/io'

const ProfileFooter = () => {
  return (
    <Fragment>
      <div className="row fixed_logout_bottom" >
        
        <div className="col-12">
          <div className="profile_icon_container">
            <h6>FOLLOW US</h6>
            <div>
              <CiFacebook className="profile_social_icon"/>
              <CiTwitter className="profile_social_icon"/>
              <IoLogoInstagram className="profile_social_icon"/>
            </div>
          </div>
        </div>
        <hr className="dashed_seperator_line"/>
        <div className="col-12">
          <div className="profile_version"> 
            <p className="profile_version_logo">Fiestro</p>
            <p>VERSION 1.0</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileFooter