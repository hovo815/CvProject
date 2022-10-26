import React from 'react';
import AXIOS from "../../../../services/axios";
import "./blockunblockuser.scss"
import {useAppDispatch} from "../../../../hooks/useApp";
import {toggleBlock} from "../../../../features/adminDataSlice/adminDataSlice";

interface Props {
    id : string,
    isBlocked: boolean
}

const BlockUnBlockUser:React.FC<Props> = ({id,isBlocked}) => {
    const type = isBlocked ? "block" : "unblock"
    const appDispatch = useAppDispatch()
    const setAdminUser = async () => {
        try {
            await AXIOS.put(`api/admin/action/user/${id}/${type}`)
                .then(item => {
                    return item
                })
            appDispatch(toggleBlock({id: id, isBlocked: !isBlocked}))
        }
        catch (e) {
            console.log(e, "Error");
        }
    }

    return (
        <div>
            <label className="toggle">
                <input type="checkbox" checked={isBlocked} onClick={setAdminUser}
                />
                <span className="slider"></span>
                <span className="labels" data-on="OFF" data-off="ON"></span>
            </label>
        </div>
    )
};


export default BlockUnBlockUser;