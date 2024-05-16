import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { Fragment } from 'react'
import Rating from '@mui/material/Rating';
import { FaStar } from "react-icons/fa";
import { useRouter } from 'next/router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ConsultantProfile = () => {
     const Router=useRouter()
     const settings = {
          dots: false,
          infinite: true,
          arrow:false,
          autoplay:false,
          autoplaySpeed:4000,
          speed: 1400,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "25px",
          rows: 1,
        };
  return (
    <Fragment>
         <PageProgress/>
         <TopNavigation text="Satyam Kumar" animation="fade-left"/>
         <div className="container-fluid consultant_profile_detail_container" data-aos="fade-left">
               <div className="row">
                    <div className="col-12">
                         <div className="consultant_first_section_container_new">
                              <div className="col-5 consultant_first_section_image">
                                   <img src="/img/festro/consultant_Profile_Photo.jpg" className="consultant_profile_image" alt="Consultant Profile"/>
                              </div>
                              <div className="col-7 consultant_first_section_content">
                                    <h4 className="margin-top-11">Mr. Shailendra Shekhawat</h4>
                                    <p className="consultant_specialist_section">Destination Wedding Planner</p>
                                    <p className="consultant_location_section"> Jaipur | Rajasthan</p>
                                    <hr className="seperator_line_consultant"/>
                                    <p className="consultant_location_section">Wedding planner | Decore Planner</p>
                                    <hr className="seperator_line_consultant"/>
                                    <p className="consultant_location_section">
                                        <FaStar className="star-icon" />
                                        <b> 4.8</b> • 106 Reviews
                                    </p>
                                    <div className="consultant_book_appointment_button">
                                        <button onClick={()=>{ Router.push("/book-your-appointment") }}>Let's Talk</button>
                                    </div>
                                </div>
                         </div>
                         {/* <hr className="dashed_seperator_line"/> */}
                    </div>
               </div>
               <div className="row consultant_profile_poniters">
                    <div className="col-4">
                         <div className='consultant_section2_container'>
                              {/* <div className="consultant_section2_img_main">
                                   <img className="style_category__feed__image__1HvUy" src="/img/festro/consultant.png" alt="Consultant"  />
                              </div> */}
                              <div className="consultant_section2_content_main">
                                   <p>Experience</p>
                                   <h2>10+ Years</h2>
                              </div>
                         </div>
                    </div>
                    <div className="col-4 left_vertical_border">
                         <div className='consultant_section2_container'>
                              <div className="consultant_section2_content_main">
                                   <p>Clients</p>
                                   <h2>5000+</h2>
                              </div>
                         </div>

                    </div>
                    <div className="col-4 left_vertical_border">
                         <div className='consultant_section2_container'>
                              <div className="consultant_section2_content_main">
                                   <p>Ratings</p>
                                   <h2>4.8</h2>
                              </div>
                         </div>

                    </div>
               </div>


               <div className="row">
                    <div className="col-12">
                         <div className="consultant_section3_data">
                              <h5>About</h5>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto? Voluptates obcaecati nesciunt consequuntur. Exercitationem laudantium magni eaque expedita atque velit, temporibus omnis eveniet! Debitis, ipsa. Iste consequatur earum, rerum fuga aspernatur veniam perspiciatis hic eum quaerat adipisci officia pariatur veritatis quibusdam! Molestiae, sunt atque facilis tenetur amet nihil repudiandae! <span className="consultant_read_more_button">Read More</span></p>
                         </div>
                    </div>
               </div>

               <div className="row">
                    <div className="col-12">
                         <div className="consultant_section4_data working-time">
                              <h5>Working Time</h5>
                              <p className="consultant_working_hours">Mondat-Friday, 09:00AM-08:00PM</p>
                         </div>
                    </div>
               </div>

               <div className="row">
                    <div className="consultant_profile_last_section">
                         <div className="col-12">
                              <div className="consultant_section5_data">
                                   <h5>Reviews</h5>
                                   <p className="consultant_section5_view_all" onClick={()=>{
                                        Router.push("/consultant/review/consultant_slug")
                                   }}>View All</p>
                              </div>
                         </div>

                         <div className="row">
                                   <Slider {...settings}>
                                        <div>
                                                  <div className="consultant_review_main_container_wrapper consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="consultant_review_profile">
                                                                      <img src="/img/festro/consultant_profile_home.png" alt="Review"/>
                                                                 </div>
                                                                 <div className="consultant_review_name_section">
                                                                      <h5>Satyam Kumar</h5>
                                                                      <span className="review_posted_time">23 Jan 2024</span>

                                                                 </div>
                                                            </div>
                                                            <div className="consultant_reviews">
                                                                 <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                                            </div>
                                                       </div>
                                                       <div className="consultant_review_comment_section">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi magnam laboriosam debitis incidunt aperiam non alias id magni vitae?</p>
                                                       </div>
                                                       {/* <div className="consultant_like_comment_section">
                                                                 <div className="consultant_like_container">
                                                                      <span className="consultant_like_image"><img src="/img/festro/like.png" alt="consultant"/></span>
                                                                      <span className="consultant_like_content">697</span>
                                                                 </div>
                                                       </div> */}
                                                  </div>
                                        </div>


                                        <div>
                                                  <div className="consultant_review_main_container_wrapper consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="consultant_review_profile">
                                                                      <img src="/img/festro/consultant_profile_home.png" alt="Review"/>
                                                                 </div>
                                                                 <div className="consultant_review_name_section">
                                                                      <h5>Satyam Kumar</h5>
                                                                      <span className="review_posted_time">23 Jan 2024</span>

                                                                 </div>
                                                            </div>
                                                            <div className="consultant_reviews">
                                                                 <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                                            </div>
                                                       </div>
                                                       <div className="consultant_review_comment_section">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi magnam laboriosam debitis incidunt aperiam non alias id magni vitae?</p>
                                                       </div>
                                                  </div>
                                        </div>

                                        <div>
                                                  <div className="consultant_review_main_container_wrapper consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="consultant_review_profile">
                                                                      <img src="/img/festro/consultant_profile_home.png" alt="Review"/>
                                                                 </div>
                                                                 <div className="consultant_review_name_section">
                                                                      <h5>Satyam Kumar</h5>
                                                                      <span className="review_posted_time">23 Jan 2024</span>

                                                                 </div>
                                                            </div>
                                                            <div className="consultant_reviews">
                                                                 <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                                            </div>
                                                       </div>
                                                       <div className="consultant_review_comment_section">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi magnam laboriosam debitis incidunt aperiam non alias id magni vitae?</p>
                                                       </div>
                                                  </div>
                                        </div>



                                        <div>
                                                  <div className="consultant_review_main_container_wrapper consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="consultant_review_profile">
                                                                      <img src="/img/festro/consultant_profile_home.png" alt="Review"/>
                                                                 </div>
                                                                 <div className="consultant_review_name_section">
                                                                      <h5>Satyam Kumar</h5>
                                                                      <span className="review_posted_time">23 Jan 2024</span>

                                                                 </div>
                                                            </div>
                                                            <div className="consultant_reviews">
                                                                 <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                                            </div>
                                                       </div>
                                                       <div className="consultant_review_comment_section">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi magnam laboriosam debitis incidunt aperiam non alias id magni vitae?</p>
                                                       </div>
                                                  </div>
                                        </div>
                                   </Slider>
                         </div>


                         {/* <div className="col-12">
                              <div className="consultant_review_apply_now_button">
                                   <button onClick={()=>{
                                        Router.push("/book-your-appointment")
                                   }}>Book Appointment</button>
                              </div>
                         </div> */}
                    </div>
               </div>
          </div>
    </Fragment>
  )
}

export default ConsultantProfile