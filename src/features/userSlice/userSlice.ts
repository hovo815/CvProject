import {createSlice} from '@reduxjs/toolkit'
import {Storage} from '../../services/storage'
import {UserSliceType} from "../../type/userSliceType";



const initialState:UserSliceType = {
   token:"",
    user:null
}

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {

        setToken: (state,{payload}) => {
            state.token = payload
        },
        setTokenLocalStorage: (state) =>{
            Storage.setDataInLocalStorage("authToken", state.token);
        },
        setUser: (state, {payload}) =>{
            state.user = payload
        },
        unSetUser: (state ) => {
            state.token = null;
            state.user = null;
        }
      }
})

export const {
    setToken,
    setTokenLocalStorage,
    setUser,
    unSetUser,

} = userSlice.actions

export default userSlice.reducer