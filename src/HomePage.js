import React from 'react'
import images from "./Images/img.jpg"
import TipLink from "./TipLink";
import tip1img from "./Images/tip_1.png"
import tip4img from "./Images/tip_4.png"
import tip10img from "./Images/tip_10.png"
import tip3img from "./Images/tip_3.png"
import mainpage from "./Images/mainpage.png"
import main2 from "./Images/main2.png"
import technology from "./Images/technology.png"
import banner from './Images/banner.jpg';
function HomePage() {

    const featuredTips = [
        <TipLink key={1} name="Composting and Organic Fertilizers" src={tip1img} home={true}></TipLink>,
        <TipLink key={2} name="Agroforestry on Farms" src={tip4img} home={true}></TipLink>,
        <TipLink key={3} name="Smart Farming Technology" src={tip10img} home={true}></TipLink>,
        <TipLink key={4} name="Water Conservation on Farms" src={tip3img} home={true}></TipLink>,
    ];

    return (
        
        <div className='HomePage'>
       <img className="w-full h-[520px] " src={images} alt="a banner that has farmers recycle logos and plants"  />

        <div>
            <article className="homepageArticle1  ">
                <img  src={mainpage} alt='summary of the informations' className="homepageImg" />
                <p>The primary aim of eco-friendly farming is to create a harmonious balance between agriculture and the environment. By implementing sustainable practices like renewable energy, water conservation, and natural pest control, farms can coexist with nature. These methods help protect the environment, conserve valuable resources, and maintain the health of ecosystems, ensuring that high productivity is achieved without sacrificing ecological responsibility.Eco-friendly farming promotes biodiversity by encouraging a variety of crops and livestock, which strengthens resilience against pests and diseases. </p>
            </article>
            <article className="homepageArticle1">
                <img src={main2} alt='summary of the informations' className="homepageImg2" />
                <p className='text-center font-arial'>Eco-friendly farming encourages methods like crop rotation and companion planting to naturally enrich the soil and reduce the need for chemical inputs. These practices not only boost soil fertility but also foster biodiversity by attracting beneficial insects and wildlife. The result is healthier crops, reduced reliance on harmful chemicals, and a thriving ecosystem that supports both the environment and farming productivity.Eco-friendly farming practices help improve water retention and reduce erosion, contributing to more resilient agricultural systems. By minimizing chemical runoff, they protect nearby waterways and promote healthier habitats for aquatic life. </p>
            </article>
            <br/> <br/>
            <article className="homepageArticle1">
                <img src={technology} alt='summary of the informations' className="homepageImg" />
                <p>Leveraging technology is another key aspect of sustainable agriculture. Precision farming tools, drones, and sensors help monitor crop health and optimize resource use, ensuring minimal waste. These smart technologies allow farmers to efficiently manage their farms while reducing their environmental impact. The combination of nature and technology creates resilient, sustainable systems that support both the environment and the economy.Additionally, data analytics can provide insights into weather patterns and soil conditions, enabling farmers to make informed decisions that enhance productivity.</p>
            </article>
            <article className='brief'>
                {featuredTips}
            </article>
            </div>
        </div>
    );
}
export default HomePage;