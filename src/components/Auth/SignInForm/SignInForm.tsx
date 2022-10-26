import React from 'react';
import "./signinform.scss"
import {
    TextField,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import PasswordInput from "../PasswordInput/PasswordInput";
import FormButton from "../FormButton/FormButton";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/useApp";
import projectApi from "../../../common/apis/projectApi";
import {setToken, setTokenLocalStorage} from "../../../features/userSlice/userSlice";

interface state {
    email: String,
    password: String
}

const SignInForm: React.FC = () => {
    const [value, setValue] = React.useState<state>({
        "email": "",
        "password": "",
    })
    console.log(value)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue({...value, email: e.target.value})
    }
    const navigate = useNavigate()
    const appDispatch = useAppDispatch()
    const signIn = async () => {
        try {
            const {data} = await projectApi.post(`api/auth/signIn`, value)
            appDispatch(setToken(data.data))
            appDispatch(setTokenLocalStorage())
            navigate("/",{replace:true})
        } catch (e) {
            console.log(e, "Error")
        }
    }

    return (
        <div className="sign-in-form">
            <h2 className="form-title">Sign In</h2>
            <TextField
                value={value.email}
                className="sign-in-form-input"
                id="outlined-required"
                label="Email"
                onChange={handleChange}
            />
            <PasswordInput value={value} setValue={setValue}/>
            <FormControlLabel className="sign-in-form-checkbox" control={<Checkbox/>} label="Remember"/>
            <FormButton click={signIn}>Sign in</FormButton>
            <div className="sign-in-link-container">
                <Link className="form-links" to="/">Forgot your password?</Link>
                <Link className="form-links" to="/sign-up">Sign up</Link>
            </div>
        </div>
    );
};


export default SignInForm;