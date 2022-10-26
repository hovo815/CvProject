import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {socialEditStateType} from "../../type/socialEditStateType";

const initialState: socialEditStateType = {
    template:"",
    title: "Hy! I Am",
    name: "Cathy Pearl",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    photo: null,
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
    bgColor: "#201C43",
    textColor: "#FFFFFF",
    nameColor: "#ECFF9E",
    borderColor: "#191937;",

}

export const socialEditPageSlice = createSlice({
    name: 'social-page',
    initialState,
    reducers: {
        setSocialTemplate: (state, {payload}: PayloadAction<string>) => {
            state.template = payload
        },
        setSocialTitle: (state, {payload}: PayloadAction<string>) => {
            state.title = payload
        },
        setSocialName: (state, {payload}: PayloadAction<string>) => {
            state.name = payload
        },
        setSocialMediaChecked: (state, {payload}) =>{

          state.socialMedia.map(item=>{
            if(item.name === payload) item.checked = !item.checked
              return item.checked
          })
        },

        socialMediaUrlChange:(state,{payload}) => {
          state.socialMedia.map(item => {
              if(item.name === payload.name){
                  return item.url = payload.url
              }
              return item.userName
          })
        },

        socialMediaIconChange:(state,{payload}) => {
            state.socialMedia.map(item => {
                if(item.name === payload.name){
                    return item.icon = payload.icon
                }
                return item.icon
            })
        },
        socialMediaIconRemove:(state, {payload}) => {
            state.socialMedia.map(item => {
                if(item.name === payload.name){
                    return item.icon = null
                }
                return item.icon
            })
        },
        setSocialDescription: (state, {payload}: PayloadAction<string>) => {
            state.description = payload
        },
        setSocialPhoto: (state, {payload}: PayloadAction<string>) => {
            state.photo = payload
        },
       setSocialBgColor: (state, {payload}: PayloadAction<string>) => {
            state.bgColor = payload
        },
        setSocialTextColor: (state, {payload}: PayloadAction<string>) => {
            state.textColor = payload
        },
        setSocialNameColor: (state, {payload}: PayloadAction<string>) => {
            state.nameColor = payload
        },
        setSocialBorderColor: (state, {payload}: PayloadAction<string>) => {
            state.borderColor = payload
        }
    },
})

export const {
    setSocialTitle,
    setSocialName,
    setSocialDescription,
    setSocialPhoto,
    setSocialBgColor,
    setSocialTextColor,
    setSocialNameColor,
    setSocialBorderColor,
    socialMediaUrlChange,
    setSocialTemplate,
    socialMediaIconChange,
    socialMediaIconRemove,
    setSocialMediaChecked
} = socialEditPageSlice.actions

export default socialEditPageSlice.reducer