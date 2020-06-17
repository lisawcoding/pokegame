import React from 'react';
import './App.scss';
import GameApp from './hooks/GameApp';

import {PokeListProvider} from './contexts/PokelistContext';
import {TeamProvider} from './contexts/TeamContext'
import {ScoreProvider} from './contexts/ScoreContext';


function App() {

  window.addEventListener("hashchange", function(){
    console.log('hash change')
})

  return (
    <PokeListProvider>
      <TeamProvider>
        <ScoreProvider>
            <GameApp/>
          </ScoreProvider>
        </TeamProvider>              
      </PokeListProvider>
  );
}

export default App;