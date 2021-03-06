import React from 'react';
import {Link} from 'react-router-dom'
import './Home.scss'

function Home(props){

    return (
            <div className='Home' onClick={props.openFullscreen}>
                <ul className='menu'>
                    <Link to='/pokeplay' className='index-btn'><span>start game</span></Link>
                    <Link to='/scoresheet' className='index-btn'><span>scroe sheet</span></Link>
                </ul>
            </div>            
    )
}

export default Home;
