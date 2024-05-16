import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment } from 'react'

import { useRouter } from 'next/router';
import TopNavigation from 'components/layouts/TopNavigation';
import { IoIosArrowForward } from "react-icons/io";
import { TbHelpSquareFilled } from "react-icons/tb";

const PrivacyPolicy:FC = () => {
    const Router=useRouter()
  return (
    <Fragment>
        <PageProgress/>  
        <TopNavigation text="Privacy & Policy" animation="fade-left"/>
        <div className="main_featro_container margin_bootom_every_component" data-aos="fade-left">
                <div className="container-fluid " >
                        <div className="row faq_section_header">
                                <div className="col-12 padding-0">
                                        <h5 className="faq_question">Why are the terms & conditions for TDS offer ??</h5>
                                        <p className="faq_answer">
                                                Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                                                nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                                                urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                         </p>
                                         <p className="faq_answer">
                                                Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                                                nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                                                urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                         </p>  
                                </div>
                                <div className="col-12 padding-0">
                                        <h5 className="faq_question">Why are the terms & conditions for TDS offer ??</h5>
                                        <p className="faq_answer">
                                                Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                                                nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                                                urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                         </p>
                                         <p className="faq_answer">
                                                Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                                                nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                                                urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                         </p>  
                                </div>
                                <div className="col-12 padding-0">
                                        <h5 className="faq_question">Why are the terms & conditions for TDS offer ??</h5>
                                        <p className="faq_answer">
                                                Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                                                nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                                                urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                         </p>
                                         <p className="faq_answer">
                                                Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque
                                                nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
                                                urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                         </p>  
                                </div>
                        
                        </div>
                </div>     
        </div>   
    </Fragment>
  )
}

export default PrivacyPolicy