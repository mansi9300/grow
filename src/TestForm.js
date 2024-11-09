import React, { useState } from 'react';

function TestForm(props) {
    const [range, setRangeValue] = useState(1)
    const onChangeHandler = (event) => {
        setRangeValue(event.target.value);
    };
    return (
        <>
            <form id="testForm" className="form-container">

                <label id="firstq" htmlFor="q1">1. What is the average temperature in your region (°C)? (+7 if correct if not viable)</label><br />
                <div className="answers">
                    <input type="number" id="q1" name="temperature" required />
                </div><br />

                <label htmlFor="q2">2. How much rain does your farm receive? (+2 if correct if not -5)</label><br />
                <div className="answers">
                    <input type="number" id="q2" name="rainfall" required />
                </div><br />

                <label htmlFor="q3a">3. Is the topography of your land suitable for growing this crop (e.g., flat or hilly)? (+2 if correct if not -5)</label><br />
                <div className="answers">
                    <input type="radio" id="q3a" name="topography" value="A" required />
                    <label htmlFor="q3a">A. The land is flat and ideal for farming.</label><br />
                    <input type="radio" id="q3b" name="topography" value="B" />
                    <label htmlFor="q3b">B. The land is slightly hilly but manageable.</label><br />
                    <input type="radio" id="q3c" name="topography" value="C" />
                    <label htmlFor="q3c">C. The land is hilly, requiring extra effort to cultivate.</label><br />
                    <input type="radio" id="q3d" name="topography" value="D" />
                    <label htmlFor="q3d">D. The land is unsuitable for growing crops.</label><br /><br />
                </div>

                <label htmlFor="q4">4. What is your available budget for cultivating this crop (in USD)? ((+5 if correct if not -7))</label><br />
                <div className="answers">
                    <input type="number" id="q4" name="budget" min="0" required />
                </div><br />

                <label htmlFor="q5a">5. Do you have access to sufficient water sources (e.g., rivers, wells)? (+2 if correct if not -3)</label><br />
                <div className="answers">
                    <input type="radio" id="q5a" name="waterSource" value="A" required />
                    <label htmlFor="q5a">A. Yes, water is easily accessible year-round.</label><br />
                    <input type="radio" id="q5b" name="waterSource" value="B" />
                    <label htmlFor="q5b">B. Water is available but limited during dry seasons.</label><br />
                    <input type="radio" id="q5c" name="waterSource" value="C" />
                    <label htmlFor="q5c">C. Water is scarce, but manageable with proper irrigation techniques.</label><br />
                    <input type="radio" id="q5d" name="waterSource" value="D" />
                    <label htmlFor="q5d">D. No, I do not have sufficient water sources for this crop.</label><br /><br />
                </div>

                <label htmlFor="q6a">6. Does your land have good soil fertility, or will fertilizer be required? (+4 if correct if not viable)</label><br />
                <div className="answers">
                    <input type="radio" id="q6a" name="fertilizer" value="A" required />
                    <label htmlFor="q6a">A. Yes, the soil is fertile and no fertilizer is needed.</label><br />
                    <input type="radio" id="q6b" name="fertilizer" value="B" />
                    <label htmlFor="q6b">B. Fertilizer will be required to maintain soil health.</label><br />
                    <input type="radio" id="q6c" name="fertilizer" value="C" />
                    <label htmlFor="q6c">C. The soil is not fertile and requires significant amendments.</label><br />
                    <input type="radio" id="q6d" name="fertilizer" value="D" />
                    <label htmlFor="q6d">D. The soil is completely unsuitable for this crop.</label><br /><br />
                </div>

                <label htmlFor="q7">7. On a scale of 1 to 10, how strict are your local rules against drug-related crops? (+1 points if correct if correct if not viable)</label><br />
                <div className="answers">
                    {range}
                    <input type="range" id="q7" name="weedControl" min="1" value={range} onChange={onChangeHandler} max="10" required />
                </div><br />

                <label htmlFor="q8">8. How many people are available to help with this crop's cultivation? (+2 points if correct if correct if not -3)</label><br />
                <div className="answers">
                    <input type="number" id="q8" name="labor" min="0" required />
                </div><br />

                <label htmlFor="q9">8. How many seed are you going to plant? (Required for calculation purposes)</label><br />
                <div className="answers">
                    <input type="number" id="q9" name="crops" min="0" required />
                </div><br />


                <button type="submit" className="submit-btn" onClick={props.onClick}>Submit</button>
            </form>
        </>
    );
}

export default TestForm;