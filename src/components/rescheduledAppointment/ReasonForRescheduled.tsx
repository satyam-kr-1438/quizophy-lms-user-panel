import { selectPackageDTO } from 'components/dto/props.dto';
import { useRouter } from 'next/router';
import React, { Fragment,FC } from 'react'

const RescheduledReason:FC<selectPackageDTO> = ({changeStepAndStoreData}) => {
    const Router=useRouter()
  return (
    <Fragment>
            <div className="row">
                    <div className="col-12">
                        <h5 className="appointment_select_date">Reason For Rescheduled</h5>
                    </div>
                    <div className="col-12">
                           <div className="rescheduled_event_reason">
                             <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="rescheduled_appointment_reason_input form-check-label" htmlFor="flexRadioDefault1">
                                        I’m having a schedule clash
                                    </label>
                              </div>

                              <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label className="rescheduled_appointment_reason_input form-check-label" htmlFor="flexRadioDefault2">
                                       I’m not available on schedule
                                    </label>
                              </div>

                              <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                    <label className="rescheduled_appointment_reason_input form-check-label" htmlFor="flexRadioDefault3">
                                       I have a activity that can’t be left behind
                                    </label>
                              </div>


                              <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                                    <label className="rescheduled_appointment_reason_input form-check-label" htmlFor="flexRadioDefault4">
                                      I don’t want to tell
                                    </label>
                              </div>

                              <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
                                    <label className="rescheduled_appointment_reason_input form-check-label" htmlFor="flexRadioDefault5">
                                        Changes of plans
                                    </label>
                              </div>

                              <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6"/>
                                    <label className="rescheduled_appointment_reason_input form-check-label" htmlFor="flexRadioDefault6">
                                       Others
                                    </label>
                              </div>
                           </div>
                    </div>



                    <div className="col-12">
                    <label className='appointment_eventDetail'>
                     <span>Reason</span>
                     <textarea rows={5} className="form-control py-2" placeholder='Reason For Rescheduled'/>
                     </label>

            </div>
        

                    <div className="col-12">
                          <div className="consultant_review_apply_now_button">
                              <button onClick={()=>{
                                  changeStepAndStoreData(2)
                              }}>Next</button>
                          </div>
                    </div>  
               </div>
    </Fragment>
  )
}

export default RescheduledReason