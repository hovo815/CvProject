import React from 'react';
import SyinkdButton from "../../../../../assets/img/modal/syinkd-button.svg";
import ButtonAdd from "../../../../../assets/img/modal/button-add.svg";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AXIOS from "../../../../../services/axios"
import "./planschange.scss";

interface Props {
    handleClose: any,
}

const PlanChange: React.FC<Props> = ({handleClose}) => {
    const [AddDiscountPlan, setAddDiscountPlan] = React.useState(true)
    const [Discount, setDiscount] = React.useState(String)

    function plansChangeClick() {
        handleClose()
    }

    function planAddClick() {
        setAddDiscountPlan(false)
    }


    const postDiscount = async () => {
        try {
            await AXIOS.post('discount',
                {discount: 5}).then((item ) => {
                console.log(item, "post Discount");
            })
        } catch (e) {
            console.log(e, "Error");
        }
    }

    function saveDiscount() {
        postDiscount()
    }

    console.log(Discount, " Discount.");


    return (
        <div>
            <div className='plan-change-buttons'>
                <button onClick={plansChangeClick} className='plan-change-button'>
                    <img src={SyinkdButton} alt="synkd button"/>
                </button>
            </div>
            <div className='plan-change'>
                <div className='plan-change-content'>
                    <div className='plan-change-content-column'>
                        <div><h1 className='plan-change-content-column-h1'>Business Plan</h1></div>
                        {AddDiscountPlan ?
                            <div className='plan-change-content-add'>
                                <button className='plan-change-button-add' onClick={planAddClick}>
                                    <img src={ButtonAdd} alt="add button"/>
                                </button>
                                <p>Add discount</p>
                            </div> :
                            <div className='discount-container'>
                                <Stack spacing={3} sx={{width: 330, height: 40,}}>
                                    <TextField id="outlined-multiline-static"
                                               label="Discount (%)"
                                               className="change-password-mui-main-input-email1"
                                               style={{border: "none",}}
                                               onChange={(e) => {
                                                   setDiscount(e.target.value)
                                               }}
                                    />
                                </Stack>
                            </div>}
                    </div>
                    <div className='plan-change-content-save'>
                        <button className='plan-change-save-button' onClick={saveDiscount}>Save</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlanChange;