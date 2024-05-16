import React, { Fragment } from 'react'

const NoTransactionFound = () => {
  return (
    <Fragment>
                     <div className="col-12 transaction_not_found_container">
                              <div className="transaction_not_found_section mx-auto text-center">
                                    <div className="transaction_not_found_img_container text-center">
                                       <img className="mx-auto"  src="/img/festro/transaction_not_found.png" alt="Transaction Not Found"/>
                                    </div>
                                    <p className="transaction_not_found_content">No Transaction Yet</p>
                              </div>
                     </div>
    </Fragment>
  )
}

export default NoTransactionFound