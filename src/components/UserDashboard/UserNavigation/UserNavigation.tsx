import React from "react";
import VectorMenu from "../../../assets/img/userdashboard/vector-menu.svg";
import VectorChangePassword from "../../../assets/img/userdashboard/vector-chang-password.svg";
import VectorPagesImg from "../../../assets/img/userdashboard/vector-pages-img.svg";
import RemoveAccount from "../../../assets/img/userdashboard/user-remove-icon.svg";
import "./usernavigation.scss";

interface Props {
    setTabs?:Function
}

const UserDashboard: React.FC<Props> = ({setTabs}) => {


    return (
        <>
            <div className="general-main">
                <nav>
                    <div className="general-main-container">
                        <div>
                            <button onClick={()=>setTabs(0)} className="general-main-container-link"><img src={VectorMenu} alt="userPanelImg"/>General Information</button>
                        </div>
                        <div>
                            <button onClick={()=>setTabs(1)} className="general-main-container-link"><img src={VectorChangePassword} alt="userPanelImg"/>Change Password</button>
                        </div>
                        <div>
                            <button onClick={()=>setTabs(2)} className="general-main-container-link"><img src={VectorPagesImg} alt="userPanelImg"/>Pages</button>
                        </div>
                        <div>
                            <button onClick={()=>setTabs(3)} className="general-main-container-link"><img src={RemoveAccount} alt="userPanelImg"/>Remove account</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default UserDashboard;
