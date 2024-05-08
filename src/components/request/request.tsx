import axios from "axios";
let API_URL="http://localhost:5001/api/user/user"
let QUIZ_URL="http://localhost:5003/api/quiz/quiz"
let COMMON_URL="http://localhost:5000/api/common"
let QUESTION_URL="http://localhost:5002/api/question"
export const APIURLADMIN="http://localhost:5006/api/conferenceQuiz/web/admin-setting"
export const PACKAGE_URL="http://localhost:5007/api/package/package"
export const BUNDLE_PACKAGE_URL="http://localhost:5007/api/package/bundle"
export const PAYMENT_GATEWAY_CREDENTIALS_API_KEY="http://localhost:5006/api/conferenceQuiz/quiz/payment-gateway"
export const PAYMENT_API_KEY="http://localhost:5007/api/package/payment"
export const EXAM_API_KEY="http://localhost:5007/api/package/exam"




// let API_URL="https://quiz.quizophy.com/api/user/user"
// let QUIZ_URL="https://quiz.quizophy.com/api/quiz/quiz"
// let COMMON_URL="https://quiz.quizophy.com/api/common"
// let QUESTION_URL="https://quiz.quizophy.com/api/question"
// export const APIURLADMIN="https://quiz.quizophy.com/api/conferenceQuiz/web/admin-setting"
// export const PACKAGE_URL="https://quiz.quizophy.com/api/package/package"
// export const BUNDLE_PACKAGE_URL="https://quiz.quizophy.com/api/package/bundle"
// export const PAYMENT_GATEWAY_CREDENTIALS_API_KEY="https://quiz.quizophy.com/api/conferenceQuiz/quiz/payment-gateway"
// export const PAYMENT_API_KEY="https://quiz.quizophy.com/api/package/payment"
// export const EXAM_API_KEY="https://quiz.quizophy.com/api/package/exam"


import { EmailVerificationOTPSentDTO, EmailVerificationOTPVerifiedDTO, QuizResultTypeDTO, RegisterOrLoginOtpSend, RegisterOrLoginOtpVerify } from "./request.dto";

export const registerOrLoginOtpSend=(phone:RegisterOrLoginOtpSend)=>{
   return axios.post(`${API_URL}/registerOrLogin/sendOtp`,{phone})
}

export const registerOrLoginOtpVerify=(data:RegisterOrLoginOtpVerify)=>{
   return axios.post(`${API_URL}/registerOrLogin/verifyOtp`,{phone:data?.phone,otp:data?.otp})
}


export const emailVerificationOTPSent=(data:EmailVerificationOTPSentDTO)=>{
   return axios.post(`${API_URL}/emailVerificationOTPSent`,{email:data?.email,id:data?.id})
}

export const emailVerificationOTPVerified=(data:EmailVerificationOTPVerifiedDTO)=>{
   return axios.post(`${API_URL}/emailVerificationOTPVerified`,{otp:data?.otp,id:data?.id,email:data?.email})
}

export const getCourses=()=>{
   return axios.get(`${COMMON_URL}/course/getAll?items_per_page=6&page=1`)
}
export const completeUserProfile=(data:any,id:number)=>{
   return axios.post(`${API_URL}/complete/profile/${id}`,data)
}

export const checkUserRegisteredOrNot=(id:any)=>{
   return axios.post(`${API_URL}/checkUserExistOrNot/${id}`)
}

