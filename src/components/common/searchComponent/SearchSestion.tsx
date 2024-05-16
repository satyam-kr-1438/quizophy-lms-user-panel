import React, { Fragment, useState } from 'react'
import { CiFilter } from "react-icons/ci";
import Select from "react-select";
const selectPackage = [
  { value: "Audio Call", label: "Audio Call" },
  { value: "Video Call", label: "Video Call" },
  { value: "Messaging", label: "Messaging" },
];

import Drawer from '@mui/material/Drawer';
import SelectStateAndCity from './SelectCityAndState';
type Anchor = 'bottom';
const SearchSestion = () => {
   const [open,setOpen]=useState<boolean>(false)
   const [userPackage,setUserPackage]=useState<any>({value: "Audio Call", label: "Audio Call"})
  return (
    <Fragment>
           <div className="container-fluid mt-5 mb-3 search_consultant_container">
                        <div className="row" style={{marginTop:'60px'}}>
                        <div className="col-12">
                              <div className="search_box_home">
                                       <input onClick={()=>{
                                         }} type="text" className="form-control py-2 px-4"  style={{background:"white"}} placeholder='Search Consultant...' />
                                       <span className="search_icon" onClick={()=>{
                                               setOpen(true)
                                          }} >
                                          {/* <img src="/img/festro/filter.png" style={{width:"22px"}} alt="close" className="style_img__26PED"/> */}
                                          <CiFilter className="search_mic_icon"/>
                                       </span>
                              </div>
                    </div>
                        </div>

                        {(['bottom'] as const).map((anchor) => (
                         <React.Fragment key={anchor}>
                              <Drawer
                                   anchor={anchor}
                                   open={open}
                                   onClose={()=>{
                                        setOpen(false)
                                   }}
                              >
                                        <div className="col-12 px-4 mt-2">
                                             <div className="text-center">
                                                  <h4>Select Your Package & City</h4>
                                             </div>
                                        </div>
                                        <div className="col-12 px-4">
                                            <div>
                                                    <p className="search_consultant_label">Select Package</p>
                                                    <Select
                                                          className="react-select"
                                                          classNamePrefix="select"
                                                          defaultValue={userPackage}
                                                          options={selectPackage}
                                                          
                                                      />
                                            </div>
                                            <div>
                                                    <SelectStateAndCity/>
                                            </div>
                                        </div>
                                        <div className="col-12 px-1">
                                             <div className="my-5">
                                              <div className="search_consultant_button_container text-center ">
                                                        <button className='btn search_consultant_btn_cancel' onClick={()=>{
                                                           setOpen(false)
                                                        }}>Cancel</button>
                                                        <button className='btn search_consultant_btn_filter' onClick={()=>{
                                                        }}>Apply Filter</button>
                                              </div>
                                             </div>
                                             
                                        </div>
                              </Drawer>
                         </React.Fragment>
                    ))}
           </div>
    </Fragment>
  )
}

export default SearchSestion