import "./activated.scss";
import React from "react";

type ProfileProps = {
    title: string,
    active: string,
}

const Activated: React.FC<ProfileProps> = ({ title, active }) => {

    return (
        <div className="title-active">
            <div className="title-active-main">
                <div className="title-active-main-name">
                    {title}
                </div>
                <div className="title-active-main-name-active">
                    {active}
                </div>
            </div>
        </div>
    );
}

export default Activated;
