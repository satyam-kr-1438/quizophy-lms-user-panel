import PageProgress from 'components/common/PageProgress'

import React, { FC, Fragment, useState } from 'react'

import { useRouter } from 'next/router';
import { profileNavigationDTO } from 'components/dto/props.dto';
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

import ProfileSectionOne from 'components/common/profileComponent/ProfileSectionOne';
import ProfileSectionTwo from 'components/common/profileComponent/ProfileSectionTwo';
import ProfileSectionThree from 'components/common/profileComponent/ProfileSectionThree';
import ProfileFooter from 'components/common/profileComponent/ProfileFooter';
type Anchor = 'bottom';

const ProfilePage:FC<profileNavigationDTO> = ({setOpenSideBar}) => {
    const Router=useRouter()
    const [state, setState] = useState<any>(false)
   
  return (
     <Fragment>
          <PageProgress/>
          <div className="profile_container my-0" style={{overflow:"hidden"}}>
             <div data-aos="fade-right">
               <ProfileSectionOne/>
               <ProfileSectionTwo/>
               <ProfileSectionThree setOpenSideBar={setOpenSideBar}/>
             </div>
               <ProfileFooter/>
         </div>
     </Fragment>
  )
}

export default ProfilePage