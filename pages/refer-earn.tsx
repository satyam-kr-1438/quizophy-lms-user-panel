import { FC,Fragment } from 'react'
import PageProgress from 'components/common/PageProgress'
import ReferEarnSectionOne from 'components/common/referAndEarnContainer/ReferEarnSectionOne';
import ReferEarnSectionTwo from 'components/common/referAndEarnContainer/ReferEarnSectionTwo';
import ReferEarnSectionThree from 'components/common/referAndEarnContainer/ReferEarnSectionThree';
import ReferEarnSectionFour from 'components/common/referAndEarnContainer/ReferEarnSectionFour';
import ReferEarnSectionFive from 'components/common/referAndEarnContainer/ReferEarnSectionFive';

const ReferEarn:FC = () => {
  return (
    <Fragment>
          <PageProgress/>
          {/* <TopNavigation text="Refer & Earn" animation="fade-left"/> */}
          <div className="container-fluid refre_and_earn_margin_top_bottom" data-aos="fade-left">
              <ReferEarnSectionOne/>
              <ReferEarnSectionTwo/>
              <ReferEarnSectionThree/>
              <ReferEarnSectionFour/>
              <ReferEarnSectionFive/>

          </div>
    </Fragment>
  )
}

export default ReferEarn