import React from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import SignUpForm from "../../components/Auth/SignUpForm/SignUpForm";
import "./signup.scss"

const SignUp: React.FC = () => {
    return (
        <Wrapper authPage>
            <div className="sign-up">
                <SignUpForm/>
            </div>
        </Wrapper>
    );
};


export default SignUp;