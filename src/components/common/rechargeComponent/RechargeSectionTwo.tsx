import React, { Fragment } from 'react'

const RechargeSectionTwo = () => {
  return (
    <Fragment>
        <div className="col-12">
                          <div className="recharge_second_section_container">
                              <div className="recharge_amount_first_section">
                                   <h5>Amount</h5>
                              </div>
                              <div className="recharge_amount_second_section">
                                 <input type="text" className="form-control py-2" placeholder='Enter Amount' value="150"/>
                              </div>

                              <div className="recharge_add_amount_section">
                                  <div className="recharge_add_amount_first">
                                      +250
                                  </div>
                                  <div className="recharge_add_amount_first">
                                      +500
                                  </div>
                                  <div className="recharge_add_amount_first">
                                      +1000
                                  </div>
                              </div>
                          </div>
        </div>

    </Fragment>
  )
}

export default RechargeSectionTwo