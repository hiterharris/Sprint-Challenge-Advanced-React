import React, {useState} from 'react';
import Player from './Player';
import '../App.css';

const PlayerList = (player) => {
    return (
        <div className='PlayerList'>
            <Player player={player.player} />
        </div>
    );
}

export default PlayerList;