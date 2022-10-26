import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {WorkPageState} from "../../../type/personalEditStateType";
import _ from "lodash";


const initialState: WorkPageState = {
    template: "",
    experiences: [
        {
            id: _.uniqueId("id"),
            position: "Product Manager",
            startDate:"",
            endDate: "",
            description: [
                {id: _.uniqueId("id"), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {id: _.uniqueId("id"), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {id: _.uniqueId("id"), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
            ]
        },
        {
            id: _.uniqueId("id"),
            position: "Product Manager",
            startDate:"",
            endDate: "",
            description: [
                {id: _.uniqueId("id"), text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
            ]
        },
    ],
    backgroundColor: "#fff",
    titleColor: "#33123",
    dateColor: "#332E68",
    textColor: "#191937",
}

export const workPageSlice = createSlice({
    name: 'work-page',
    initialState,
    reducers: {
        setWorkTemplate: (state, {payload}: PayloadAction<string>) => {
            state.template = payload
        },

        addWorkExperiences: (state) => {
            state.experiences.push({
                id: _.uniqueId("id"),
                position: "",
                startDate: "",
                endDate: "",
                description: [{id: _.uniqueId("id"), text: ""},]
            },)
        },
        removeWorkExperiences: (state, {payload}) => {
            state.experiences.filter(item => item.id !== payload.id)
        },
        setWorkPosition: (state, {payload}) => {
            state.experiences.map(item => {
                if (item.id === payload.id) {
                    item.position = payload.position
                }
                return item
            })
        },
        setWorkStartDate: (state, {payload}) => {
            state.experiences.map(item => {
                if (item.id === payload.id) {
                    item.startDate = payload.startDate
                }
                return item
            })
        },
        setWorkEndDate: (state, {payload}) => {
            state.experiences.map(item => {
                if (item.id === payload.id) {
                    item.endDate = payload.endDate
                }
                return item

            })
        },
        addExperienceDescription: (state, {payload}) => {
            state.experiences.map(item => {
                if (item.id === payload) {
                    item.description.push({id: _.uniqueId("id"), text: ""})
                }
                return item
            })
        },
        setExperienceDescription: (state, {payload}) => {
            state.experiences.map(item => {
                if (item.id === payload.id) {
                    item.description.map(item => {
                        if (item.id === payload.descriptionId) {
                            item.text = payload.text
                        }
                        return item
                    })
                }
                return item
            })
        },
        removeExperienceDescription: (state, {payload}) => {
            state.experiences.map(item => {
                if (item.id === payload.id) {
                    item.description = item.description.filter(description => description.id !== payload.descriptionId)
                }
                return item
            })
        },
        setWorkBgColor: (state, {payload}: PayloadAction<string>) => {
            state.backgroundColor = payload
        },
        setWorkTitleColor: (state, {payload}: PayloadAction<string>) => {
            state.titleColor = payload
        },
        setWorkDateColor: (state, {payload}: PayloadAction<string>) => {
            state.dateColor = payload
        },
        setWorkTextColor: (state, {payload}: PayloadAction<string>) => {
            state.textColor = payload
        }
    }
})

export const {
    setWorkTemplate,
    addWorkExperiences,
    setWorkPosition,
    setWorkStartDate,
    setWorkEndDate,
    addExperienceDescription,
    setExperienceDescription,
    removeExperienceDescription,
    setWorkBgColor,
    setWorkTitleColor,
    setWorkDateColor,
    setWorkTextColor,
} = workPageSlice.actions

export default workPageSlice.reducer