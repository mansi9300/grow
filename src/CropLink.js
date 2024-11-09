import React from "react";
import { Link } from "react-router-dom";

function CropLink(props) {
    if(props.catalogue === true)
    {
        return (
            <Link to={`/crops/${props.name.toLowerCase().replace(/ /g, "-")}`} >
                <div className="cropWidget">
                    <img src={props.image} alt={props.name} className="cropImage" />
                    <h3 className="cropName">{props.name}</h3>
                </div>
            </Link>
        );
    }
    return (
        <Link to={`/crops/${props.name.toLowerCase().replace(/ /g, "-")}`} >
            <div className="cropWidget">
                <img src={props.image} alt={props.name} className="cropImage" />
                <h3 className="cropName">{props.name}</h3>
                <p className="cropStatus">{props.isdead ? "Status: Viable" : "Status: Not Viable"}</p>
                <p className="cropPoints">Points: {props.point}</p>
            </div>
        </Link>
    );
}

export default CropLink;