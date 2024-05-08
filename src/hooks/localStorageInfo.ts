export const setAuthenticationData=(data:any)=>{
   if(typeof window!="undefined" && typeof localStorage!="undefined"){
     localStorage.setItem("quizophyAuthenticatedUserDetail",JSON.stringify(data))
     let getData=(localStorage.getItem("quizophyAuthenticatedUserDetail") || "")
     if(getData){
        return true
     }else{
        return false
     }
   }else{
    return false
   }
}

export const removeAuthenticationDataHandleLogout=()=>{
  if(typeof window!="undefined" && typeof localStorage!="undefined"){
    localStorage.removeItem("quizophyAuthenticatedUserDetail")
    return true
  }else{
   return false
  }
}

export const getAuthenticatedUserData=()=>{
  if(typeof window!="undefined" && typeof localStorage!="undefined"){
    let getData=(localStorage.getItem("quizophyAuthenticatedUserDetail") || "")
    if(getData){
       return JSON.parse(getData)
    }else{
      return null
    }
  }else{
   return null
  }
}


export const checkUserProfileStatus=()=>{
  if(typeof window!="undefined" && typeof localStorage!="undefined"){
    let getData=(localStorage.getItem("quizophyAuthenticatedUserDetail") || "")
    if(getData){
       if(JSON.parse(getData)?.firstname && JSON.parse(getData)?.lastname && JSON.parse(getData)?.email && JSON.parse(getData)?.address){
          return true
       }else{
        return false
       }
    }else{
      return false
    }
  }else{
   return false
  }
}