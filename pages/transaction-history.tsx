import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment, useState } from 'react'

import { useRouter } from 'next/router';
import TopNavigation from 'components/layouts/TopNavigation';
import { Tab, Tabs } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NoTransactionFound from 'components/common/transactionHistory/NoTransactionFound';
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const TransactionHistory:FC = () => {
    const Router=useRouter()
    const [activeSubTab,setActiveSubTab]=useState("All")
   
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
   
    const settings = {
      dots: false,
      infinite: false,
      speed: 200,
      autoplay:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      onSwipe:(e:any)=>{
         if(e=="left"){
            setValue(1)
         }
         else{
            setValue(0)
         }
      }
    };
  return (
    <Fragment>
        <PageProgress/>  
        <TopNavigation text="Transaction History" animation="fade-left"/>
        <div className="container fluid transaction_container_main" data-aos="fade-left">
             <div className="row">
                <div className="col-12">
                                 <Tabs
                                    style={{display:"flex"}} className="transaction_tab_container" 
                                    value={value}
                                    onChange={()=>{
                                       if(value==0){
                                          setValue(1)
                                       }else{
                                          setValue(0)
                                       }
                                    }}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                 >
                                    <Tab className={`${value==0?"active_tab_recharge transaction_first_tab_container":"transaction_first_tab_container"}`} label="Account" {...a11yProps(0)} onClick={()=>{
                                       setValue(0)
                                    }}/>
                                    <Tab className={`${value==1?"active_tab_recharge transaction_first_tab_container":"transaction_first_tab_container"}`} label="Recharge" {...a11yProps(1)} onClick={()=>{
                                       setValue(1)
                                    }}/>
                                 </Tabs>
                </div> 

                                   <div className="col-12">
                                        {value==0 && <Slider {...settings}>
                                             <div >
                                                <div className="col-12">
                                                   <div className="transaction_second_tab_container">
                                                         <div className={`${activeSubTab=="All"?"transaction_active_aub_tab":"transaction_not_active_aub_tab"}`} onClick={()=>{
                                                            setActiveSubTab("All")
                                                         }}>
                                                            All
                                                         </div>
                                                         <div className={`${activeSubTab=="Credit"?"transaction_active_aub_tab":"transaction_not_active_aub_tab"}`} onClick={()=>{
                                                            setActiveSubTab("Credit")
                                                         }}>
                                                            Credit
                                                         </div>
                                                         <div className={`${activeSubTab=="Debit"?"transaction_active_aub_tab":"transaction_not_active_aub_tab"}`} onClick={()=>{
                                                            setActiveSubTab("Debit")
                                                         }}>
                                                            Debit
                                                         </div>
                                                   </div>
                                               </div>

                                               <NoTransactionFound/>

                                             </div>
                                             <div style={{width:"10px"}}>

                                             </div>                                          
                                        </Slider>}

                                        {value==1 && <Slider {...settings}>
                                              <div>
                                                <div className="col-12">
                                                   <div className="transaction_second_tab_container">
                                                         <div className={`${activeSubTab=="All"?"transaction_active_aub_tab_2":"transaction_not_active_aub_tab_2"}`} onClick={()=>{
                                                            setActiveSubTab("All")
                                                         }}>
                                                            All
                                                         </div>
                                                         <div className={`${activeSubTab=="Success"?"transaction_active_aub_tab_2":"transaction_not_active_aub_tab_2"}`} onClick={()=>{
                                                            setActiveSubTab("Success")
                                                         }}>
                                                            Success
                                                         </div>
                                                         <div className={`${activeSubTab=="Pending"?"transaction_active_aub_tab_2":"transaction_not_active_aub_tab_2"}`} onClick={()=>{
                                                            setActiveSubTab("Pending")
                                                         }}>
                                                            Pending
                                                         </div>
                                                         <div className={`${activeSubTab=="Failed"?"transaction_active_aub_tab_2":"transaction_not_active_aub_tab_2"}`} onClick={()=>{
                                                            setActiveSubTab("Failed")
                                                         }}>
                                                            Failed
                                                         </div>
                                                   </div>
                                                </div>
                                                <NoTransactionFound/>
                                             </div>
                                             <div style={{width:"10px"}}>
                                             
                                             </div>
                                             
                                        </Slider>}
                                   </div>



                      


             </div>
        </div>
    </Fragment>
  )
}

export default TransactionHistory