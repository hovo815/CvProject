import React from 'react';
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {SignInFormValueType, SingUpFormValueType} from "../../../type/formValueType";
import "./passwordinput.scss"

interface State {
    showPassword: boolean;
}

interface PasswordInput {
    value: SingUpFormValueType | SignInFormValueType,
    setValue: any,
}


const PasswordInput: React.FC<PasswordInput> = ({value, setValue}) => {
    const [values, setValues] = React.useState<State>({
        showPassword: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...value, password: e.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            showPassword: !values.showPassword,
        });
    };

    return (
        <>
            <FormControl className="sign-in-form-input" variant="outlined">
                <InputLabel htmlFor='outlined-adornment'>Password</InputLabel>
                <OutlinedInput
                    className="password-input"
                    id="outlined-adornment"
                    type={values.showPassword ? 'text' : 'password'}
                    value={value.password}
                    onChange={handleChange}
                    label="Password"
                    sx={{
                        "& label": {
                            color: "#fff"
                        }
                    }}
                    endAdornment={

                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}

                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }

                />
            </FormControl>

        </>
    );
};


export default PasswordInput;