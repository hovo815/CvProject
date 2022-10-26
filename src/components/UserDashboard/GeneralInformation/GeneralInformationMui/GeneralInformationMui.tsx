import React from 'react';
import "./generalinformationmui.scss";
import AXIOS from "../../../../services/axios";


const GeneralInformationMui = () =>{
    const [value, setValue] = React.useState({
        fullName:""
    })

    const handleUserNameChange = (e: React.FormEvent<HTMLInputElement>) => {
      setValue({
          fullName: e.currentTarget.value
      })
    }
    const handleSubmitUserNameChane = async () => {
      try {
        await AXIOS.put(`api/user/updateDetail`,value).then(item => {
            console.log(item, "user name change");
        })
      }
      catch (e) {
          console.log(e, "user name change error");
      }
    }

    return (
        <div className='general-information-mui'>
            <input
                onChange={handleUserNameChange}
                placeholder="Name"
                className="general-information-mui-main-input"
            />
            <div className='general-information-mui-main-input-button-container'>
                <button onClick={handleSubmitUserNameChane} className="general-information-mui-main-input-button-container-save">Save</button>
            </div>
        </div>

    );
}


export default GeneralInformationMui