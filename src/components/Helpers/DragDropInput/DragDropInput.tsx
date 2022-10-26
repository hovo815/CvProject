import React, {memo} from 'react';
import "./dragdropinput.scss"
import toFormData from 'object-to-formdata';
import InputPhotoIcon from "../../../assets/img/icons/inputphotoicon.svg"
import {useAppDispatch} from "../../../hooks/useApp";
import AXIOS from "../../../services/axios";

interface DragDropInputProps {
    setValue: any
    circle?: boolean
}

const DragDropInput: React.FC<DragDropInputProps> = memo(({setValue, circle}) => {

    const appDispatch = useAppDispatch()

    const handleChange = async (e: any) => {
        if (e.target.files.length !== 0) {
            const upload = e.target.files[0]
            appDispatch(setValue(URL.createObjectURL(upload)))
            try {

                const {data} = await AXIOS.post(`api/upload`,toFormData.serialize( {
                        file: upload,
                    }, { indices: true })
                )

                appDispatch(setValue(`https://iw3800.herokuapp.com/${data}`))
            }
            catch (e){
                console.log(e)
            }


        }
    }
    return (
        <>
            <label htmlFor="file-input-label" className={`drag-drop-area ${circle ? "circle" : ""}`}>
                <img src={InputPhotoIcon} alt={InputPhotoIcon}/>
            </label>
            <input type="file" id='file-input-label' onChange={handleChange}/>

        </>
    );
});


export default DragDropInput;