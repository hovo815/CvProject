import { configureStore } from '@reduxjs/toolkit'

import pageReducer from "./pageSlice/pageSlice"
import mainPageReducer from "./personalEditPageSlice/mainPageSlice/mainPageSlice";
import aboutPageReducer from "./personalEditPageSlice/aboutPageSlice/aboutPageSlice";
import workPageReducer from "./personalEditPageSlice/workPageSlice/workPageSlice";
import contactPageReducer from "./personalEditPageSlice/contactPageSlice/contactPageSlice";
import socialEditPageReducer from "./socialEditPageSlice/socialEditPageSlice";
import businessEditPageReducer from "./businessEditPageSlice/businessEditPageSlice";
import userReducer from "./userSlice/userSlice"
import adminDataReducer from "./adminDataSlice/adminDataSlice";
import userDashboardReducer from "./userDashboardSlice/userDashboardSlice";

const store = configureStore({
    reducer: {
        user:userReducer,
        page:pageReducer,
        mainState:mainPageReducer,
        aboutState:aboutPageReducer,
        workState:workPageReducer,
        contactState:contactPageReducer,
        social:socialEditPageReducer,
        business:businessEditPageReducer,
        admin:adminDataReducer,
        userDashboard:userDashboardReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})



export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch