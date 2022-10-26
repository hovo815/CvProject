import React from 'react';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import {useAppDispatch} from "../../../hooks/useApp";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment/moment";

interface DatePickerProps {
    id:string
    value: any,
    setValue: any,
    text:any,
    name:string
    className?:string
}

const WorkDatePicker: React.FC<DatePickerProps> = ({value, setValue, text,id,name,className}) => {

    const appDispatch = useAppDispatch()


    return (
        <>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    className={className}
                    label={text}
                    value={value}
                    onChange={(newValue:any) => {
                        let editDate =  newValue._d
                    appDispatch(setValue({id:id , [name]:editDate}));
                }}
                    renderInput={(params:any) => (

                    <TextField {...params} helperText={params?.inputProps?.placeholder} />
                )}
                    />

            </LocalizationProvider>
        </>
    );
};


export default WorkDatePicker;