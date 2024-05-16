import { useRouter } from 'next/router';
import React, { FC, Fragment } from 'react'
import { TbSmartHome } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";
import { TbCalendarUser } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
let pathNameArrFooter=["/home","/home-2","/favourite-consultant","/appointments","/setting"]

const Footer:FC = () => {
  const Router=useRouter()
  return (
    <Fragment>
         <div className="footer">
            <div className={(window?.location?.pathname=="/home")?"footer-items footer-active":"footer-items"} onClick={()=>{
                  Router.push("/home")
                }}>
                <TbSmartHome className="footer_icon" />
                <span className="footer_tab_menu">Home</span>
            </div>
            <div className={(window?.location?.pathname=="/favourite-consultant")?"footer-items footer-active":"footer-items"} onClick={()=>{
                  Router.push("/favourite-consultant")
                }}>
              <TbUsersGroup className="footer_icon" />
              <span className="footer_tab_menu">Consultants</span>
            </div>
            <div className={(window?.location?.pathname=="/appointments")?"footer-items footer-active":"footer-items"} onClick={()=>{
                  Router.push("/appointments")
                }}>
              <TbCalendarUser className="footer_icon" />
              <span className="footer_tab_menu">Appointments</span>
            </div>
            <div className={(window?.location?.pathname=="/setting")?"footer-items footer-active":"footer-items"} onClick={()=>{
                  Router.push("/setting")
                }}>
              <TbSettings className="footer_icon" />
              <span className="footer_tab_menu">Setting</span>
            </div>
          </div>
    </Fragment>
  )
}

export default Footer