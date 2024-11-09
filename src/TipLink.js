import React from "react";
import { Link } from 'react-router-dom';

function TipLink(props) {
    if(props.home === true)
    {
        return (
            <Link to={`tips/${props.name.toLowerCase().replace(/ /g, "-")}`} className="tip-link-link-home">
                <p className="tip-p-home">{props.name}</p>
                <img src={props.src} alt={`a ${props.name}`} id={`${props.name}_Tip`} className="tipImg-home" />
                <br />
            </Link>
        )
    }
    return (
        <Link to={props.name.toLowerCase().replace(/ /g, "-")} className="tip-link-link">
            <p className="tip-p">{props.name}</p>
            <img src={props.src} alt={`a ${props.name}`} id={`${props.name}_Tip`} className="tipImg" />
            <br />
        </Link>
    )
}
export default TipLink