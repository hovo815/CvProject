import React from 'react';
import "./changepasswordmui.scss";
import AXIOS from "../../../../services/axios";


const ChangePasswordMui = () => {
    const [value, setValue] = React.useState({
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        }
    )
    const [error, setError] = React.useState({
        error: false,
        message: ""
    })
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let name = e.currentTarget.name
        setValue({...value, [name]: e.currentTarget.value})
    }
    const ChangePasswordSubmit = async () => {
        if (value.newPassword === value.confirmNewPassword) {
            setError({
                error: false,
                message: ""
            })
            try {
                await AXIOS.post(`api/user/changePassword`, {
                    oldPassword: value.oldPassword,
                    newPassword: value.newPassword
                }).then(item => {
                    console.log(item);
                })
            } catch (e) {
                setError({
                    error: true,
                    message: "wrong old password or new"
                })
                console.log(e, "error");
            }
        } else {
            setError({
                error: true,
                message: "incorrect confirm password value"
            })
        }
    }

    console.log(error)
    return (
        <div className='change-password-mui-container'>
            {error.error ? <p>{error.message}</p> : null}
            <input
                value={value.oldPassword}
                onChange={handleChange}
                id="outlined-multiline-static"
                placeholder="Current password"
                className="change-password-mui-container-password"
                name="oldPassword"
            />
            <input
                value={value.newPassword}
                onChange={handleChange}
                id="outlined-multiline-static"
                placeholder="New password"
                className="change-password-mui-container-password"
                name="newPassword"
            />
            <input
                value={value.confirmNewPassword}
                onChange={handleChange}
                id="outlined-multiline-static"
                placeholder="Confirm new password"
                className="change-password-mui-container-password"
                name="confirmNewPassword"
            />
            <div className='change-password-mui-button-container'>
                <button onClick={ChangePasswordSubmit} className="change-password-mui-button-container-button">Save
                </button>
            </div>
        </div>

    );
}
export default ChangePasswordMui;