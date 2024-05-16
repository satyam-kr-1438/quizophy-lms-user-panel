import { FC, Fragment } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { testimonialList2 } from 'data/testimonial-list';
import TestimonialCard from './TestimonialCard';
import TestimonialTiles from './TestimonialTiles';

const Testimonial: FC = () => {
  return (
    <Fragment>
      <h3 className="display-4 mb-3 text-center">What People Say About Us</h3>
      <p className="lead fs-lg mb-10 text-center">Dont take our word for it. See what customers are saying about us.</p>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center">
        <div className="col-lg-7">
          <TestimonialTiles />
        </div>

        <div className="col-lg-5 mt-5">
          <div className="swiper-container dots-closer mb-6">
            <Carousel grabCursor slidesPerView={1} navigation={false} autoplay={true} loop={true}>
              {testimonialList2.map((item, i) => (
                <TestimonialCard key={i} {...item} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
