import { createSlice } from '@reduxjs/toolkit'

export interface PageState {
    page: number
}

const initialState: PageState = {
    page: 0,
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        pageOne: (state) => {
            state.page = 0
        },
        pageTwo: (state) => {
            state.page = 1
        },
        pageTree: (state) => {
            state.page = 2
        },
        pageFour: (state) => {
            state.page = 3
        }
    },
})

export const {pageOne,pageTwo,pageTree,pageFour} = pageSlice.actions

export default pageSlice.reducer