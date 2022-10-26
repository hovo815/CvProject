import React  from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {Templates} from "../../../../type/userDashboardSliceTypes";
import VectorCopy from "../../../../assets/img/userdashboard/vector-copy.svg";
import VectorRename from "../../../../assets/img/userdashboard/vector-rename.svg";
import VectorDelete from "../../../../assets/img/userdashboard/vector-delete.svg";
import Publish from "../../../../assets/img/admin/publish.svg";
import UnPublish from "../../../../assets/img/admin/un-publish.svg";
import "./createcvcard.scss";
import AXIOS from "../../../../services/axios";
import {useAppDispatch} from "../../../../hooks/useApp";
import {togglePublished, userRemoveTemplate} from "../../../../features/userDashboardSlice/userDashboardSlice";
import {useNavigate} from "react-router-dom";

interface Props {
    data: Templates
}

const style = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 631,
    height: 151,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

const CreateCvCard: React.FC<Props> = ({data}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()
    const appDispatch = useAppDispatch()


    const handleDelete = () => {
        try {
            AXIOS.delete(`api/templates/${data._id}`).then(item => {
                    console.log(item);
                }
            )
            appDispatch(userRemoveTemplate(data._id))
        }
        catch (e) {
            console.log(e, "template delete error");
        }
    }
    let publish = data.published ? "unpublish" : "publish"
    const handlePublish = () => {
        try {
            AXIOS.patch(`api/templates/${data._id}/${publish}`).then(item => {
                console.log(item, "publish succes");
            })
            appDispatch(togglePublished({id:data._id, published: !data.published}))

        }
        catch (e) {
            console.log(e, "publish error");
        }
       }
       const templateEdit = () => {
        navigate(`/templates/add/${data.planName}/edit/${data._id}`)
    }
    console.log(publish);
    console.log(data);
    return (
        <>
            <div className="user-cv">
                <div className="user-cv-card">
                    <div className="user-cv-card-name">
                        <h2 className="user-cv-card-name-1">{data.name}</h2>
                    </div>
                    <div className="user-cv-card-change">
                        <p>Domain:</p>
                        <p className="user-cv-card-change-domain">{data.url}</p>
                        <button className="user-cv-card-change-vector-copy-button"><img src={VectorCopy} alt="vector"/></button>
                    </div>

                        <button className="user-cv-card-change-vector-no-active-button1" onClick={handlePublish}>
                            {data.published  ?
                                <img src={UnPublish} alt="vector"/>
                            :
                            <img src={Publish} alt="vector"/>
                            }
                        </button>

                    <button onClick={templateEdit} className="user-cv-card-change-vector-rename-button">
                        <img src={VectorRename} alt="vector"/>
                    </button>
                    <button className="user-cv-card-change-vector-rename-button" onClick={handleOpen}>
                        <img src={VectorDelete} alt="vector"/>
                    </button>
                </div>
                <div className="user-cv-user-cv-card-line">
                    <hr />
                </div>
            </div>
            {open ? <div className="user-cv-pages">
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

                            <div className="user-cv-pages-content1 ">
                                <div className="user-cv-pages-content1-content2">
                                    <h3 className="user-cv-pages-content1-content2-h1">Are you sure you want to delete {data.name} bio page?</h3>
                                    <div className="user-cv-pages-content1-content2-button">
                                        <div className="user-cv-pages-content1-content2-button-main">
                                            <button className="user-cv-pages-content1-content2-button-main-button1" onClick={handleClose}>No</button>
                                            <button onClick={handleDelete} className="user-cv-pages-content1-content2-button-main-button2">Yes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Box>
                    </Fade>
                </Modal>
            </div> : null}
        </>
    );
}

export default CreateCvCard;
