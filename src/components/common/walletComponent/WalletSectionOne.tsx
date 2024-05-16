import React, { Fragment } from 'react'

const WalletSectionOne = () => {
  return (
    <Fragment>
                    <div className="row">
                        <div className="col-12">
                            <div className="wallet_amount_container">
                                <div className="total_balance_container">
                                    <h5>₹</h5>
                                    <h5 className="wallet_amount_show">999</h5>
                                </div>
                                <div className="total_balance_container2">
                                    <p>Total balance</p>
                                </div>
                            </div>
                        </div>
                      </div>
    </Fragment>
  )
}

export default WalletSectionOne