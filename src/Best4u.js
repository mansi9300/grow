import TestForm from './TestForm'
import React, { useState } from 'react'
import CropLink from './CropLink'
import rice from './Images/cropIndex_1.png'
import wheat from './Images/cropIndex_2.png'
import corn from './Images/cropIndex_3.png'
import soybeans from './Images/cropIndex_4.png'
import barley from './Images/cropIndex_5.png'
import sugarcane from './Images/cropIndex_6.png'
import potatoes from './Images/cropIndex_7.png'
import cassava from './Images/cropIndex_8.png'
import tomatoes from './Images/cropIndex_9.png'
import bananas from './Images/cropIndex_10.png'
import cotton from './Images/cropIndex_11.png'
import coffee from './Images/cropIndex_12.png'
import cocoa from './Images/cropIndex_13.png'
import oranges from './Images/cropIndex_14.png'
import grapes from './Images/cropIndex_15.png'
import onions from './Images/cropIndex_16.png'
import peanuts from './Images/cropIndex_17.png'
import oats from './Images/cropIndex_18.png'
import lettuce from './Images/cropIndex_19.png'
import sorghum from './Images/cropIndex_20.png'
import sunflowers from './Images/cropIndex_21.png'
import carrots from './Images/cropIndex_22.png'
import avocados from './Images/cropIndex_23.png'
import chilies from './Images/cropIndex_24.png'
import pumpkins from './Images/cropIndex_25.png'
import garlic from './Images/cropIndex_26.png'
import radishes from './Images/cropIndex_27.png'
import pineapples from './Images/cropIndex_28.png'
import zucchini from './Images/cropIndex_29.png'
import squash from './Images/cropIndex_30.png'
import apples from './Images/cropIndex_31.png'
import pears from './Images/cropIndex_32.png'

