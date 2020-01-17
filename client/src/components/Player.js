import React, {useState} from 'react';
import '../App.css';

const Player = (player) => {
    return (
        <div className='Player'>
            <h1>{player.player.name}</h1>
            <h2>{player.player.country}</h2>
            <h3>{player.player.searches}</h3>
        </div>
    );
}

export default Player;