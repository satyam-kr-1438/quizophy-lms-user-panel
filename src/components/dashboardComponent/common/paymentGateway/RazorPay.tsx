"use client"
import axios from 'axios'
import React,{useState,useEffect,memo, FC} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { ErrorMessage } from '../messageToast/AlertMessageToast'
import { PAYMENT_API_KEY, getPaymentGatewayApiKey, razorPayCheckOut } from 'components/request/request'
import SwipeableButton from 'components/common/SlideToContinue'
import { getAuthenticatedUserData } from 'hooks/localStorageInfo'

const RazorPay:FC<any> = ({currency,payableAmount,couponDetail,packageDetail,couponDiscount,type}) => {
    const [buyNowLoading,setBuyNowLoading]=useState(false)

    const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document?.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            setBuyNowLoading(false)
            resolve(false);
          };
    
          document?.body?.appendChild(script);
        })
    }
    
    const checkoutHandler = async (amount:number) => {
        try{
        setBuyNowLoading(true)
        const res = await initializeRazorpay()
        if (!res) {
            setBuyNowLoading(false)
            ErrorMessage(`Unable to process your request.Please try again later.`)
            return;
        }
        const {data}=await getPaymentGatewayApiKey("RazorPay")
        let userDetail=getAuthenticatedUserData()
        if(userDetail?.address){
            delete userDetail.address
        }
        const data2 = await razorPayCheckOut({currency,couponDiscount,payableAmount,couponDetail,packageDetail,userDetail,type})
        if(!data2?.data?.success){
          ErrorMessage(data2?.data?.message)
        }else{
            let order=data2?.data?.order
            const options = {
                key:data?.data?.public_key,
                amount:order?.amount,
                currency:order?.currency,
                name: "Quizophy Pvt Ltd",
                description: "RazorPay Payment Gateway",
                // image: "/img/razorpay.png",
                order_id: order.id,
                callback_url:`${PAYMENT_API_KEY}/razorPayPaymentVerification`,
                prefill: {
                    name: getAuthenticatedUserData().firstname + " "+ getAuthenticatedUserData().lastname,
                    // name:"Satyam Quizophy",
                    email: getAuthenticatedUserData().email,
                    contact: getAuthenticatedUserData().phone
                },
                notes: {
                    "address": "RazorPay Corporate Office"
                },
                theme: {
                    "color": "#FF0000"
                }
            };
            if(typeof window!="undefined"){
                const razor: any = new (window as any).Razorpay(options);
                razor.open();
            } 
        }
        }
        catch(err){
            ErrorMessage("Failed to load RazorPay.Please try later")
        }
        
    }
    const onSuccess =()=> {
        if(payableAmount>0){
            checkoutHandler(payableAmount)
        }else{
            if(currency=="INR"){
                checkoutHandler(packageDetail?.price_inr)
            }else{
                checkoutHandler(packageDetail?.price_usd)
            }
        }
    }



  return (
    <div>
        <ToastContainer/>
        <div>
            {/* <button className="btn btn-primary block text-center mx-auto" onClick={(e:any)=>{
                 e?.preventDefault()
                 if(payableAmount>0){
                    checkoutHandler(payableAmount)
                }else{
                    if(currency=="INR"){
                        checkoutHandler(packageDetail?.price_inr)
                    }else{
                        checkoutHandler(packageDetail?.price_usd)
                    }
                }
            }}>
                Buy Now
            </button> */}
            <div className='block'>
                <SwipeableButton onSuccess={onSuccess} color='#6ab04c' text='Slide to Continue' />
            </div>
        </div>
    </div>
  )
}

export default memo(RazorPay)