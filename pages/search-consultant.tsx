import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { FC, Fragment, useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/router';
import { BsSearch } from 'react-icons/bs';
import { IoMicOutline } from "react-icons/io5";
import SearchSestion from 'components/common/searchComponent/SearchSestion';
import SearchSectionTwo from 'components/common/searchComponent/SearchSectionTwo';
import SearchConsultantSkeleton from 'components/skeleton/SearchConsultantSkeleton';

const SearchConsultant:FC = () => {
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
        <TopNavigation text="Search Consultant" animation="fade-left"/>
        {
          loading ? <SearchConsultantSkeleton/> : <>
              <div className="main_featro_container margin_bootom_every_component" data-aos="fade-left">
                   <SearchSestion/>
                   <SearchSectionTwo/>         
              </div>
          </>
        }
    </Fragment>
  )
}

export default SearchConsultant