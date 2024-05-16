import Loading from 'components/dashboardComponent/common/loadingPart/Loading'
import { getActivePackagesAndPassesDetails } from 'components/request/request'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'
import { useRouter } from 'next/router'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getActivePackagesBundlePasses } from 'reducers/reducerSlice'

const GetAllActivePackagesAndPasses:FC<any> = ({children}) => {
    const dispatch=useDispatch()
    const router=useRouter()
    const getPremiumPackagesAndPasses=async ()=>{
        try{
         const auth=getAuthenticatedUserData()
         if(auth){
            const {data}=await getActivePackagesAndPassesDetails(auth?.id)
            if(data?.success){
               dispatch(getActivePackagesBundlePasses(data?.data))
            }else{
            }
         }else{
         }
        }catch(err){
        }
     }
     useEffect(()=>{
         getPremiumPackagesAndPasses()
     },[])
  return (
    <Fragment>
        {
            children
        }
    </Fragment>
  )
}

export default GetAllActivePackagesAndPasses