import React, {useEffect} from 'react';
import ChangeButton from './ChangeButton/ChangeButton';
import DeleteTemplate from './DeleteTemplate/DeleteTemplate';
import PublishUnPublish from './PublishUnPublish/PublishUnPublish';
import {useAppDispatch, useAppSelector} from "../../../../hooks/useApp";
import AXIOS from "../../../../services/axios";
import "./createdtemplate.scss";
import {removeTemplateList, setAdminTemplateList} from "../../../../features/adminDataSlice/adminDataSlice";

interface Props {
    id: string
}


const CreatedTemplates: React.FC<Props> = ({id}) => {
    const appDispatch = useAppDispatch()

    useEffect(() => {
        const setAdminUser = async () => {
            try {
                await AXIOS.get(`api/admin/user/templates?page=${1}&limit=${10000}&userId=${id}`)
                    .then(item => {
                        appDispatch(setAdminTemplateList(item.data.list))
                    })
            }
            catch (e) {
                appDispatch(removeTemplateList())
                console.log(e, "Error");
            }
        }
        setAdminUser()
    }, [appDispatch, id])


    const adminTemplates = useAppSelector(state => state.admin.adminTemplateList)


    return (
        <div>
            <div className='created-templates'>
                <div className='created-templates-title'>
                    <div className='created-templates-title-name'>
                        <h2 className='created-templates-title-name-title'>Name</h2>
                    </div>
                    <div className='created-templates-title-date'>
                        <h2 className='created-templates-title-date-title'>Date</h2>
                    </div>
                    <div className='created-templates-title-activated'>
                        <h2 className='created-templates-title-activated-title'>Activated Plan</h2>
                    </div>
                    <div className='created-templates-title-expiration'>
                        <h2 className='created-templates-title-expiration-title'>Expiration date</h2>
                    </div>
                    <div className='created-templates-title-domain'>
                        <h2 className='created-templates-title-domain-title'>Domain</h2>
                    </div>
                </div>
                <div className='created-templates-title-border'></div>
                {adminTemplates.map((item) => (
                    <div key={item._id}>
                        <div className='created-templates-title' >
                            <div className='created-templates-title-name'>
                                <p className='created-templates-title-name-text'>{item.name}</p>
                            </div>
                            <div className='created-templates-title-date'>
                                <p className='created-templates-title-date-text'>{item.createdDt}</p>
                            </div>
                            <div className='created-templates-title-activated'>
                                <p className='created-templates-title-activated-text'>{item.planName}</p>
                            </div>
                            <div className='created-templates-title-expiration'>
                                <p className='created-templates-title-expiration-text'>-</p>
                            </div>
                            <div className='created-templates-title-domain'>
                                <p className='created-templates-title-domain-text'>{item.url}</p>
                            </div>
                            <div className='created-templates-title-change-delete-un-publish' >
                                <div>
                                    <ChangeButton/>
                                </div>
                                <div>
                                    <DeleteTemplate id={item._id}/>
                                </div>
                                <div>
                                    <PublishUnPublish  publish={item.published} id={item._id}/>
                                </div>
                            </div>
                        </div>
                        <div className='created-templates-title-border'></div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default CreatedTemplates