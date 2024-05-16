import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment, useEffect, useState } from 'react'

import { useRouter } from 'next/router';
import TopNavigation from 'components/layouts/TopNavigation';
import RechargeSectionOne from 'components/common/rechargeComponent/RechargeSectionOne';
import RechargeSectionTwo from 'components/common/rechargeComponent/RechargeSectionTwo';
import RechargeSectionThree from 'components/common/rechargeComponent/RechargeSectionThree';
import RechargeButtonContainer from 'components/common/rechargeComponent/RechargeButtonContainer';
import RechargeSkeleton from 'components/skeleton/RechargeSkeleton';

const Recharge:FC = () => {
  const [loading,setLoading]=useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },1000)
    },[])
  return (
    <Fragment>
        <PageProgress/>  
        <TopNavigation text="Recharge" animation="fade-left"/>
        <div className="recharge_festro_container" data-aos="fade-left">
               <div className="container-fluid">
                  <div className="row">
                      {
                        loading? <RechargeSkeleton/> : <>
                               <RechargeSectionOne/>
                               <RechargeSectionTwo/>
                               <RechargeSectionThree/>
                               <RechargeButtonContainer/>
                        </>
                      }
                  </div>
               </div>
        </div>      
    </Fragment>
  )
}

export default Recharge