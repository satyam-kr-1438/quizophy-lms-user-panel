import React, { Fragment } from 'react'

const ReferEarnSectionTwo = () => {
  return (
    <Fragment>
         <div className="row">
                <div className="col-12">
                    <div className="refer_how_works_heading">
                        <h5>How it works ??</h5>
                    </div>
                </div>
                <div className="col-12">
                   <div className="refer_iframe">
                      <iframe className="refer_iframe_video" src="https://www.youtube.com/embed/L8PW9rXxCvk?si=yST8-bjmWK10DkwK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                   </div>
                </div>
                <div className="refer_section2_content_main">
                     <div className="refer_section2_first_part">
                        <div>
                           <span className="refer_count">1</span>
                        </div>
                        <span className="refer_section2_content">Invite your friends to Fiestro</span>
                     </div>
                     <div className="refer_section2_first_part">
                        <div>
                           <span className="refer_count">2</span>
                        </div>
                        <span className="refer_section2_content">You earn 1% fund share every time your friends</span>
                     </div>
                     <div className="refer_section2_first_part">
                       <div>
                           <span className="refer_count">3</span>
                        </div>
                        <span className="refer_section2_content">Earn upto ₹200 per invite </span>
                     </div>
                </div>
             </div>
    </Fragment>
  )
}

export default ReferEarnSectionTwo