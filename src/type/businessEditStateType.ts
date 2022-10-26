import {socialMediaValueType} from "./socialEditStateType";

export type BussinesEditStateType ={
    name: string,
    subTitle:string,
    about:string,
    photo:any,
    socialMedia:socialMediaValueType[]
    businessLinks:BusinessLinks[],
    youtubeUrl:string,
    contactPhone:ContactPhone[],
    contactEmail:ContactEmail[],
    bgColor:string,
    bannerBgColor:string,
    textColor:string,
    themeColor:string,
}

export type BusinessLinks = {
    id:string
    title:string,
    url:string,
    icon:any
}

type ContactPhone = {
    id:string,
    phone:string
}

type ContactEmail = {
    id:string,
    email:string
}