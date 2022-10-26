import React from 'react';
import Header from "../../Wrapper/Header/Header";
import ViewBar from "../../Helpers/ViewBar/ViewBar";
import Main from "./Main/Main";


const Business:React.FC = () => {
    const [edit,setEdit] = React.useState(true)
    return (
        <>
            <Header/>
            <ViewBar setEdit={setEdit}/>
            <Main edit={edit}/>
        </>
    );
};


export default Business;