import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { FC, Fragment } from 'react'

const FAQs:FC = () => {
  return (
    <Fragment>
        <PageProgress/>
        <TopNavigation text="FAQs" animation="fade-left"/>
        <div className="main_featro_container margin_bootom_every_component" data-aos="fade-left">
                <div className="container-fluid " >
                        <div className="row faq_section_header">
                                <div className="col-12 padding-0">
                                        <h5 className="faq_question">Why are the terms & conditions for TDS offer ??</h5>
                                </div>

                                <div className="col-12 padding-0">
                                        <p className="faq_answer">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                        </p>
                                </div>
                        
                        </div>
                </div>     
        </div>     
    </Fragment>
  )
}

export default FAQs