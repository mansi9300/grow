import React, { useState } from 'react';

function Crop(props) {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };

    return (
        <div className='cropconta'>
            <img src={props.img} alt={props.name} className='crop-image' />
            <h2 className='crop-name'>{props.name}</h2>
            <p className='crop-desc'>{props.desc}</p>

            <div className='crop-details'>
                <p><strong>Scientific Name:</strong> {props.scientificName}</p>
                <p><strong>Growing Season:</strong> {props.season}</p>
                <p><strong>Water Requirement:</strong> {props.waterRequirement}</p>
                <p><strong>Soil Type:</strong> {props.soilType}</p>
                <p><strong>Harvest Time:</strong> {props.harvestTime}</p>
            </div>

            <button className='more-info-btn' onClick={toggleMoreInfo}>
                {showMoreInfo ? 'Show Less' : 'More Info'}
            </button>

            {showMoreInfo && (
                <div className='extra-info'>
                    {props.fertilization && (
                        <p><strong>Fertilization:</strong> {props.fertilization}</p>
                    )}
                    {props.pestControl && (
                        <p><strong>Pest Control:</strong> {props.pestControl}</p>
                    )}
                    {props.market && (
                        <p><strong>Market:</strong> {props.market}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Crop;
