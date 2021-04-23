import React from 'react';


const Card = (props) => {

    return(
        <div className={"card " + (props.Clicked ? "animate" : "")} onClick={() => props.handleClick( props.id)}>
            <div className='img-container'>
                <img alt={props.mame} src={props.image}></img>
            </div>
            <div className='img-content'>
                <ul>
                    <li>
                        <strong>Name:</strong>{props.name}
                    </li>
                </ul>
            </div>

        </div>
    )
}


export default Card;