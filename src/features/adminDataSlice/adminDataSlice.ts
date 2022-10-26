import {createSlice} from '@reduxjs/toolkit';
import {TransactionState} from "../../type/adminStateType"


const initialState: TransactionState = {
    adminTemplateList: [],
    adminUserList: {list: [], totalCount: 0},
}

export const AdminSlice = createSlice({
    name: 'isTransaction',
    initialState,
    reducers: {

        setAdminUserList: (state, {payload}) => {
            state.adminUserList = payload
        },
        toggleBlock: (state, {payload}) => {
            state.adminUserList.list.map(item => {
                if (item._id === payload.id) {
                    item.isBlocked = payload.isBlocked
                }
                return item
            })
        },
        setAdminTemplateList: (state, {payload}) => {
            state.adminTemplateList = payload
        },
        togglePublish: (state, {payload}) => {
            state.adminTemplateList.map(item => {
                if (item._id === payload.id) {
                    item.published = payload.published
                }
                return item
            })
        },
        removeTemplateList: (state) => {
            state.adminTemplateList = null
        },
        removeAdminTemplate: (state, {payload}) => {
            state.adminTemplateList = state.adminTemplateList.filter(item => item._id !== payload)
        }
    }
})

export const {
    setAdminUserList,
    toggleBlock,
    setAdminTemplateList,
    removeAdminTemplate,
    togglePublish,
    removeTemplateList

} = AdminSlice.actions;

export default AdminSlice.reducer;