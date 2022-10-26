import React, {ChangeEvent, memo} from 'react';
import "./colorpicker.scss"
import Fill from "../../../assets/img/icons/fill.svg"
import Brush from "../../../assets/img/icons/brush.svg"
import {useAppDispatch} from "../../../hooks/useApp";

interface ColorPickerProps{
    fill?:boolean,
    Text?:string,
    singleColor:any,
    setColor:any,

}

const ColorPicker:React.FC<ColorPickerProps> = memo(({fill,Text,setColor,singleColor}) => {
    const appDispatch = useAppDispatch()
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        appDispatch(setColor(e.target.value))
    }
    return (
        <>
            <div className="color-picker-container">
                <img src={fill ? Fill : Brush} alt="input icon"/>
                <p className="color-picker-text">{Text}</p>
                <input  value={singleColor} onChange={handleChange} className="color-picker-input" type="color"/>
            </div>
        </>
    );
});


export default ColorPicker;