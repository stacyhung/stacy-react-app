import React from "react";
import "../css/App.css"

function SocialListItem(props) {
    return (
        <li className="social-list-item">
            <a className="social-list-link" href={props.url} target="_blank">
                <i className={`fab ${props.icon}`}></i>
            </a>
        </li>
    )
}

export default SocialListItem;