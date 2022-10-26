import React from 'react';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import SignUp from "./pages/SingUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Templates from "./pages/Templates/Templates";
import EditTemplate from "./pages/EditTemplate/EditTemplate";
import AddTemplate from "./pages/AddTemplate/AddTemplate";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import "./assets/style/index.scss"
import Contact from "./pages/Contact/Contact";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import UserDashboard from "./pages/UserDashboard/UserDashboard";


const App: React.FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='sign-in' element={<SignIn/>}/>
                    <Route path='sign-up' element={<SignUp/>}/>
                    <Route path='pricing' element={<Pricing/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='admin' element={<AdminDashboard/>}/>
                    <Route path='user' element={<UserDashboard/>}/>
                    <Route path='templates' element={<Templates/>}/>
                    <Route path='templates/add/:path' element={<AddTemplate/>}/>
                    <Route path='templates/add/:path/edit/:id' element={<EditTemplate/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;