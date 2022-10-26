import React from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import SignInForm from "../../components/Auth/SignInForm/SignInForm";
import "./signin.scss"

const SignIn: React.FC = () => {
    return (
        <Wrapper authPage>
            <div className="sign-in">
                <SignInForm/>
            </div>
        </Wrapper>
    );
};


export default SignIn;