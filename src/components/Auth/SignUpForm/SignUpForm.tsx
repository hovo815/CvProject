import React from 'react';
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import PasswordInput from "../PasswordInput/PasswordInput";
import "./signupform.scss"
import FormButton from "../FormButton/FormButton";
import {Link, useNavigate} from "react-router-dom";
import projectApi from "../../../common/apis/projectApi";
import {setToken, setTokenLocalStorage} from "../../../features/userSlice/userSlice";
import {useAppDispatch} from "../../../hooks/useApp";
import AXIOS from "../../../services/axios";

interface State {
    fullName: String,
    email: String,
    password: String,
}

const SignUpForm: React.FC = () => {
    const [value, setValues] = React.useState<State>({
        fullName: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const appDispatch = useAppDispatch()
    const handleChange = (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...value, [prop]: e.target.value});
    }
    const handleClick = async () => {
        try {
            const {data} = await AXIOS.post(`api/auth/signUp`, value)
            console.log(data)
            appDispatch(setToken(data))
            appDispatch(setTokenLocalStorage())
            navigate("/",{replace:true})
        } catch (e) {
            console.log(e, "Error")
        }
    }
    return (
        <div className="sign-up-form">
            <h2 className="form-title">Sign Up</h2>
            <TextField
                value={value.fullName}
                id="outlined-required"
                label="Full Name"

                onChange={handleChange("fullName")}
                className="sign-up-form-input"
            />
            <TextField
                value={value.email}
                id="outlined-required"
                label="Email"

                onChange={handleChange("email")}
                className="sign-up-form-input"
            />
            <PasswordInput value={value} setValue={setValues}/>

            <FormControlLabel className="sign-in-form-checkbox" control={<Checkbox/>} label="I agree to the Terms of Service and Privacy Policy"/>
            <FormButton click={handleClick}>Sign up</FormButton>
            <div className="sign-up-link-container">
                <Link className="sign-up-form-links" to="/sign-in">Sign In</Link>
            </div>
        </div>
    );
};


export default SignUpForm;