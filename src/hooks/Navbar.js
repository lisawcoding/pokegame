import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    withRouter
} from "react-router-dom";

import {TeamContext} from '../contexts/TeamContext';
import SearchBar from './SearchBar';
import './Navbar.scss';



function Navbar (props){
    
    const {isWinner, setIsWinner, setTeam, setTeamA, setTeamB, gameStart } = useContext(TeamContext);

    return (
        <>
        { props.location.pathname!=='/' &&
            <nav id='nav'>
                {props.location.pathname==='/pokeplay' ? <SearchBar/> : <div></div>}
                <ul ref={props.fullscreenModal}>
                    <button className='btn btn-animate tooltip fullscreenBtn' onClick={props.openFullscreen} >[]
                        <span className="tooltiptext">full screen</span>
                    </button>
                    <NavLink exact className='btn btn-white btn-animate tooltip' activeClassName='active-link' to='/' data-lan='tab'>
                        <i className="fas fa-home"></i><span className="tooltiptext">home</span>
                        </NavLink>
                    <NavLink exact className='btn btn-white btn-animate tooltip' activeClassName='active-link' to='/pokeplay' data-lan='tab'>
                        <i className="fas fa-play"></i><span className="tooltiptext">play game</span>
                        </NavLink>
                    <NavLink exact className='btn btn-white btn-animate tooltip scorelink' activeClassName='active-link' to='/scoresheet' data-lan='tab'>
                        <i className="fas fa-clipboard"></i><span className="tooltiptext">score sheet</span>
                        </NavLink>
                </ul>  
            </nav>         
        }
        </>
    )
}
  
export default withRouter(Navbar);