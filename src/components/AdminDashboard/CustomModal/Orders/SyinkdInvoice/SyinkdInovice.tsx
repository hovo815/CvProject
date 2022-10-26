import React from 'react';
import SyinkdButton from "../../../../../assets/img/modal/syinkd-button.svg";
import Invoice from "../../../../../assets/img/modal/invoice.svg";
import "./syinkdinovice.scss";

interface Props {
    handleClose: any,
}

const SyinkdInvoice: React.FC<Props> = ({handleClose}) => {

    const click = () => {
        handleClose()
    }

    return (
        <div className='syinkd-invoice-container'>
            <div>
                <div className='syinkd-invoice-container-buttons'>
                    <button className='syinkd-invoice-container-button' onClick={click}>
                        <img src={SyinkdButton} alt="syinkd button"/>
                    </button>
                </div>
                <div className='syinkd-invoice-container-data'>
                    <div className='syinkd-invoice-container-data-syinkd'>
                        <div>
                            <h1 className='syinkd-invoice-container-data-syinkd-title-h1'>Syinkd</h1>
                        </div>
                        <div>
                            <h3 className='syinkd-invoice-container-data-syinkd-title-h3'>Syinkd</h3>
                            <div>
                                <p className='syinkd-invoice-container-data-syinkd-p'>35 NW 93rd Street</p>
                                <p className='syinkd-invoice-container-data-syinkd-p'>Miami. Fl, 33135</p>
                                <p className='syinkd-invoice-container-data-syinkd-p'>United State</p>
                            </div>
                        </div>
                    </div>
                    <div className='syinkd-invoice-container-data-invoice'>
                        <div style={{width: "270px"}}>
                            <div className='syinkd-invoice-container-data-invoice-h1'>
                                <img src={Invoice} className='syinkd-invoice-container-data-invoice-h1-img' alt="invoice"/>
                            </div>
                            <p className='syinkd-invoice-container-data-invoice-h1-p'>John Doe</p>
                            <p className='syinkd-invoice-container-data-invoice-h1-p'>Street 123</p>
                            <p className='syinkd-invoice-container-data-invoice-h1-p'>1220 JD Amsterdam</p>
                        </div>
                        <div className='syinkd-invoice-container-data-invoice-number'>
                            <div>
                                <p className='syinkd-invoice-container-data-invoice-number-title'>Invoice Number</p>
                                <p className='syinkd-invoice-container-data-invoice-number-title'>Invoice Date</p>
                                <p className='syinkd-invoice-container-data-invoice-number-title'>Order Number</p>
                                <p className='syinkd-invoice-container-data-invoice-number-title'>Order Date</p>
                            </div>
                            <div>
                                <p className='syinkd-invoice-container-data-invoice-number-text'>4254365635536</p>
                                <p className='syinkd-invoice-container-data-invoice-number-text'>12/02/2022</p>
                                <p className='syinkd-invoice-container-data-invoice-number-text'>#36565</p>
                                <p className='syinkd-invoice-container-data-invoice-number-text'>12/02/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='syinkd-invoice-container-data-plan-price-container'>
                        <div className='syinkd-invoice-container-data-plan-price-container-content'>
                            <div className='syinkd-invoice-container-data-plan-price-container-content-plan'>
                                <div className='syinkd-invoice-container-data-plan-price-container-content-plan-p'>
                                    <p className='syinkd-invoice-container-data-plan-p'>Plan</p>
                                    <p className='syinkd-invoice-container-data-price-p'>Price</p>
                                </div>
                            </div>
                            <div className='syinkd-invoice-container-data-plan-price-container-content-business'>
                                <p className='syinkd-invoice-container-data-plan-price-container-content-business-p'>Business</p>
                                <p className='syinkd-invoice-container-data-plan-price-container-content-business-p'>$15</p>
                            </div>
                        </div>
                    </div>
                    <div className='syinkd-invoice-container-data-sub-total-tax-total'>
                        <div className='syinkd-invoice-container-data-sub-total-tax-total-table'>
                            <div className='syinkd-invoice-container-data-sub-total-tax-total-table-sub-box-total'>
                                <div className='syinkd-invoice-container-data-sub-total-tax-total-table-sub-box-total-p'>
                                    <p className='syinkd-invoice-container-data-sub-total-tax-total-table-sub-box-total-p'>Subtotal</p>
                                    <p className='syinkd-invoice-container-data-sub-total-tax-total-table-sub-box-total-p'>$15</p>
                                </div>
                            </div>
                            <div className='syinkd-invoice-container-data-sub-total-tax-total-table-box'>
                                <p className='syinkd-invoice-container-data-sub-total-tax-total-table-box-tax'>Tax</p>
                                <p className='syinkd-invoice-container-data-sub-total-tax-total-table-box-tax'>$2</p>
                            </div>
                            <div className='syinkd-invoice-container-data-sub-total-tax-total-table-border'></div>
                            <div className='syinkd-invoice-container-data-sub-total-tax-total-table-box'>
                                <p className='syinkd-invoice-container-data-sub-total-tax-total-table-box-total'>Total</p>
                                <p className='syinkd-invoice-container-data-sub-total-tax-total-table-box-total'>$17</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SyinkdInvoice