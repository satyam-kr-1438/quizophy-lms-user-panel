import { topNavigationDTO } from 'components/dto/props.dto';
import React, { FC } from 'react'
import { IoArrowBackSharp } from "react-icons/io5";

const TopNavigation:FC<topNavigationDTO> = ({text,animation}) => {
  return (
    <div>
      <div className="top_back_button_content" data-aos={animation}>
            <div>
                <IoArrowBackSharp className="top_back_button_content_back" onClick={()=>{
                     if(typeof window !="undefined")
                          window.history.go(-1)
                }}/>
            </div>
            <div className="top_heading_container">
                <p className="top_back_button_content_heading">{text}</p>
            </div>
          </div>
    </div>
  )
}

export default TopNavigation