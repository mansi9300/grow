import React from "react";
import TipLink from "./TipLink";
import tip1img from "./Images/organic.jpg"
import tip2img from "./Images/renewable.webp"
import tip3img from "./Images/water.jpg"
import tip4img from "./Images/agro.avif"
import tip5img from "./Images/rotation.jpg"
import tip6img from "./Images/pest.webp"
import tip7img from "./Images/a.jpg"
import tip8img from "./Images/tillage.jpg"
import tip9img from "./Images/biodiversity.jpg"
import tip10img from "./Images/smart.jpg"


const tips = [
    <TipLink key={1} name="Composting and Organic Fertilizers" src={tip1img}></TipLink>,
    <TipLink key={2} name="Renewable Energy on Farms" src={tip2img}></TipLink>,
    <TipLink key={3} name="Water Conservation on Farms" src={tip3img}></TipLink>,
    <TipLink key={4} name="Agroforestry on Farms" src={tip4img}></TipLink>,
    <TipLink key={5} name="Crop Rotation and Companion Planting" src={tip5img}></TipLink>,
    <TipLink key={6} name="Natural Pest Control on Farms" src={tip6img}></TipLink>,
    <TipLink key={7} name="Practicing Organic Farming" src={tip7img}></TipLink>,
    <TipLink key={8} name="Reduced Tillage Farming" src={tip8img}></TipLink>,
    <TipLink key={9} name="Biodiversity Enhancement" src={tip9img}></TipLink>,
    <TipLink key={10} name="Smart Farming Technology" src={tip10img}></TipLink>,
];

function TipCatalogue() {
    return (
        <>
            <div id="Tipcontainer">{tips}</div>
        </>
    );
}
export default TipCatalogue