import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiGift } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { RiFileHistoryLine } from "react-icons/ri";
import { PiCertificate } from "react-icons/pi";
import { BsController } from "react-icons/bs";
import { useRouter } from 'next/router';
import TopNavigation from 'components/layouts/TopNavigation';
import WalletSectionOne from 'components/common/walletComponent/WalletSectionOne';
import WalletSectionTwo from 'components/common/walletComponent/WalletSectionTwo';
import WalletSectionThree from 'components/common/walletComponent/WalletSectionThree';
import WalletSkeleton from 'components/skeleton/WalletSkeleton';

const Wallet:FC = () => {
    const Router=useRouter()
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },1000)
    },[])
  return (
    <Fragment>
        <PageProgress/>  
        <TopNavigation text="Balance" animation="fade-left" />
        <div className="main_featro_container" data-aos="fade-left">
                <div className="container-fluid wallet_main_container_all_detail" >
                    {
                        loading ? <WalletSkeleton/> : <>
                            <WalletSectionOne/>
                            <WalletSectionTwo/>
                            <WalletSectionThree/>
                        </>
                    }
                </div>     
        </div>      
    </Fragment>
  )
}

export default Wallet