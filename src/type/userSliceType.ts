export  type UserSliceType = {
    token: string,
    user: UserDetails
}
type UserDetails = {
    createdDt: string
    email: string
    fullName: string
    isBlocked: boolean
    logoutDt?: string
    password: string
    role :string
    __v: number
    _id: string
}