function Best4u({ scrollRef }) {
    const [isFinished, setIsFinished] = useState(false)
    const [bestCrops, setBestCrops] = useState([])

    class CropsClass {
        constructor(point, isdead, name, src) {
            this.point = point
            this.isdead = isdead
            this.name = name
            this.src = src
        }
    }
    const crops = [
        { name: "Rice", preferredTemperature: { min: 20, max: 30 }, rainfall: 1200, topography: 'C', budgetPer100Seeds: 10, laborPer100Seeds: 2, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 5 }, src: rice },
        { name: "Wheat", preferredTemperature: { min: 15, max: 25 }, rainfall: 800, topography: 'C', budgetPer100Seeds: 8, laborPer100Seeds: 1.5, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: wheat },
        { name: "Corn", preferredTemperature: { min: 18, max: 27 }, rainfall: 1000, topography: 'C', budgetPer100Seeds: 12, laborPer100Seeds: 2.5, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 7 }, src: corn },
        { name: "Soybeans", preferredTemperature: { min: 20, max: 30 }, rainfall: 900, topography: 'C', budgetPer100Seeds: 9, laborPer100Seeds: 2, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 6 }, src: soybeans },
        { name: "Barley", preferredTemperature: { min: 12, max: 24 }, rainfall: 750, topography: 'C', budgetPer100Seeds: 7, laborPer100Seeds: 1, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 4 }, src: barley },
        { name: "Sugarcane", preferredTemperature: { min: 25, max: 35 }, rainfall: 1500, topography: 'C', budgetPer100Seeds: 20, laborPer100Seeds: 5, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 7 }, src: sugarcane },
        { name: "Potatoes", preferredTemperature: { min: 15, max: 20 }, rainfall: 850, topography: 'C', budgetPer100Seeds: 10, laborPer100Seeds: 1.8, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: potatoes },
        { name: "Cassava", preferredTemperature: { min: 25, max: 29 }, rainfall: 1300, topography: 'C', budgetPer100Seeds: 15, laborPer100Seeds: 2.2, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 7 }, src: cassava },
        { name: "Tomatoes", preferredTemperature: { min: 18, max: 27 }, rainfall: 1000, topography: 'C', budgetPer100Seeds: 12, laborPer100Seeds: 2.5, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 7 }, src: tomatoes },
        { name: "Bananas", preferredTemperature: { min: 26, max: 30 }, rainfall: 1400, topography: 'C', budgetPer100Seeds: 18, laborPer100Seeds: 4, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 8 }, src: bananas },
        { name: "Cotton", preferredTemperature: { min: 21, max: 30 }, rainfall: 900, topography: 'C', budgetPer100Seeds: 10, laborPer100Seeds: 3, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: cotton },
        { name: "Coffee", preferredTemperature: { min: 15, max: 24 }, rainfall: 1200, topography: 'C', budgetPer100Seeds: 15, laborPer100Seeds: 2.5, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: coffee },
        { name: "Cocoa", preferredTemperature: { min: 18, max: 32 }, rainfall: 1600, topography: 'C', budgetPer100Seeds: 22, laborPer100Seeds: 5.5, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 7 }, src: cocoa },
        { name: "Oranges", preferredTemperature: { min: 15, max: 30 }, rainfall: 1200, topography: 'C', budgetPer100Seeds: 18, laborPer100Seeds: 3.8, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 6 }, src: oranges },
        { name: "Grapes", preferredTemperature: { min: 15, max: 30 }, rainfall: 1000, topography: 'C', budgetPer100Seeds: 14, laborPer100Seeds: 2.8, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 5 }, src: grapes },
        { name: "Onions", preferredTemperature: { min: 13, max: 24 }, rainfall: 750, topography: 'C', budgetPer100Seeds: 8, laborPer100Seeds: 1.5, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 5 }, src: onions },
        { name: "Peanuts", preferredTemperature: { min: 25, max: 30 }, rainfall: 1300, topography: 'C', budgetPer100Seeds: 12, laborPer100Seeds: 2.2, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 5 }, src: peanuts },
        { name: "Oats", preferredTemperature: { min: 15, max: 25 }, rainfall: 800, topography: 'C', budgetPer100Seeds: 6, laborPer100Seeds: 1.2, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: oats },
        { name: "Lettuce", preferredTemperature: { min: 12, max: 18 }, rainfall: 600, topography: 'C', budgetPer100Seeds: 5, laborPer100Seeds: 1, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 4 }, src: lettuce },
        { name: "Sorghum", preferredTemperature: { min: 25, max: 32 }, rainfall: 1400, topography: 'C', budgetPer100Seeds: 10, laborPer100Seeds: 2.5, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 5 }, src: sorghum },
        { name: "Sunflowers", preferredTemperature: { min: 20, max: 25 }, rainfall: 900, topography: 'C', budgetPer100Seeds: 9, laborPer100Seeds: 1.8, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: sunflowers },
        { name: "Carrots", preferredTemperature: { min: 16, max: 24 }, rainfall: 800, topography: 'C', budgetPer100Seeds: 7, laborPer100Seeds: 1.5, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 4 }, src: carrots },
        { name: "Avocados", preferredTemperature: { min: 15, max: 30 }, rainfall: 1200, topography: 'C', budgetPer100Seeds: 20, laborPer100Seeds: 4.2, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 6 }, src: avocados },
        { name: "Chilies", preferredTemperature: { min: 20, max: 30 }, rainfall: 800, topography: 'C', budgetPer100Seeds: 8, laborPer100Seeds: 1.7, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: chilies },
        { name: "Pumpkins", preferredTemperature: { min: 20, max: 30 }, rainfall: 900, topography: 'C', budgetPer100Seeds: 9, laborPer100Seeds: 2, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: pumpkins },
        { name: "Garlic", preferredTemperature: { min: 12, max: 20 }, rainfall: 600, topography: 'C', budgetPer100Seeds: 6, laborPer100Seeds: 1, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 4 }, src: garlic },
        { name: "Radishes", preferredTemperature: { min: 10, max: 18 }, rainfall: 600, topography: 'C', budgetPer100Seeds: 5, laborPer100Seeds: 1, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 4 }, src: radishes },
        { name: "Pineapples", preferredTemperature: { min: 20, max: 30 }, rainfall: 1500, topography: 'C', budgetPer100Seeds: 20, laborPer100Seeds: 4.5, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 7 }, src: pineapples },
        { name: "Zucchini", preferredTemperature: { min: 18, max: 25 }, rainfall: 800, topography: 'C', budgetPer100Seeds: 7, laborPer100Seeds: 1.8, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 5 }, src: zucchini },
        { name: "Squash", preferredTemperature: { min: 20, max: 30 }, rainfall: 1000, topography: 'C', budgetPer100Seeds: 9, laborPer100Seeds: 2.2, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: squash },
        { name: "Apples", preferredTemperature: { min: 18, max: 24 }, rainfall: 1000, topography: 'C', budgetPer100Seeds: 12, laborPer100Seeds: 2.5, waterSource: 'C', fertilizer: 'B', weedControl: { min: 1, max: 6 }, src: apples },
        { name: "Pears", preferredTemperature: { min: 18, max: 24 }, rainfall: 1000, topography: 'C', budgetPer100Seeds: 10, laborPer100Seeds: 2.2, waterSource: 'C', fertilizer: 'A', weedControl: { min: 1, max: 5 }, src: pears }
    ]

    const cropInstances = crops.map(crop => new CropsClass(0, false, crop.name, crop.src))

    const onClickHandler = (event) => {
        event.preventDefault()
        if (document.getElementById('testForm').checkValidity()) {
            console.log(bestCrops)
            getSelectedValues()
            setIsFinished(true)
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        } else {
            alert("Please Fill Up The Form Completely")
            console.log(bestCrops)
            setIsFinished(false)
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }

    const getSelectedValues = () => {
        const form = document.getElementById('testForm')
        const formData = new FormData(form)
        const formEntries = Array.from(formData.entries())
        const answersForm = formEntries.map(([key, value]) => value)
        console.log(answersForm)

        givePoint(answersForm)
    }

    const givePoint = (answersForm) => {
        const [inputTemperature, inputRain, inputTopography, inputBudget, inputWater, inputSoil, inputWeed, inputWorkers, inputSeed] = answersForm

        cropInstances.forEach((crop) => {
            const cropConditions = crops.find(c => c.name === crop.name)

            if (!cropConditions) {
                console.error(`Could not find conditions for crop: ${crop.name}`)
                return
            }

            const { min, max } = cropConditions.preferredTemperature
            const preferredRain = cropConditions.rainfall
            const preferredTopography = cropConditions.topography
            const preferredBudget = cropConditions.budgetPer100Seeds
            const preferredWater = cropConditions.waterSource
            const preferredFertilizer = cropConditions.fertilizer
            const { weedmin, weedmax } = cropConditions.weedControl
            const preferredLabor = cropConditions.laborPer100Seeds

            if (inputTemperature >= min && inputTemperature <= max && crop.isdead === false) {
                crop.point += 7
            } else if (inputTemperature < min || inputTemperature > max) {
                crop.isdead = true
                console.log(`${crop.name} died beacuse  tenmmp`)
            }
            if (inputRain - 100 <= preferredRain || preferredRain <= inputRain + 300) {
                crop.point += 2
                console.log(`${crop.name} died beacuse rain `)
            }
            else if (inputRain - 100 >= preferredRain || preferredRain >= inputRain + 300) {
                crop.point -= 5
            }
            if ((inputTopography === "D" && preferredTopography !== "D") || (preferredTopography === "A" && inputTopography === "C")) {
                crop.point -= 4
                console.log(`${crop.name} died beacuse top `)
            }
            else if ((inputTopography === "B" || inputTopography === "C") && crop.isdead === false) {
                crop.point += 2
            }
            if ((inputSeed / 100) * preferredBudget <= inputBudget && crop.isdead === false) {
                crop.point += 5
            }
            else if ((inputSeed / 100) * preferredBudget > inputBudget) {
                crop.point -= 7
                console.log(`${crop.name} died beacuse  budget`)
            }
            if (preferredLabor * (inputSeed / 100) <= preferredLabor && crop.isdead === false) {
                crop.point += 2
            }
            else if (preferredLabor * (inputSeed / 100) > inputWorkers) {
                crop.point -= 3
                console.log(`${crop.name} died beacuse  work`)
            }
            if ((inputWater === "D" && preferredWater !== "D") || (preferredWater === "A" && inputWater === "C")) {
                crop.point -= 1
                console.log(`${crop.name} died beacuse water `)
            }
            else if ((inputWater === "B" || inputWater === "C") && crop.isdead === false) {
                crop.point += 2
            }
            if ((inputSoil === "D" && preferredFertilizer !== "D") || (preferredFertilizer === "A" && inputSoil === "C")) {
                crop.isdead = true
                console.log(`${crop.name} died beacuse sol `)
            }
            else if ((inputSoil === "B" || inputSoil === "C") && crop.isdead === false) {
                crop.point += 4
            }
            if (inputWeed >= weedmin && inputWeed <= weedmax && crop.isdead === false) {
                crop.point += 1
            } else if (inputWeed < weedmin || inputWeed > weedmax) {
                crop.isdead = true
                console.log(`${crop.name} died beacuse weed`)
            }
            if(crop.point <= 6){
                crop.isdead = true
            }
        })
        cropInstances.sort((a, b) => b.point - a.point)
        setBestCrops(cropInstances)
    }

    const sortedListOfCrops = bestCrops.map((crop, index) => (
        <CropLink key={index} name={crop.name} point={crop.point} isdead={crop.isdead} image={crop.src} />
    ))

    return (
        <>
            {isFinished ? <div className='sortedListCrops'>{sortedListOfCrops}</div> : null}
            <TestForm onClick={onClickHandler} />
        </>
    )
}

export default Best4u
