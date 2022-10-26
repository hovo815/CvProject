export type socialEditStateType = {
    template:string,
    title: string,
    name: string,
    description: string,
    photo: any,
    socialMedia:socialMediaValueType[]
    bgColor:string,
    textColor:string,
    nameColor:string,
    borderColor:string,
}
export type socialMediaValueType = {
    name:string,
    checked:boolean,
    userName:string,
    url:string,
    icon:any

}
