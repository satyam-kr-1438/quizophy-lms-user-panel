import React, { Fragment } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoShareSocialOutline } from 'react-icons/io5'

const ReferEarnSectionFive = () => {
  return (
    <Fragment>
          <div className="refer_button_container_last">
                  <div className="refer_button1">
                        <button>
                          <span className="refer_share_button_text">Invite Now</span>
                          <span  className="refer_share_icon_box1"><IoLogoWhatsapp className="refer_share_icon"/></span>
                        </button>
                  </div>
                  <div className="refer_button2">
                       <button >
                          <span className="refer_share_button_text">Other Options</span>
                          <span className="refer_share_icon_box2"><IoShareSocialOutline  className="refer_share_icon"/></span>
                       </button>
                  </div>
            </div>
    </Fragment>
  )
}

export default ReferEarnSectionFive