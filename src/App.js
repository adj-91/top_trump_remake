import React, {useState} from 'react'
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import Menu from './components/Menu';
import PlayerCard from './components/PlayerCard';

const App = () => {

  const [player1Cards, setPlayer1Cards] = useState([{image: null, name: null, attack: null, special: null}]);
  const [player2Cards, setPlayer2Cards] = useState([{image: null, name: null, attack: null, special: null}]);


  const gameStartHandler = async () => {


    for (let i=0; i<32; i++) {
    let randomNum = Math.floor(Math.random()*151) +1
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
      const data = await res.json();

      let pokeObj = {
        image: data.sprites.front_default,
        name: data.name,
        attack: data.stats[1].base_stat,
        special: data.stats[3].base_stat
      }

      if (i <16) {
      const cardArray = player1Cards;
      cardArray.push(pokeObj);
      setPlayer1Cards(cardArray);
      if (player1Cards[0].name === null) {
        player1Cards.splice(0, 1)
      }
      }
      else {
        const cardArray = player2Cards;
        cardArray.push(pokeObj);
        setPlayer2Cards(cardArray);
      }

    }

  }


  return (
    <div>
      <p>hello world</p>

      <Player1/>
      <Player2/>
      <Menu gameStart={gameStartHandler}/>
 <PlayerCard pokeImg={player1Cards[0].image}
                  name={player1Cards[0].name}
                  attack={player1Cards[0].attack} 
                  special={player1Cards[0].special} />
    </div>
  );
}

export default App;
