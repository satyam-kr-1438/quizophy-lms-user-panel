import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface initialStateType {
  premiumPackages: any[]
  profileStatus:number,
  exams:any,
  questions:any[],
  language:string
}

const initialState: initialStateType = {
  premiumPackages: [],
  profileStatus:0,
  exams:undefined,
  questions:[],
  language:"English"
}

export const reducerSlice = createSlice({
  name: 'reducerData',
  initialState,
  reducers: {
    getActivePackagesBundlePasses: (state:any,action:any) => {
      state.premiumPackages=action.payload
    },
    setExamDetail: (state:any,action:any) => {
      state.exams=action.payload
    },
    setExamQuestions: (state:any,action:any) => {
      state.questions=action.payload
    },
    setExamLanguage: (state:any,action:any) => {
      state.language=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getActivePackagesBundlePasses,setExamDetail,setExamQuestions,setExamLanguage} = reducerSlice.actions

export default reducerSlice.reducer