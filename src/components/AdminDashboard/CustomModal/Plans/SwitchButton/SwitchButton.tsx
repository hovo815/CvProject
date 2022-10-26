import React from 'react'
import "./switchbutton.scss"

const SwitchButton: React.FC = () => {

    return (
        <div>
            <label className="toggle">
                <input type="checkbox" />
                <span className="slider"></span>
                <span className="labels" data-on="Pause" data-off="Unpause"></span>
            </label>
        </div>
    )
}

export default SwitchButton