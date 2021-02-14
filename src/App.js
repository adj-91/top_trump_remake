import React, {useEffect, useState} from 'react'
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import Menu from './components/Menu';
import PlayerCard from './components/PlayerCard';
import BoardState from './components/BoardState';

const App = () => {

  const [player1Cards, setPlayer1Cards] = useState([]);
  const [player2Cards, setPlayer2Cards] = useState([]);
  const [limboCards, setLimboCards] = useState([]);
  const [p1Card, setp1Card] = useState([]);
  const [p2Card, setp2Card] = useState([]);
  const [gameState, setGameState] = useState(false);
  const [playedCard, setPlayedCard] = useState(false);
  const [playersTurn, setPlayersTurn] = useState(true);
  const [gameText, setGameText] = useState("welcome to pokemon Top Trumps! Press start to begin")
  const [playerAttack, setPlayerAttack] = useState();


  const winCondition = () => {
    let newGame = [];
    setPlayer1Cards(newGame);
    setPlayer2Cards(newGame);
  }

  const limboHandler = (player) => {

    let limbo = limboCards
    for (let i = 0; i < limbo.length; i++) {
      
      player.push(limbo[0]);
      limbo.shift();
    }

  }

  const gameLoop  = (val) => {
    let limbo = limboCards
    let player1deck = player1Cards
    let player2deck = player2Cards
    let player1card = p1Card[0];
    let player2card = p2Card[0];

    const roundResult = () => {
      setLimboCards(limbo);
      setPlayer1Cards(player1deck);
      setPlayer2Cards(player2deck);
      setPlayedCard(false);
      setp1Card([]);
      setp2Card([]);

      }

      // setPlayersTurn(false);
      // const p1AttackChoice = playerAttack;
      const p1Strength = p1Card[0][val];
      const p2Strength = p2Card[0][val];
      console.log(`consolelog:${p1Card[0][val]}`)

      if(p1Strength === p2Strength) {
        setGameText("Both values are equal! Cards are sent to limbo, but will be won by whoever wins the next round!")
        limbo.push(player1card);
        limbo.push(player2card); //check cards are being pushed correctly
      }
     else if (p1Strength > p2Strength) {
        console.log(p1Strength, p2Strength)
        setGameText("Player 1 wins! You get their card and any cards in limbo.")
        player1deck.push(player1card)
        player1deck.push(player2card);
        limboHandler(player1deck); //check cards are being pushed correctly
          }
          else {
            console.log(p1Strength, p2Strength);
            setGameText("Player 2 wins! They get your card and any cards in limbo.");
            player2deck.push(player1card)
            player2deck.push(player2card);
            limboHandler(player2deck);
          }
          //checks for win condition, if either player has no pokemon left they lose
          if (player1deck.length === 0) {
            setGameText("Player 2 wins the game! Player 1 ran out of pokemon.")
            winCondition();
          }
          else if (player2deck.length === 0) {
            setGameText("Player 1 wins the game! Player 2 ran out of pokemon.")
            winCondition();
          }
          setTimeout(roundResult, 4000);

      }
    

  const clickHandler = (index) => {
    let card = p1Card;
    let opponentCard = p2Card;
    let p1deck = player1Cards;
    let p2deck = player2Cards;
    let random = Math.floor(Math.random()*p2deck.length);

    
    
    card.push(p1deck[index])
    if (card.length > 1) {
      card.shift();
    }
    p1deck.splice(index, 1);

    opponentCard.push(p2deck[random])
    if (opponentCard.length > 1) {
      opponentCard.shift();
    }
    p2deck.splice(random, 1);

    setp1Card(card);
    setp2Card(opponentCard);
    setPlayedCard(true);
    setPlayer1Cards(p1deck);
    setPlayer2Cards(p2deck);
    setGameText("Choose attack or special, choose a higher value than your opponent to win the round!");
  }

  const gameStartHandler = async () => {


    for (let i=0; i<6; i++) {
    let randomNum = Math.floor(Math.random()*151) +1
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
      const data = await res.json();

      let pokeCard = [
        
          data.sprites.front_default, 
          data.name,
          data.stats[1].base_stat,
          data.stats[3].base_stat
        
      ]

      if (i <3) {
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
      setGameText("Choose a card");

  }

  return (
    <div>
      <h1>Pokemon Top Trump</h1>

      {playedCard && <Player2 p2chosenCard={p2Card}/>}
      <BoardState gameState={gameText}/>
      {playedCard && <Player1 p1chosenCard={p1Card} playersTurn={playersTurn}
      attackHandle={gameLoop}/>}
      <Menu gameStart={gameStartHandler}/>
      {gameState && <PlayerCard appState={player1Cards} clickHandler={clickHandler} />}
    </div>
  );
}

export default App;