export const uploadImage = (file:any) => {
   const fd = new FormData()
   fd.append('image', file[0])
   return  axios
   .post(`${API_URL}/upload-image`, fd)
 }

 export const getAllQuizzes=(query:string)=>{
    return axios.get(`${QUIZ_URL}/quizzes/status/get?${query}`)
 }

 export const getQuizReportStatus=(data:any)=>{
    return axios.post(`${QUIZ_URL}/getQuizReportStatus`,data)
 }
 export const getAllCoursesSubject=()=>{
    return axios.get(`${COMMON_URL}/subject/getAll`)
 }

 export const getQuizDetailForPlayingQuizzes=(quiz_key:any,user_id:any)=>{
     return axios.get(`${QUESTION_URL}/questionBank/getAllQuestionsWithQuizId/${quiz_key}/${user_id}`)
 }
 export const  submitQuizResult=(data:any)=>{
   return axios.post(`${QUIZ_URL}/submitQuizResult/result/submit`,data)
 }

 export const getQuizResult=(data:QuizResultTypeDTO)=>{
     return axios.post(`${QUIZ_URL}/getQuizResult/result/get`,data)
 }

 export const submitQuizQuestionAnswer=(data:any)=>{
     return axios.post(`${QUIZ_URL}/submitQuizQuestionAnswer`,data)
 }

 export const intializedQuizAnalysisStatus=(data:any)=>{
    return axios.post(`${QUIZ_URL}/intializedQuizAnalysisStatus/status`,data)
 }

 export const reattemptQuizAnalysisStatus=(data:any)=>{
   return axios.post(`${QUIZ_URL}/reattemptQuiz/status`,data)
}


 export const submitQuizReview=(data:any)=>{
   return axios.post(`${QUIZ_URL}/submitQuizReview/review/submit`,data)
 }
 export const getAllReviewUsingQuizKey=(quiz_key:any)=>{
   return axios.get(`${QUIZ_URL}/getAllReview/get/${quiz_key}`)
 }



 export const updateQuizReview=(id:any,data:any)=>{
   return axios.put(`${QUIZ_URL}/updateQuizReview/${id}`,data)
 }

 export const deleteQuizReview=(id:any)=>{
    return axios.delete(`${QUIZ_URL}/deleteQuizReview/${id}`)
 }
 export const getAllCoupon=(id:any,email:any)=>{
   return axios.get(`${COMMON_URL}/coupon/getAllCoupon/get/${id}/${email}`)
 }

 export const getAllPasses=()=>{
   return axios.get(`${COMMON_URL}/passes/getAllPass/users`)
 }

 export const getBlogCategory=()=>{
   return axios.get(`${COMMON_URL}/option/website_blog_category`)
 }
 export const getBlog=()=>{
   return axios.get(`${APIURLADMIN}/admin/blog`)
 }
 export const getBlogs=(activePage:any,category:any,search:any)=>{
    return axios.get(`${APIURLADMIN}/blog?page=${activePage}&&itemsPerPage=6&&category=${category}&&search=${search}`)
 }

 export const getBlogByIdData=(slug:any)=>{
   return axios.get(`${APIURLADMIN}/blog/${slug}`)
 }


 export const getPackages=(query:string)=>{
    return axios.get(`${PACKAGE_URL}/user/get/packages?${query}`)
 }
 export const getPackagesHomePage=()=>{
    return axios.get(`${PACKAGE_URL}/home/get/packages`)
 }
 export const getPackageUsingKeyAndSlug=(slug:any,key:any,user_id:any)=>{
     return axios.get(`${PACKAGE_URL}/user/get/package/${slug}/${key}/${user_id}`)
 }

 export const addPackagesToCart=(user_id:any,package_id:any)=>{
      return axios.post(`${PACKAGE_URL}/user/cart/package/add`,{user_id,package_id})
 }
 export const addPackagesToWishlist=(user_id:any,package_id:any)=>{
   return axios.post(`${PACKAGE_URL}/user/wishlist/package/add`,{user_id,package_id})
}

export const getWishlistPackages=(query:string)=>{
   return axios.get(`${PACKAGE_URL}/user/wishlist/get/packages?${query}`)
}

export const getCartPackages=(query:string)=>{
   return axios.get(`${PACKAGE_URL}/user/cart/get/packages?${query}`)
}
export const getPaymentGatewayApiKey=(type:string)=>{
   return axios.get(`${PAYMENT_GATEWAY_CREDENTIALS_API_KEY}/getPaymentGatewayCredentials/${type}`)
} 
export const razorPayCheckOut=(data:any)=>{
   return axios.post(`${PAYMENT_API_KEY}/razorPayPaymentCheckout`,data)
}

export const applyCoupon=(data:any,userId:any,packageId:any,bundleId:any,passId:any,currency:string,passData:any)=>{
    return axios.post(`${PAYMENT_API_KEY}/applyCoupon`,{data,userId,packageId:packageId?packageId:"undefined",bundleId:bundleId?bundleId:"undefined",passId:passId?passId:"undefined",currency,passData:passId?passData:"undefined"})
}
export const getActivePackagesAndPassesDetails=(user_id:any)=>{
     return axios.get(`${PAYMENT_API_KEY}/getActivePackagesAndPasses/${user_id}`)
}
export const getAllTransactionDetails=(user_id:any)=>{
     return axios.get(`${PAYMENT_API_KEY}/getAllTransactionDetails/${user_id}`)
}

