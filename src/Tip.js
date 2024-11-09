import React from 'react'

function Tip(props) {
    return (
        <div className='tipconta'>
            <img src={props.img} alt={props.name} />
            <ol className='tip-list-conta'>
                {Object.entries(props.steps).map(([key, value], index) => (
                    <li key={index}> Step:
                        <details>
                            <summary>{key}</summary>
                            {value}
                        </details>
                    </li>
                ))}
            </ol>
            <p>{props.desc}</p>
        </div>
    )
}
export default Tip