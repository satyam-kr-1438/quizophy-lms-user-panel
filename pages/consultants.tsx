import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { FC, Fragment } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/router';
import { BsSearch } from 'react-icons/bs';
import { IoMicOutline } from "react-icons/io5";
import SearchSestion from 'components/common/searchComponent/SearchSestion';
import SearchSectionTwo from 'components/common/searchComponent/SearchSectionTwo';
import VenueCategories from 'components/common/categories/VenueCategories';

const Consultants:FC = () => {
    const Router=useRouter()
  
  return (
    <Fragment>
        <PageProgress/>
        <TopNavigation text="Consultant" animation="fade-left"/>
        <div className="main_featro_container margin_bootom_every_component" data-aos="fade-left">
                   <VenueCategories/>         
        </div>
    </Fragment>
  )
}

export default Consultants