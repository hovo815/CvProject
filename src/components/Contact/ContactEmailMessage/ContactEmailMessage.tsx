import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import "./contactemailmessage.scss";
import AXIOS from "../../../services/axios";

interface State {
    email:string
    message:string
}

const ContactEmailMessage = () => {
    const [value,setValue] = React.useState<State>({
        email:"",
        message:""
    })
    const handleChange = (e:any) => {
        let name = e.currentTarget.name
        setValue({...value, [name]: e.target.value});
    }
    const handleSubmit = async () => {
      try {
          await AXIOS.post(`api/mail`,value)
              .then(item =>{
                  console.log(item,"item log");
              }
          )
      }
      catch (e){
          console.log(e,"contact error");
      }
    }
    return (
        <div className='email'>
            <Stack spacing={3} sx={{ width:600,}}>
                <TextField
                    id="outlined-multiline-static"
                    label="Email"
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    multiline
                    rows={1}
                    className="email-contact-main-input"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    name="message"
                    value={value.message}
                    onChange={handleChange}
                    multiline
                    rows={5}
                    className="email-contact-main-input-message"
                />
                <div className='email-contact-main-button-container'>
                    <button onClick={handleSubmit} className="email-contact-main-button-container-button">Send Message</button>
                </div>
            </Stack>
        </div>

    );
}
export default ContactEmailMessage;

