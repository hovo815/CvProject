export type UserDashboardSlice = {
    userDashboard: boolean,
    userTemplates: Array<UserTemplates>
}
type UserTemplates = {
    about: any
    main: any
    template: Templates
}

export type Templates = {
    createdDt: string;
    name: string;
    planName: string;
    published: boolean
    url: string;
    user: string;
    __v: number
    _id:  string;

}