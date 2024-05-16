import { useRouter } from 'next/router';
import React, { FC,Fragment, useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { HiOutlineLogout } from 'react-icons/hi';
import { HiOutlineReceiptRefund } from 'react-icons/hi2';
import { IoIosArrowForward, IoMdHelpCircleOutline } from 'react-icons/io';
import { IoSettingsOutline, IoWalletOutline } from 'react-icons/io5';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { profileNavigationDTO } from 'components/dto/props.dto';
import Drawer from '@mui/material/Drawer';
type Anchor = 'bottom';
const ProfileSectionThree:FC<profileNavigationDTO> = ({setOpenSideBar}) => {
    const Router=useRouter()
    const [state, setState] = useState<boolean>(false)
   
  return (
    <Fragment>
        <div className="row profile_listing_main_container">
                    <div className="col-12">
                         <div className="profile_listing" onClick={()=>{ Router.push("/help"); setOpenSideBar(false) }} >
                              <div className="first_container">
                                   <span><IoMdHelpCircleOutline className="profile_icon"/></span>
                                   <p>Help</p>
                              </div>
                              <div className="second_container">
                                   <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                              </div>
                         </div>
                    </div>

                    <div className="col-12">
                         <div className="profile_listing" onClick={()=>{
                                 Router.push("/edit-profile")
                                 setOpenSideBar(false) 
                               }}>
                              <div className="first_container">
                                   <span><CgProfile className="profile_icon"/></span>
                                   <p>Edit Profile</p>
                              </div>
                              <div className="second_container">
                                   <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                              </div>
                      </div>
                 </div>

                    <div className="col-12">
                         <div className="profile_listing" onClick={()=>{ Router.push("/wallet"); setOpenSideBar(false) }} >
                              <div className="first_container">
                                   <span><IoWalletOutline className="profile_icon"/></span>
                                   <p>Wallet</p>
                              </div>
                              <div className="second_container">
                                   <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                              </div>
                         </div>
                    </div>

                    <div className="col-12">
                         <div className="profile_listing" onClick={()=>{ 
                              Router.push("/terms-conditions")
                              setOpenSideBar(false) }}>
                              <div className="first_container">
                                   <span><IoSettingsOutline className="profile_icon"/></span>
                                   <p>Terms & Conditions</p>
                              </div>
                              <div className="second_container">
                                   <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                              </div>
                         </div>
                    </div>

                    <div className="col-12">
                         <div className="profile_listing" onClick={()=>{ 
                              Router.push("/privacy-policy")
                              setOpenSideBar(false) }}>
                              <div className="first_container">
                                   <span><MdOutlinePrivacyTip className="profile_icon"/></span>
                                   <p>Privacy & Policy</p>
                              </div>
                              <div className="second_container">
                                   <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                              </div>
                         </div>
                    </div>

                    <div className="col-12">
                         <div className="profile_listing" onClick={()=>{ 
                              Router.push("/cancellation-refund-policy")
                              setOpenSideBar(false) }}>
                              <div className="first_container">
                                   <span><HiOutlineReceiptRefund className="profile_icon"/></span>
                                   <p>Cancellation & Refund</p>
                              </div>
                              <div className="second_container">
                                   <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                              </div>
                         </div>
                    </div>

                    <div className="col-12">
                         <div className="profile_listing" onClick={()=>{ setState(true) }}>
                              <div className="first_container">
                                   <span><HiOutlineLogout className="profile_icon"/></span>
                                   <p>Logout</p>
                              </div>
                              <div className="second_container">
                                   <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                              </div>
                         </div>
                    </div>
               </div>



               {(['bottom'] as const).map((anchor) => (
                         <React.Fragment key={anchor}>
                              <Drawer
                                   anchor={anchor}
                                   open={state}
                                   onClose={()=>{
                                        setState(false)
                                   }}
                              >
                                        <div className="col-12 px-4 mt-5">
                                             <div className="text-center">
                                                  <h4>Are you sure you want to logout?</h4>
                                             </div>
                                        </div>
                                        <div className="col-12 px-4">
                                             <div className="my-5">
                                             <div className="festron_btn_container text-center ">
                                                       <button className='btn_dark_festro_round' onClick={()=>{
                                                            setOpenSideBar(false)
                                                            Router.push("/login")
                                                       }}>Confirm</button>
                                             </div>
                                             </div>
                                             
                                        </div>
                              </Drawer>
                         </React.Fragment>
                    ))}

    </Fragment>
  )
}

export default ProfileSectionThree