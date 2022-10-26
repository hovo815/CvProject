import React, {useState} from 'react';
import DeleteButtonIcon from "../../../../../assets/img/modal/delete-button-icon.svg";
import AXIOS from "../../../../../services/axios";
import {useAppDispatch} from "../../../../../hooks/useApp";
import "./deletetemplate.scss"
import {Backdrop, Box, Fade, Modal} from "@mui/material";
import {removeAdminTemplate} from "../../../../../features/adminDataSlice/adminDataSlice";

interface Props {
    id:string,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '68%',
    left: '69%',
    transform: 'translate(-50%, -50%)',
    width: 1288,
    height: 1025,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

const DeleteTemplate:React.FC<Props> = ({id}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useAppDispatch()

    const setAdminUser = async () => {
        try {
            await AXIOS.delete(`api/admin/user/template/${id}`)
            dispatch(removeAdminTemplate(id))
            handleClose()
        }
        catch (e) {
            console.log(e, "Error");
        }
    }
    return (
        <div>
            <button className='basic-tooltip-button' onClick={handleOpen}>
                <img src={DeleteButtonIcon} alt="delete button"/>
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className='template-delete'>
                            <div className='template-delete-container'>
                                <div>
                                    <div><h1 className='template-delete-container-h1'>Are you sure you want to delete?</h1></div>
                                    <div className='template-delete-container-content'>
                                        <button className='template-delete-container-content-button' onClick={handleClose}>No</button>
                                        <button className='template-delete-container-content-button' onClick={setAdminUser}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};


export default DeleteTemplate;