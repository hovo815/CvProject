import React, { useEffect} from "react";
import BlockUnblockButton from "./BlockUnbBlockUser/BlockUnBlockUser";
import Modal from "../../../components/AdminDashboard/CustomModal/CustomModal";
import AXIOS from "../../../services/axios"
import {useAppDispatch, useAppSelector} from "../../../hooks/useApp";
import {setAdminUserList} from "../../../features/adminDataSlice/adminDataSlice";
import moment from 'moment'
import "./admindatauser.scss";


const AdminDataUser: React.FC = () => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        const setUserList = async () => {
            try {
                await AXIOS.get('api/admin/user/list')
                    .then(item => {
                        appDispatch(setAdminUserList(item.data))
                    })
            } catch (e) {
                console.log(e, "Error");
            }
        }
        setUserList()
    }, [appDispatch])
    const userList = useAppSelector(state => state.admin.adminUserList)

    return (
        <>
            <div className='admin-data-user-container'>

                <div className='admin-data-user-container-table'>
                    <div className='admin-data-user-container-table-data1'>
                        <div className="admin-data-user-container-table-data1-name1"><h1>Name</h1></div>
                        <div className="admin-data-user-container-table-data1-email1"><h1>Email</h1></div>
                        <div className="admin-data-user-container-table-data1-phone-number1"><h1>Phone Number</h1></div>
                        <div className="admin-data-user-container-table-data1-created1"><h1>Created date</h1></div>
                        <div className="admin-data-user-container-table-data1-unblock-unblock1"><h1>Block/Unblock </h1>
                        </div>
                    </div>
                    {userList.list?.map((item) => (
                                <div className="admin-data-user-container-table-data2" key={item._id}>
                                    <div className="admin-data-user-container-table-data2-name2">{item.fullName}</div>
                                    <div className="admin-data-user-container-table-data2-email2">{item.email}</div>
                                    <div
                                        className="admin-data-user-container-table-data2-phone-number2">{item.phoneNumber || '-'}</div>
                                    <div
                                        className="admin-data-user-container-table-data2-created2">{moment(item.createdDt).format('DD/MM/YYYY')}</div>
                                    <div className="admin-data-user-container-table-data2-unblock-unblock2">
                                        <BlockUnblockButton id={item._id} isBlocked={item.isBlocked}/>
                                        <button className="admin-data-user-container-table-data2-unblock-unblock2-button2">
                                            <Modal id={item._id}/></button>
                                    </div>
                                </div>
                            )
                    )
                    }
                </div>
            </div>
        </>
    )
};

export default AdminDataUser