
import React from 'react';

function SpaceCard(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} alt="Saturn behind the Moon"/>
            <p>{props.explanation}</p>
        </div>
    );
}
export default SpaceCard;