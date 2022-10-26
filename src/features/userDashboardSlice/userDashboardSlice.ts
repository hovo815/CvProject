import { createSlice } from '@reduxjs/toolkit';
import {UserDashboardSlice} from "../../type/userDashboardSliceTypes";

const initialState: UserDashboardSlice = {
    userDashboard:true,
    userTemplates:[]
}

export const userDashboard = createSlice({
    name: 'isTransaction',
    initialState,
    reducers: {
        userDashboardChange: (state, {payload}) => {
            state.userDashboard = payload
        },
        setUserTemplates:(state, {payload}) => {
            state.userTemplates = payload
        },
        userRemoveTemplate: (state,{payload}) => {
            state.userTemplates = state.userTemplates.filter(item => item.template._id !== payload)
        },
        togglePublished: (state, {payload}) => {
            state.userTemplates.map( item => {
                if(item.template._id === payload.id){
                    item.template.published = payload.published
                }
                return item
                }
            )

        }
    }
})

export const {
    userDashboardChange,
    setUserTemplates,
    userRemoveTemplate,
    togglePublished
} = userDashboard.actions;
export default userDashboard.reducer;