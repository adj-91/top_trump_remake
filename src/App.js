import React, {useEffect, useState} from 'react'
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import Menu from './components/Menu';
import PlayerCard from './components/PlayerCard';

const App = () => {

  const [player1Cards, setPlayer1Cards] = useState([]);
  const [player2Cards, setPlayer2Cards] = useState([]);
  const [gameState, setGameState] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);

  const clickHandler = (index) => {
    let card = selectedCard;
    
    card.push(player1Cards[index])
    if (card.length > 1) {
      card.shift();
    }
    setSelectedCard(card);

  }

  const gameStartHandler = async () => { //can use useeffect to hide/show components


    for (let i=0; i<32; i++) {
    let randomNum = Math.floor(Math.random()*151) +1
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
      const data = await res.json();

      let pokeCard = [
        
          data.sprites.front_default, 
          data.name,
          data.stats[1].base_stat,
          data.stats[3].base_stat
        
      ]

      if (i <16) {
      const cardArray = player1Cards;
       cardArray.push(pokeCard);
      setPlayer1Cards(cardArray);
      //  console.log(pokeObj[0].attack);    
      }
      else {
        const cardArray = player2Cards;
        cardArray.push(pokeCard);
        setPlayer2Cards(cardArray);
      }

    }
      setGameState(true);
  }

  return ( //should map from state eg. map(player1cards[index].image)
    <div>
      <p>hello world</p>

      <Player1/>
      <Player2/>
      <Menu gameStart={gameStartHandler}/>
    {gameState && <PlayerCard appState={player1Cards} clickHandler={clickHandler} />}
    </div>
  );
}

export default App;
