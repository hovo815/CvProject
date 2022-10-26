import React from 'react';
import Publish from "../../../../../assets/img/admin/publish.svg";
import UnPublish from "../../../../../assets/img/admin/un-publish.svg";
import "./publishunpublish.scss";
import {useAppDispatch} from "../../../../../hooks/useApp";
import {togglePublish} from "../../../../../features/adminDataSlice/adminDataSlice";
import AXIOS from "../../../../../services/axios";

interface Props {
    publish:boolean,
    id:string,
}

const PublishUnPublish: React.FC <Props> = ({publish, id}) => {

    const type = publish ? "unpublish" : "publish"

    const appDispatch = useAppDispatch()

    const setAdminUser = async () => {
        try {
            await AXIOS.patch(`api/templates/${id}/${type}`)


            appDispatch(togglePublish({
                id:id,
                published:!publish
            }))
        }
        catch (e) {
            console.log(e, "Error");
        }
    }

    return (
        <div className='publish-un-publish'>
                <button onClick={setAdminUser} className="publish-button">
                    {publish ? <img src={UnPublish} alt="un publish"/> : <img src={Publish} alt="publish"/>}
                </button>
        </div>
    )
}

export default PublishUnPublish