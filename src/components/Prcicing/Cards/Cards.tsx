import React from "react";
import vectorPtichka from "../../../assets/img/pricing/vector-ptichka.svg";
import "./cards.scss";

interface Props {
    setSocial: any,
}

const Cards: React.FC<Props> = ({ setSocial }) => {

    const setSocialClick = () =>{
        setSocial(false)
    }
    return (
        <div className='cards-container'>
            <h1 className='cards-container-h1'>$ 4.99/m </h1>
            <div className='cards-container-button'>
                <button onClick={setSocialClick} className='cards-button'>Get Started</button>
            </div>
            <div className='cards-container-qr-code'>
                <div className="cards-container-qr-Code-unlimited">
                    <img src={vectorPtichka} alt="vector" />
                    <p className="cards-container-qr-code-unlimited-p">Unlimited links</p>
                </div>
                <div className="cards-qr-code">
                    <img src={vectorPtichka} alt="vector" />
                    <p className="cards-qr-code-p">QR code</p>
                </div>
            </div>
        </div>

    )
}
export default Cards;