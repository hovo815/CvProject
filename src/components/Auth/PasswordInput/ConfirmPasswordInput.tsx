import React from 'react';
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {SingUpFormValueType} from "../../../type/formValueType";
import "./passwordinput.scss"

interface State {
    showPassword: boolean;
}

interface ConfirmPasswordInput {
    value: SingUpFormValueType,
    setValue: any,
}


const ConfirmPasswordInput: React.FC<ConfirmPasswordInput> = ({value, setValue}) => {
    const [values, setValues] = React.useState<State>({
        showPassword: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...value, confirmPassword: e.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            showPassword: !values.showPassword,
        });
    };

    return (
        <>
            <FormControl className="sign-in-form-input" variant="outlined">
                <InputLabel htmlFor='outlined-adornment'>Confirm Password</InputLabel>
                <OutlinedInput
                    className="password-input"
                    id="outlined-adornment"
                    type={values.showPassword ? 'text' : 'password'}
                    value={value.confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
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


export default ConfirmPasswordInput;