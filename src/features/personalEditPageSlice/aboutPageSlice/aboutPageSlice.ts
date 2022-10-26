import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AboutPageState} from "../../../type/personalEditStateType";


const initialState: AboutPageState = {
    template:"",
    title: 'About',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    photo: null,
    backgroundColor: "#fff",
    titleColor: "#332E68",
    textColor: "#191937",

}

export const aboutPageSlice = createSlice({
    name: 'about-page',
    initialState,
    reducers: {
        setAboutTemplate: (state, {payload}: PayloadAction<string>) => {
            state.template = payload
        },
        setAboutTitle: (state, {payload}: PayloadAction<string>) => {

            state.title = payload
        },
        setAboutDescription: (state, {payload}: PayloadAction<string>) => {
            state.description = payload
        },

        setAboutPhoto: (state, {payload}:any) => {
            state.photo =  payload
        },
        setAboutBgColor: (state, {payload}: PayloadAction<string>) => {
            state.backgroundColor = payload
        },
        setAboutTitleColor: (state, {payload}: PayloadAction<string>) => {
            state.titleColor = payload
        },
        setAboutTextColor: (state, {payload}: PayloadAction<string>) => {
            state.textColor = payload
        }
    },
})

export const {
    setAboutTemplate,
    setAboutTextColor,
    setAboutTitleColor,
    setAboutBgColor,
    setAboutPhoto,
    setAboutDescription,
    setAboutTitle
} = aboutPageSlice.actions

export default aboutPageSlice.reducer