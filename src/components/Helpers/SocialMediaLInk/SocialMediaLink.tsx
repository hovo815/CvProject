import React from 'react';
import "./socialmedialink.scss";
import Delete from "../../../assets/img/socialmedia/deleteicon.svg"
import DefaultImg from "../../../assets/img/icons/inputphotoicon.svg"
import {useAppDispatch, useAppSelector} from "../../../hooks/useApp";
import {
    setSocialMediaChecked,
    socialMediaIconChange,
    socialMediaIconRemove,
    socialMediaUrlChange
} from "../../../features/socialEditPageSlice/socialEditPageSlice";
import AXIOS from "../../../services/axios";
import toFormData from "object-to-formdata";

interface Props {
    id : string
}



const SocialMediaLink: React.FC<Props> = ({id}) => {

    const socialId = useAppSelector(state => state.social.template)
    const inputs = useAppSelector(state => state.social.socialMedia)
    const appDispatch = useAppDispatch()
    const checkedInputs = inputs.filter(item => item.checked ? item : null)

    const handleImageInputChange = async (e:any) => {
        const upload = e.target.files[0]
            appDispatch(socialMediaIconChange({
                name: e.target.name, icon: URL.createObjectURL(upload)
            }))
            try {

                const {data} = await AXIOS.post(`api/upload`, toFormData.serialize({
                        file: upload,
                    }, {indices: true})
                )

                appDispatch(socialMediaIconChange( { name: e.target.name, icon: `https://iw3880.herokuapp.com/${data}`}))
            } catch (e) {
                console.log(e)
            }
    }
    const clickResponseSocials = async () => {
        const formDataObjFields  = checkedInputs.filter((item, index:number) => checkedInputs.length-1 === index
        )
        const formDataObj = {
            template:id,
            name:formDataObjFields[0].name,
            url:formDataObjFields[0].url,
            image:formDataObjFields[0].icon
        }


        try {
            AXIOS.post(`api/social`,formDataObj ).then(item => {
                console.log(item,"wefwefwefwfewewfew");
            })
        }
        catch (e){
            console.log(e,"focusOutResponse Error")
        }
    }

    return (
        <>
            <h3 className="social-media-links-title">Social media <span>(Add 3 social media links free)</span></h3>
            {checkedInputs.map((item: any) => (
                <div key={item.name} className="social-media-inputs-container">
                    <button className="social-media-inputs-container-delete"
                            onClick={()=>appDispatch(setSocialMediaChecked(item.name))}><img src={Delete} alt="delete"/>
                    </button>
                    <div className="social-media-inputs-links-container">
                        <p className="social-media-links-sub-title">{item.name}</p>
                    </div>
                    <input
                        placeholder="Url"
                        className="social-media-inputs-container-inputs"
                        onChange={(e) => appDispatch(socialMediaUrlChange({name:item.name, url:e.target.value}))}
                        value={item.url}
                        name='url'
                        type="text"
                    />
                    <div className='social-media-inputs-container-files'>
                    <label
                        className="social-media-inputs-container-files-file-loader"
                        htmlFor="social-media-input-file"
                    >
                        <img
                            className="social-media-inputs-container-files-file-loader-icon"
                            style={!item.icon ? {width:"auto", height:"auto"}: null}
                             src={item.icon ? item.icon : DefaultImg}
                            alt="default-img"
                        />
                    </label>
                        {item.icon ?
                            <button onClick={() =>appDispatch(socialMediaIconRemove({name:item.name}))} className='icon-delete'>x</button>
                            :null}
                    <input
                        id="social-media-input-file"
                        className="social-media-inputs-container-inputs"
                        onChange={handleImageInputChange}
                        name={item.name}
                        type="file"
                    />
                    </div>
                    <button onClick={clickResponseSocials} className="save">save</button>
                </div>
            ))}
        </>
    );
};


export default SocialMediaLink;