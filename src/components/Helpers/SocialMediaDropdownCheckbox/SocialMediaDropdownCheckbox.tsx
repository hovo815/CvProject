import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from '@mui/material';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/useApp";
import {setSocialMediaChecked} from "../../../features/socialEditPageSlice/socialEditPageSlice";
import AXIOS from "../../../services/axios";

const MenuProps = {
    PaperProps: {
        style: {
            width: 250,
        },
    },
};


const SocialMediaDropdownCheckbox:React.FC = () => {
    const name = useAppSelector(state => state.social.socialMedia);
    const templateId = useAppSelector(state => state.social.template)
    useEffect(()=>{
        AXIOS.get(`api/social`,{ params: { templateId: templateId } }).then(item=>{
            console.log(item,"socials");})
    },[templateId])
    const userName = name.filter(item => item.checked ? item : null)
    const userNameFilter = name.filter(item => item.checked ? item : null).map(item => item.name)
    const appDispatch = useAppDispatch()

    return (
        <>
            <FormControl style={{ marginTop: "25px", width: "100%"}}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={userNameFilter}

                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {name.map((item) => (
                        <MenuItem key={item.name} value={item.name}>
                            <Checkbox
                                color="secondary"
                                onClick={()=>appDispatch(setSocialMediaChecked(item.name))}
                                checked={userName.indexOf(item) > -1}
                            />
                            <ListItemText primary={item.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};


export default SocialMediaDropdownCheckbox;