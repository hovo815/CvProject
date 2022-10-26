import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/useApp";
import Add from "../../../assets/img/socialmedia/addicon.svg"
import Delete from "../../../assets/img/socialmedia/deleteicon.svg"
import DefaultImg from "../../../assets/img/icons/inputphotoicon.svg"
import {businessMediaLinkType} from "../../../type/businessMediaLinkType";

interface Props {
    data: Array<businessMediaLinkType>,
    setUrl: Function,
    removeLink: Function,
    addLink: Function,
    setTitle: Function,
    removeIcon:Function,
    setIcon:Function
}

const BusinessMediaLink: React.FC<Props> = ({data, setUrl, removeLink, addLink, setTitle,removeIcon,setIcon}) => {

    const inputs = useAppSelector(state => state.business.businessLinks)
    const appDispatch = useAppDispatch()

    return (
        <>

            <h3 className="social-media-links-title">Social media <span>(Add 3 social media links free)</span></h3>
            {data.map((item: any, index: number) => (
                <div key={item.id} className="social-media-inputs-container">
                    <button className="social-media-inputs-container-delete"
                            onClick={() => appDispatch(removeLink(item.id))}><img src={Delete} alt="delete"/>
                    </button>
                    <input
                        placeholder="Title"
                        className="social-media-inputs-container-inputs"
                        onChange={(e) => appDispatch(setTitle({
                            id: item.id,
                          title: e.target.value
                        }))}
                        value={item.title}
                        name='socialTitle'
                        type="text"
                    />
                    <input
                        placeholder="Url"
                        className="social-media-inputs-container-inputs"
                        onChange={(e) => appDispatch(setUrl({id: item.id, url: e.target.value}))}
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
                                style={!item.icon ? {width: "auto", height: "auto"} : null}
                                src={item.icon ? item.icon : DefaultImg}
                                alt="default-img"
                            />

                        </label>
                        {item.icon ?
                            <button onClick={() => appDispatch(removeIcon({id: item.id}))}
                                    className='icon-delete'>x</button>
                            : null}
                        <input
                            id="social-media-input-file"
                            className="social-media-inputs-container-inputs"
                            onChange={(e) => appDispatch(setIcon({
                                id: item.id, icon: URL.createObjectURL(e.target.files[0])
                            }))}
                            name='icon'
                            type="file"
                        />
                    </div>
                    {index === inputs.length - 1 ?
                        <button
                            className="social-media-inputs-container-add"
                            onClick={() => appDispatch(addLink())}
                        >
                             <span className="social-media-inputs-container-add-icon">
                             <img src={Add} alt="add"/>
                             </span>
                            Add new Social media</button> : null}
                </div>
            ))}
            {!data.length ? <button
                className="social-media-inputs-container-add"
                onClick={() => appDispatch(addLink())}
            >
            <span className="social-media-inputs-container-add-icon">
            {/*<img src={Add} alt="add"/>*/}
            </span>
                Add new Social media</button> : null}

        </>
    );
}


export default BusinessMediaLink;