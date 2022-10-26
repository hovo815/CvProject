
export type TransactionState = {
    adminUserList: UserList,
    adminTemplateList:Array<TemplateList>
}
type UserList = {
    list:Array<List>
    totalCount:number
}
type List = {
    createdDt: string
    email: string
    fullName: string
    isBlocked: boolean
    phoneNumber?:number
    _id:string
}
type TemplateList = {
    createdDt:string,
    name:string,
    planName:string,
    published:boolean,
    url:string,
    user:string,
    __v:number
    _id:string
}
