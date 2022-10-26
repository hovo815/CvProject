import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AXIOS from "../../../../services/axios";
import SwitchButton from './SwitchButton/SwitchButton';
import PlanChange from './PlanChange/PlanChange';
import ChangeButton from "../../../../assets/img/modal/change-button.svg";
import "./plans.scss";

const style = {
    position: 'absolute' as 'absolute',
    width: 1920,
    height: 1229,
    bgColor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    backgroundColor: "#161620",
};

const Plans: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const plansData =
        [
            {
                Name: "Busiones",
                ActivatedPlan: "12/02/2022",
                Expitationdate: "12/03/2022",
                Price: "$15",
                Discounts: "5%",
            },
            {
                Name: "Social",
                ActivatedPlan: "12/02/2022",
                Expitationdate: "12/03/2022",
                Price: "$20",
                Discounts: "-",
            },
        ]

    useEffect(() => {
        const postDiscountList = async () => {
            try {
                await AXIOS.get('discount/list')
                    .then((res: any) => {
                        console.log(res, "res");

                    })
            } catch (e) {
                console.log(e, "Error");
            }
        }
        postDiscountList()
    }, [])

    return (
        <>
            <div className='plans-container'>
                <div className='plans-container-title'>
                    <div className='plans-container-title-name'>
                        <h2 className='plans-title-name'>Name</h2>
                    </div>
                    <div className='plans-container-title-activated'>
                        <h2 className='plans-title-activated'>Activated Plan</h2>
                    </div>
                    <div className='plans-container-title-expiration'>
                        <h2 className='plans-title-expiration'>Expiration date</h2>
                    </div>
                    <div className='plans-container-title-price'>
                        <h2 className='plans-title-price'>Price</h2>
                    </div>
                    <div className='plans-container-title-discounts'>
                        <h2 className='plans-title-discounts'>Discounts</h2>
                    </div>
                </div>
                <div className='created-templates-title-border'></div>
                {plansData.map((item) => (
                    <div className="plans-container plans-container">
                        <div className='plans-data-title-buttons-container'>
                            <div className='plans-data-title'>
                                <div className='plans-data-title-name'>
                                    <h2 className='plans-title-name'>{item.Name}</h2>
                                </div>
                                <div className='plans-data-title-activated'>
                                    <h2 className='plans-title-activated'>{item.ActivatedPlan}</h2>
                                </div>
                                <div className='plans-data-title-expiration'>
                                    <h2 className='plans-title-expiration'>{item.Expitationdate}</h2>
                                </div>
                                <div className='plans-data-title-price'>
                                    <h2 className='plans-title-price'>{item.Price}</h2>
                                </div>
                                <div className='plans-data-title-discounts'>
                                    <h2 className='plans-title-discounts'>{item.Discounts}</h2>
                                </div>
                            </div>
                            <div className='plans-container-buttons'>
                                <div className='plans-container-button'>
                                    <SwitchButton/>
                                </div>
                                <button className='plans-container-button' onClick={handleOpen}>
                                    <img src={ChangeButton} alt="change button"/>
                                </button>
                            </div>
                        </div>
                        <div className='created-templates-title-border'></div>
                    </div>
                ))}
            </div>
            <div className='modal-plans'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='plans-plan-change'>
                            <PlanChange handleClose={handleClose}/>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Plans