export const getBundlePackages=(query:any)=>{
    return axios.get(`${BUNDLE_PACKAGE_URL}/getBundlePackagesUser?${query}`)
}
export const getBundlePackagesUsingKeyAndSlug=(slug:any,key:any,user_id:any)=>{
   return axios.get(`${BUNDLE_PACKAGE_URL}/user/get/bundlePackage/${slug}/${key}/${user_id}`)
}

//package
export const checkPackageIsAvailableForUser=(package_id:any,subpackage_id:any,exam_id:any,user_id:any)=>{
   return axios.get(`${PAYMENT_API_KEY}/checkPackageisAvailableForUserOrNot/${package_id}/${subpackage_id}/${exam_id}/${user_id}`)
}

//bundle
export const checkBundlePackageIsAvailableForUser=(bundle_id:any,package_id:any,subpackage_id:any,exam_id:any,user_id:any)=>{
   return axios.get(`${PAYMENT_API_KEY}/checkBundlePackageisAvailableForUserOrNot/${bundle_id}/${package_id}/${subpackage_id}/${exam_id}/${user_id}`)
}
export const getExamDetailWithQuestions=(exam_id:any,exam_key:any)=>{
   return axios.get(`${PAYMENT_API_KEY}/getExamSectionExamDetail/${exam_id}/${exam_key}`)
}
export const setExamSectionTimeAndQuestionTime=(data:any)=>{
   return axios.post(`${EXAM_API_KEY}/setTimeTakenForExamSectionAndQuestionTime`,data)
}

export const getExamDetailWithQuestionsAndAnswer=(exam_id:any,exam_key:any)=>{
   return axios.get(`${PAYMENT_API_KEY}/getExamSectionExamDetailWithAnswer/${exam_id}/${exam_key}`)
}

export const initializedExamStatus=(data:any)=>{
   return axios.post(`${EXAM_API_KEY}/initializedExamStatus`,data)
}
export const submitQuestionAnswerForExam=(data:any)=>{
   return axios.post(`${EXAM_API_KEY}/submitQuestionAnswerExam`,data)
}

export const getExamQuestionStatus=(payload:any)=>{
   return axios.post(`${EXAM_API_KEY}/getExamQuestionStatus`,payload)
}
export const clearResponseDeleteQuestionAndAnswer=(data:any)=>{
   return axios.post(`${EXAM_API_KEY}/clearResponseFromDatabaseforParticularQuestion`,data)
}

//not section-wise api
export const updateExamSectionTimeStatusOnEverySeconds=(data:any)=>{
    return axios.post(`${EXAM_API_KEY}/updateTimeStatusOnEverySecond`,data)
}

//section-wise api 
export const updateExamSectionTimeStatusOnEverySecondsSecionWise=(data:any)=>{
   return axios.post(`${EXAM_API_KEY}/updateTimeStatusOnEverySecondSectionWIse`,data)
}

//Not Section-wise
export const findTotalTimeTakenForExamSection=(data:any)=>{
    return axios.post(`${EXAM_API_KEY}/findTotalTimeTakenForParticularSection`,data)
}
//find section-wise

export const findTotalTimeTakenForExamSectionSectionWize=(data:any)=>{
   return axios.post(`${EXAM_API_KEY}/findTotalTimeTakenForParticularSectionSectionWise`,data)
}

export const findExamSectionLeftTime=(data:any)=>{
    return axios.post(`${EXAM_API_KEY}/findExamSectionTimeLeftForExam`,data)
}
export const submitExam=(data:any)=>{
    return axios.post(`${EXAM_API_KEY}/submitExam/submit`,data)
}

export const findExamWhichIsAlreadyGiven=(data:any)=>{
   return axios.post(`${EXAM_API_KEY}/findExamWhichIsAlreadyGiven`,data)
}


export const generateReportForExamResult=(data:any)=>{
    return axios.post(`${PAYMENT_API_KEY}/generateReportForExamResult`,data)
}



export const cashFreePaymentCheckout=(data:any)=>{
   return axios.post(`${PAYMENT_API_KEY}/cashfree-payment-checkout`,data)
}

export const updateQuizTimerEverySeconds=(data:any)=>{
   return axios.put(`${QUIZ_URL}/status/update/updateTimeTakenForQuiz`,data)
}

export const resetQuizTimerIfNoAnswerFound=(data:any)=>{
   return axios.put(`${QUIZ_URL}/status/reset/resetTimeTakenForQuiz`,data)
}
