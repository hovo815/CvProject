import React from "react";
import {useAppSelector} from "../../../hooks/useApp";
import "./activated.scss";



type Props = {
    title1: string,
    title2: string,
}


const Activated: React.FC<Props> = ({ title1,title2}) => {
    const accountGeneral = useAppSelector(state => state.userDashboard.userDashboard)


    return (
        <>
            <div className="activated-container">
                <div className="activated-container-main">
                    <div className="activated-container-text">
                        <h2 className="activated-container-text-h1">Activated plan:</h2>
                    </div>
                    <div className="activated-container-button1">
                        <p>{title1}</p>
                    </div>
                    {accountGeneral ? <div className="activated-container-button2">
                        <p>{title2}</p>
                    </div>:null}
                </div>
            </div>
        </>
    )
}

export default Activated;