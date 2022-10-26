import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ContactPageState} from "../../../type/personalEditStateType";
import _ from "lodash/fp";


const initialState: ContactPageState = {
    template:"",
    title: 'Contact Information',
    phone: '+ 90 543- 779 94 6 ',
    email: "info@gmail.com ",
    address: "Rossi Gianni, VIA GARIBALDI 26, 70043 MONOPOLI BA ITALIA",
    contactMedia:[
    {id: _.uniqueId("id"), title: "", url: "", icon: null}
    ],
    bgColor: "#fff",
    titleColor: "#332E68",
    textColor: "#191937",

}

export const contactPageSlice = createSlice({
    name: 'contact-page',
    initialState,
    reducers: {
        setContactTitle: (state, {payload}: PayloadAction<string>) => {

            state.title = payload
        },
        setContactPhone: (state, {payload}: PayloadAction<string>) => {
            state.phone = payload
        },
        addContactMedia: (state) => {
            state.contactMedia.push({id: _.uniqueId("id"), title: "", url: "", icon: null})
        },
        removeContactMedia: (state, {payload}) => {
            state.contactMedia = state.contactMedia.filter(item => item.id !== payload)
        },
        setContactMediaTitle: (state, {payload}) => {
            state.contactMedia.map(item => {
                if (item.id === payload.id) {
                    item.title = payload.title
                }
                return  item.title
            })
        },
        setContactMediaUrl: (state, {payload}) => {
            state.contactMedia.map(item => {
                if (item.id === payload.id) {
                    item.url = payload.url
                }
                return item.url
            })
        },
        setContactMediaIcon: (state, {payload}) => {
            state.contactMedia.map(item => {
                if (item.id === payload.id) {
                    item.icon = payload.icon
                }
                return  item.icon
            })
        },
        removeContactMediaIcon: (state, {payload}) => {
            state.contactMedia.map(item => {
                if(item.id === payload.id){
                    item.icon = null
                }
                return item.icon
            })
        },

        setContactEmail: (state, {payload}: PayloadAction<string>) => {
            state.email = payload
        },
        setContactAddress: (state, {payload}: PayloadAction<string>) => {
            state.address = payload
        },
        setContactBgColor: (state, {payload}: PayloadAction<string>) => {
            state.bgColor = payload
        },
        setContactTitleColor: (state, {payload}: PayloadAction<string>) => {
            state.titleColor = payload
        },
        setContactTextColor: (state, {payload}: PayloadAction<string>) => {
            state.textColor = payload
        }
    },
})

export const {
    setContactTextColor,
    setContactTitleColor,
    setContactBgColor,
    setContactAddress,
    setContactEmail,
    setContactPhone,
    setContactTitle,
    removeContactMediaIcon,
    setContactMediaIcon,
    setContactMediaUrl,
    setContactMediaTitle,
    removeContactMedia,
    addContactMedia
} = contactPageSlice.actions

export default contactPageSlice.reducer