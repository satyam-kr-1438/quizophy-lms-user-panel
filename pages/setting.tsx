import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { Fragment } from 'react'
import Rating from '@mui/material/Rating';
import { FaStar } from "react-icons/fa";
import { useRouter } from 'next/router';
import { BiEditAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneSquareSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdHelpCircleOutline } from 'react-icons/io';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbHistoryToggle } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { RxCalendar } from "react-icons/rx";
import { TbLock } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { VscBell } from "react-icons/vsc";
import { AiOutlineMessage } from "react-icons/ai";
import { LuHelpCircle } from "react-icons/lu";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 25,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#3f78e0',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#3f78e0',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

const Setting = () => {
    const Router=useRouter()
  return (
    <Fragment>
         <PageProgress/>
         <TopNavigation text="Setting"/>
         <div className="container-fluid consultant_profile_detail_container" data-aos="">
                <div className="row">
                    <div className="col-12">
                         <div className="user_first_section_container_new">
                              <div className="col-5 user_setting_image">
                                   <img src="/img/festro/consultant_Profile_Photo.jpg" className="user_profile_image" alt="User Profile"/>
                              </div>
                              <div className="col-7 user_setting_details_section">
                                    <h4 className="margin-top-47">Rajendra Rao <span onClick={()=>{
                                        Router.push("/edit-profile")
                                    }}><BiEditAlt className="edit_icon" /></span></h4>
                                    <p className="user_setting_details"><HiOutlineMail className="user_contact_icons" /> rajendra.rao@gmail.com</p>
                                    <p className="user_setting_details"><LiaPhoneSquareSolid className="user_contact_icons" /> +91 9461111911</p>
                                </div>
                         </div>
                    </div>
                </div>
                <div className="row user_profile_poniters">
                    <div className="col-5">
                    </div>
                    <div className="col-7">
                        <div className='user_section_2'>
                            <div className="total_balance_container">
                                <span onClick={()=>{
                                Router.push("/wallet")
                            }}>
                                <IoWalletOutline className="user_profile_wallet_icon"/> </span> 
                                <span className="user_profile_wallet_amount">₹999</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 margin-top-11">
                        <div className="user_setting_section3_data">
                            <div className="row profile_listing_main_container">
                                
                                <p className="first_container user_setting_labels">Your Account</p>
                                <div className="col-12">
                                    <div className="user_profile_listing" onClick={()=>{ Router.push("/help");  }} >
                                        <div className="first_container">
                                            <span><MdOutlineFavoriteBorder className="profile_icon"/></span>
                                            <p>Favorite</p>
                                        </div>
                                        <div className="second_container">
                                            <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="user_profile_listing" onClick={()=>{
                                            Router.push("/transaction-history")
                                        }}>
                                        <div className="first_container">
                                            <span><TbHistoryToggle className="profile_icon"/></span>
                                            <p>Transaction History</p>
                                        </div>
                                        <div className="second_container">
                                            <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="user_profile_listing" onClick={()=>{ Router.push("/help");  }} >
                                        <div className="first_container">
                                            <span><TbUser className="profile_icon"/></span>
                                            <p>Account Details</p>
                                        </div>
                                        <div className="second_container">
                                            <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="user_setting_seperator"></div>
                                
                                <p className="first_container user_setting_labels">Push Notifications</p>
                                <div className="col-12">
                                    <div className="user_profile_listing">
                                        <div className="first_container">
                                            <span><VscBell className="profile_icon"/></span>
                                            <p>Alert Notifications</p>
                                        </div>
                                        <div className="second_container">
                                               <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked/>}
                                                    label=""
                                                    // checked={true}
                                                />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="user_profile_listing">
                                        <div className="first_container">
                                            <span><RxCalendar className="profile_icon"/></span>
                                            <p>Appointments</p>
                                        </div>
                                        <div className="second_container">
                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked/>}
                                                    label=""
                                                    // checked={true}
                                                />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="user_profile_listing">
                                        <div className="first_container">
                                            <span><AiOutlineMessage className="profile_icon"/></span>
                                            <p>Direct Message</p>
                                        </div>
                                        <div className="second_container">
                                            {/* <div className="form-check form-switch margin-right-10"> */}
                                                {/* <input role="switch" type="checkbox" className="form-check-input" /> */}
                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked/>}
                                                    label=""
                                                    // checked={true}
                                                />
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="user_setting_seperator"></div>
                                
                                <p className="first_container user_setting_labels">More Info & Support</p>
                                <div className="col-12">
                                    <div className="user_profile_listing" onClick={()=>{ Router.push("/help");  }} >
                                        <div className="first_container">
                                            <span><TbLock className="profile_icon"/></span>
                                            <p>Privacy</p>
                                        </div>
                                        <div className="second_container">
                                            <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="user_profile_listing" onClick={()=>{ Router.push("/help");  }} >
                                        <div className="first_container">
                                            <span><MdOutlinePrivacyTip className="profile_icon"/></span>
                                            <p>Security</p>
                                        </div>
                                        <div className="second_container">
                                            <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="user_profile_listing" onClick={()=>{ Router.push("/help");  }} >
                                        <div className="first_container">
                                            <span><MdOutlineFeedback className="profile_icon"/></span>
                                            <p>Service & Feedback</p>
                                        </div>
                                        <div className="second_container">
                                            <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="user_profile_listing" onClick={()=>{ Router.push("/help");  }} >
                                        <div className="first_container">
                                            <span><LuHelpCircle className="profile_icon"/></span>
                                            <p>Help Center</p>
                                        </div>
                                        <div className="second_container">
                                            <span className='font_12'><IoIosArrowForward  className="profile_icon"/></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
          </div>
    </Fragment>
  )
}

export default Setting