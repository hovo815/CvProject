import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CreatedTemplates from './CreatedTemplate/CreatedTemplate';
import Plans from './Plans/Plans';
import Orders from './Orders/Orders';
import Arrow from "../../../assets/img/modal/arrow.svg";
import ArrowButton from "../../../assets/img/modal/arrow-button.svg";
import "./custommodal.scss";


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

interface Props {
    id:string
}

const CustomModal: React.FC<Props> = ({id}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [ToggleState, setToggleState] = React.useState(1)


    const tabs = (page:number) => {
        setToggleState(page)
    }
    return (
        <div>
            <Button onClick={handleOpen}><img src={ArrowButton} alt="Arrow Button"/></Button>
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

                        <div>
                            <button className='arrow' onClick={handleClose}><img src={Arrow} alt="arrow"/></button>
                        </div>
                        <div className='created-templates-container'>
                            <div>
                                <div className={ToggleState === 1 ? "created-templates-container-active" : "created-templates-container-button"} onClick={() => tabs(1)}>Created Templates</div>
                            </div>
                            <div>
                                <div className={ToggleState === 2 ? "created-templates-container-active" : "created-templates-container-button"} onClick={() => tabs(2)}>Orders</div>
                            </div>
                            <div>
                                <div className={ToggleState === 3 ? "created-templates-container-active" : "created-templates-container-button"} onClick={() => tabs(3)}>Plans</div>
                            </div>
                        </div>
                        {ToggleState === 1 ? <CreatedTemplates id={id}/> : null}
                        {ToggleState === 2 ? <Orders /> : null}
                        {ToggleState === 3 ? <Plans /> : null}
                    </Box>
                </Fade>
            </Modal>

        </div>
    );
}

export default CustomModal