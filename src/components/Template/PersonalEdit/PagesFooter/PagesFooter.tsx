import React from 'react';
import {useAppDispatch} from "../../../../hooks/useApp";
import {pageOne} from "../../../../features/pageSlice/pageSlice";
import "./pagesfooter.scss"

interface Props {
    tabulation?:boolean
}

const PagesFooter:React.FC<Props> = ({tabulation}) => {
    const appDispatch = useAppDispatch()
    return (
        <div className="personal-edit-pages-footer">
            <button
                className={tabulation ? "personal-edit-pages-footer-btn tabulation" : "personal-edit-pages-footer-btn"}
                onClick={()=>appDispatch(pageOne())}
            >
                🠔 Back
            </button>
        </div>
    );
};


export default PagesFooter;