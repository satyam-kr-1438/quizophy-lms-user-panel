import { profileNavigationDTO, topNavigationDTO } from 'components/dto/props.dto';
import React, { FC } from 'react'
import { IoArrowBackSharp } from "react-icons/io5";

const ProfileNavigation:FC<profileNavigationDTO> = ({text,setOpenSideBar}) => {
  return (
    <div>
      <div className="top_back_button_content">
            <div>
                <IoArrowBackSharp className="top_back_button_content_back" onClick={()=>{
                     setOpenSideBar(false)
                }}/>
            </div>
            <div className="top_heading_container">
                <p className="top_back_button_content_heading">{text}</p>
            </div>
          </div>
    </div>
  )
}

export default ProfileNavigation