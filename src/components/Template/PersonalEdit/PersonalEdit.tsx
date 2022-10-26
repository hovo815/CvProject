import React, {memo} from 'react';
import Header from "../../Wrapper/Header/Header";
import "./personaledit.scss"
import ViewBar from "../../Helpers/ViewBar/ViewBar";
import Main from "./Main/Main";
import Contact from "./Contact/Contact";
import Work from "./Work/Work";
import About from "./About/About";
import {useAppSelector} from "../../../hooks/useApp";



const PersonalEdit: React.FC = memo(() => {
    const [edit, setEdit] = React.useState(true)
    const page = useAppSelector(state => state.page.page)

    const PageDisplay = () => {
        if (page === 0) {
            return <Main  edit={edit}/>
        } else if (page === 1) {
            return <Work edit={edit}/>
        } else if (page === 2) {
            return <About edit={edit}/>
        } else {
            return <Contact edit={edit}/>
        }
    }


    return (
        <>
            <Header/>
            <ViewBar setEdit={setEdit}/>
            <div>{PageDisplay()}</div>
        </>
    );
});


export default PersonalEdit;