import React from "react";
import Activated from "../Activated/Activated";
import "./removeaccount.scss";
import AXIOS from "../../../services/axios";

interface State {
    password:string
}

const RemoveAccount: React.FC = () => {
    const [value,setValue] = React.useState<State>({password:""})

    const handleChange = (e:React.FormEvent<HTMLInputElement>) =>  {
      setValue({password:e.currentTarget.value})
    }
    const submitDeleteAccount = async () => {
      try {
          await  AXIOS.delete(`api/user`, {data:value}).then(item => {
              console.log(item, "account delete");
          })
      }
      catch (e){
          console.log(e,"delete Account error");
      }
    }
    return (
        <>
            <div className="remove-account">
                    <Activated title1="Premium plan" title2=""/>
                    <div className="remove-account-content">
                        <div className="remove-account-content-delete" >
                            <h3 className="remove-account-content-delete-h3">Are you sure you want to remove test@gmail.com account?</h3>
                            <div className="remove-account-content-delete-block">
                                    <input
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={value.password}
                                        className="remove-account-content-delete-block-input"
                                    />
                                <button onClick={submitDeleteAccount} className="remove-account-content-delete-block-button">Submit</button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default RemoveAccount;