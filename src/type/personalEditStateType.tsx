import {BusinessLinks} from "./businessEditStateType";

export type MainPageState = {
    template: string;
    name: string;
    profession: string;
    description: string;
    tags: [string, string, string];
    interests: Array<Interest>;
    photo: any;
    backgroundColor: string;
    titleColor: string;
    textColor: string;
}
export type Interest = {
    id:string;
    interest:string;
}
export type AboutPageState = {
    template: string;
    title: string;
    description: string;
    photo: any;
    backgroundColor: string;
    titleColor: string;
    textColor: string;
}
export type ContactPageState = {
    template: string,
    title: string,
    phone: string,
    email: string,
    address: string,
    contactMedia:BusinessLinks[],
    bgColor: string,
    titleColor: string,
    textColor: string
}
export type WorkPageState = {
    template: string,
    experiences: Array<Experiences>,
    backgroundColor: string,
    titleColor: string,
    dateColor: string,
    textColor: string
}

export type Experiences = {
    id: string,
    position: string,
    startDate: any,
    endDate: any,
    description: Array<Description>
}
export type Description = {
    id: string,
    text: string
}