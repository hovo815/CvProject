import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {MainPageState} from "../../../type/personalEditStateType";
import _ from "lodash";


const initialState: MainPageState = {
    template:"",
    name: 'Ayo Ogunse',
    profession: 'Desinger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    tags:["Work","About","Contact"],
    interests:[{id:_.uniqueId("id"), interest: "marketing"},],
    photo: null,
    backgroundColor: "#fff",
    titleColor: "#332E68",
    textColor: "#191937",

}

export const mainPageSlice = createSlice({
    name: 'main-page',
    initialState,
    reducers: {
        setMainTemplate: (state, {payload}: PayloadAction<string>) => {
            state.template = payload
        },
        setMainName: (state, {payload}: PayloadAction<string>) => {
            state.name = payload
        },
        setMainProfession: (state, {payload}: PayloadAction<string>) => {
            state.profession = payload
        },
        setMainDescription: (state, {payload}: PayloadAction<string>) => {
            state.description = payload
        },
        setMainFirstBtn: (state, {payload}: PayloadAction<string>) => {
            state.tags[0] = payload
        },
        setMainSecondBtn: (state, {payload}: PayloadAction<string>) => {
            state.tags[1] = payload
        },
        setMainThirdBtn: (state, {payload}: PayloadAction<string>) => {
            state.tags[2] = payload
        },
        setInterest : (state ,{payload}) => {
            state.interests.map((item) => {
            if (item.id === payload.id){
                item.interest = payload.interest
            }
            return item
            })
        },
        addInterest : (state) =>{
          state.interests.push({id:_.uniqueId(), interest:""})
        },
        removeInterest : (state, {payload}) => {
            state.interests = state.interests.filter((item) => item.id !== payload)
        },
        setMainPhoto: (state, {payload}:any) => {
            state.photo =  payload
        },
        setMainBgColor: (state, {payload}: PayloadAction<string>) => {
            state.backgroundColor = payload
        },
        setMainTitleColor: (state, {payload}: PayloadAction<string>) => {
            state.titleColor = payload
        },
        setMainTextColor: (state, {payload}: PayloadAction<string>) => {
            state.textColor = payload
        }
    },
})

export const {
    setMainTemplate,
    setMainTextColor,
    setMainTitleColor,
    setMainBgColor,
    setMainPhoto,
    setMainThirdBtn,
    setMainSecondBtn,
    setMainFirstBtn,
    setInterest,
    addInterest,
    removeInterest,
    setMainDescription,
    setMainProfession,
    setMainName
} = mainPageSlice.actions

export default mainPageSlice.reducer