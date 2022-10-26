import React, {FC, useEffect} from 'react';
import AuthPageHeader from "./AuthPageHeader/AuthPageHeader";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Vector from "../../assets/img/Vector.png"
import "./wrapper.scss"
import AXIOS from "../../services/axios";
import {useAppDispatch} from "../../hooks/useApp";
import {setUser} from "../../features/userSlice/userSlice";

interface WrapperProps {
    children?: React.ReactNode,
    authPage?: Boolean
}

const Wrapper: FC<WrapperProps> = ({children, authPage}) => {
    const appDispatch = useAppDispatch()
    useEffect(()=>{
        AXIOS.get(`api/user/detail`)
            .then(item => {
                console.log(item,"detail")
                appDispatch(setUser(item.data))
            })

    },[appDispatch])
    return (
        <div className="wrapper">
            <img className="vector-image-home" src={Vector} alt="vector"/>
            {authPage ? <AuthPageHeader/>: <Header/>}
            {children}
            <Footer/>
        </div>
    );
};


export default Wrapper;