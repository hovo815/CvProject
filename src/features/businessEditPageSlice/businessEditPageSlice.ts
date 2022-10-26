import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import _ from "lodash/fp";
import {BussinesEditStateType} from "../../type/businessEditStateType";

const initialState: BussinesEditStateType = {
    name: "Ray Charles",
    subTitle: "Owener, Stratesist + Educator at Three Sixty Media |  Tacctical Program",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. " +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: null ,
    socialMedia:[
        {name:"Instagram", checked:true, url:"",userName:"https://www.instagram.com/",icon:null},
        {name:"Youtube", checked:false, url:"",userName:"https://youtube.com/c/",icon:null},
        {name:"Facebook", checked:false, url:"",userName:"https://www.facebook.com/",icon:null},
        {name:"Twitter", checked:false, url:"",userName:"https://twitter.com/",icon:null},
        {name:"Tiktok", checked:false, url:"",userName:"https://tiktok.com/@",icon:null},
        {name:"Snapchat", checked:false, url:"",userName:"https://snapchat.com/add/",icon:null},
        {name:"Pinterest", checked:false, url:"",userName:"https://www.pinterest.com/",icon:null},
        {name:"Twitch", checked:false, url:"",userName:"https://www.twitch.tv/",icon:null},
        {name:"Github", checked:false, url:"",userName:"https://github.com/",icon:null},
        {name:"Linkedin", checked:false, url:"",userName:"https://www.linkedin.com/in/",icon:null},
        {name:"Reddit", checked:false, url:"",userName:"https://www.reddit.com/user/",icon:null},
    ],
    businessLinks: [
        {id: _.uniqueId("id"), title: "lorem ipsum dolor sit amet", url: "", icon:null},
        {id: _.uniqueId("id"), title: "lorem ipsum dolor sit amet", url: "", icon:null},
        {id: _.uniqueId("id"), title: "lorem ipsum dolor sit amet", url: "", icon:null}
    ],
    youtubeUrl: null,
    contactPhone: [
        {id: _.uniqueId("id"), phone: "+ 90 543- 779 94 6 "}
    ],
    contactEmail: [
        {id: _.uniqueId("id"), email: "info@gmail.com "}
    ],
    bgColor: "#1B1D23",
    bannerBgColor: "#25272D",
    textColor: "#FFFFFF",
    themeColor: "",
}

export const businessEditPageSlice = createSlice({
    initialState,
    name: 'main-page',
    reducers: {
        setMainName: (state, {payload}: PayloadAction<string>) => {
            state.name = payload
        },
        setMainSubTitle: (state, {payload}: PayloadAction<string>) => {
            state.subTitle = payload
        },
        setMainAbout: (state, {payload}: PayloadAction<string>) => {
            state.about = payload
        },
        setMainPhoto: (state, {payload}: PayloadAction<string>) => {
            state.photo = payload
        },
        setMainYoutubeUrl: (state, {payload}: PayloadAction<string>) => {
            state.youtubeUrl = payload
        },
        addBusinessLinks: (state) => {
            state.businessLinks.push({id: _.uniqueId("id"), title: "", url: "", icon: null})
        },
        removeBusinessLinks: (state, {payload}) => {
            state.businessLinks = state.businessLinks.filter(item => item.id !== payload)
        },
        setBusinessLinksTitle: (state, {payload}) => {
            state.businessLinks.map(item => {
                if (item.id === payload.id) {
                    item.title = payload.title
                }
                return  item.title
            })
        },
        setBusinessLinksUrl: (state, {payload}) => {
            state.businessLinks.map(item => {
                if (item.id === payload.id) {
                    item.url = payload.url
                }
                return item.url
            })
        },
        setBusinessLinksIcon: (state, {payload}) => {
            state.businessLinks.map(item => {
                if (item.id === payload.id) {
                     item.icon = payload.icon
                }
                return  item.icon
            })
        },
        removeBusinessLinkIcon: (state, {payload}) => {
            state.businessLinks.map(item => {
                if(item.id === payload.id){
                      item.icon = null
                }
                return item.icon
            })
        },
        addContactPhone: (state) => {
            state.contactPhone.push({id: _.uniqueId("id"), phone: ""})
        },
        removeContactPhone: (state, {payload}) => {
            state.contactPhone = state.contactPhone.filter(item => item.id !== payload)
        },
        setContactPhone: (state, {payload}) => {
            state.contactPhone.map(item => {
                if (item.id === payload.id) {
                    item.phone = payload.phone
                }
                return item.phone
            })
        },
        addContactEmail: (state) => {
            state.contactEmail.push({id: _.uniqueId("id"), email: ""})
        },
        removeContactEmail: (state, {payload}) => {
            state.contactEmail = state.contactEmail.filter(item => item.id !== payload)
        },
        setContactEmail: (state, {payload}) => {
            state.contactEmail.map(item => {
                if (item.id === payload.id) {
                    item.email = payload.email
                }
                return item.email
            })
        },
        setMainBgColor: (state, {payload}) => {
            state.bgColor = payload
        },
        setMainBannerBgColor: (state, {payload}) => {
            state.bannerBgColor = payload
        },
        setMainTextColor: (state, {payload}) => {
            state.textColor = payload
        },
        setMainThemeColor: (state, {payload}) => {
            state.themeColor = payload
        },
    }
})

export const {
    setMainName,
    setMainSubTitle,
    setMainAbout,
    setMainPhoto,
    setMainYoutubeUrl,
    addBusinessLinks,
    removeBusinessLinks,
    setBusinessLinksTitle,
    setBusinessLinksUrl,
    setBusinessLinksIcon,
    removeBusinessLinkIcon,
    addContactPhone,
    removeContactPhone,
    setContactPhone,
    addContactEmail,
    removeContactEmail,
    setContactEmail,
    setMainBgColor,
    setMainBannerBgColor,
    setMainTextColor,
    setMainThemeColor
} = businessEditPageSlice.actions

export default businessEditPageSlice.reducer