import React from 'react';
import SyinkdInvoice from './SyinkdInvoice/SyinkdInovice';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./orders.scss";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1918,
    border: 'none',
    boxShadow: 24,
    p: 4,
    backgroundColor: "#161620",
};


const Orders: React.FC = () => {
    const OrdersData = [
        {
            OrderId: "#36565",
            Date: "12/02/2022",
            Total: "$15",
        },
        {
            OrderId: "#36565",
            Date: "12/02/2022",
            Total: "$15",
        },
        {
            OrderId: "#36565",
            Date: "12/02/2022",
            Total: "$15",
        }
    ]

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='orders'>
                <div className='orders-title'>
                    <div className='orders-title-id'>
                        <h2 className='orders-title-order-id'>Order Id</h2>
                    </div>
                    <div className='orders-title-date'>
                        <h2 className='orders-title-date-text'>Date</h2>
                    </div>
                    <div className='orders-title-total'>
                        <h2 className='orders-title-total-text'>Total</h2>
                    </div>
                </div>
                <div className='created-templates-title-border'></div>
                {OrdersData.map((item) => (
                    <>
                        <div className='orders-title'>
                            <div className='orders-title-order-id'>
                                <h2 className='orders-title-order-id-data-text'>{item.OrderId}</h2>
                            </div>
                            <div className='orders-title-date'>
                                <h2 className='orders-title-date-data-text'>{item.Date}</h2>
                            </div>
                            <div className='orders-title-total'>
                                <h2 className='orders-title-total-data-text'>{item.Total}</h2>
                            </div>
                            <div className='orders-title-view-invoice'>
                                <button className='orders-title-view-invoice-button' onClick={handleOpen}>View Invoice
                                </button>
                            </div>
                        </div>
                        <div className='createdTemplates-title-border'></div>
                    </>
                ))}
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='syinkdInvoice'><SyinkdInvoice handleClose={handleClose}/></div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Orders;