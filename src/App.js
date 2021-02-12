import React, {useEffect, useState} from 'react'
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import Menu from './components/Menu';
import PlayerCard from './components/PlayerCard';

const App = () => {

  const [player1Cards, setPlayer1Cards] = useState([]);
  const [player2Cards, setPlayer2Cards] = useState([]);
  const [limboCards, setLimboCards] = useState([]);
  const [p1Card, setp1Card] = useState([]);
  const [p2Card, setp2Card] = useState([]);
  const [gameState, setGameState] = useState(false);
  const [playedCard, setPlayedCard] = useState(false);
  const [playersTurn, setPlayersTurn] = useState(true);


  const gameLoop = () => {

    setPlayedCard(true);
    console.log(`p1 ${p1Card}, p2 ${p2Card}`);
    
    }


  const clickHandler = async (index) => {
    let card = p1Card;
    let opponentCard = p2Card;
    let random = Math.floor(Math.random()*player2Cards.length);
    
    
    card.push(player1Cards[index])
    if (card.length > 1) {
      card.shift();
    }
    opponentCard.push(player2Cards[random])
    if (opponentCard.length > 1) {
      opponentCard.shift();
    }

    setp1Card(card);
    setp2Card(opponentCard);
    gameLoop();
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
      }
      else {
        const cardArray = player2Cards;
        cardArray.push(pokeCard);
        setPlayer2Cards(cardArray);
      }

    }
      setGameState(true);
  }

  return (
    <div>
      <h1>Pokemon Top Trump</h1>

      {playedCard && <Player2 p1Card={p1Card}/>}
      {playedCard && <Player1 p2Card={p2Card}/>}
      <Menu gameStart={gameStartHandler}/>
      {gameState && <PlayerCard appState={player1Cards} clickHandler={clickHandler} />}
    </div>
  );
}

export default App;