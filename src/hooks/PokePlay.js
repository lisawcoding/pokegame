import React, {useContext} from 'react';

import Pagination from './Pagination';
import {TeamA, TeamB} from './Team';
import CardsDiv from './CardsDiv';
import Music from './audio/Music';
import './PokePlay.scss';


import { PokeListContext } from '../contexts/PokelistContext';
import {TeamContext} from '../contexts/TeamContext';


function PokeList (props) {


    const {setCurUrl, gameStart, setGameStart, setLoading, perPokes} = useContext(PokeListContext);
    const {isWinner, setIsWinner, setTeam, setTeamA, setTeamB } = useContext(TeamContext);

    const replay=()=>{
        setLoading(true)
        setCurUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${perPokes}`)
        setIsWinner();
        setGameStart(false);
        setTeam([])
        setTeamA([])
        setTeamB([])
    }

    return (
        <div className='play-pannel'>
            <div className={isWinner!==undefined ? 'top-div top-div-active' : 'top-div'}>
                <TeamB/>
                {!gameStart && <p className='remark'>Choose Three Pokemons</p>}    
                {isWinner!==undefined && <div className='winlose-div'>
                        <h1 className='text-shadow' style={{color: isWinner===true && 'var(--yellow)'}}>{isWinner ? 'WINNER!!!!!!!!' : 'LOSER!!!!!!!!'}</h1>
                            <button className="replayBtn" onClick={replay}><i className="fas fa-redo"></i></button>
                        </div>}
                        <Music/>
                <TeamA/>
            </div>
            <div className='play-zone'>
            {gameStart && isWinner===undefined ? <button className='startBtn' disabled>Game Start!!!!!</button> : <div></div>}
                <CardsDiv/>
                {!gameStart && <Pagination/>}
            </div>
            
    </div>
    )
}

export default PokeList;

