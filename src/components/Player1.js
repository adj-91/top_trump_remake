import styled from 'styled-components';

const Player1 = ({p1chosenCard, playersTurn, attackHandle}) => {

    console.log(p1chosenCard);

    return (
        <Container>
            <h1>Player's Card</h1>
            <p>{ playersTurn ? "Your turn" : "Opponent's turn"}</p>
            <img src={p1chosenCard[0][0]}/>
            <h1>{p1chosenCard[0][1]}</h1>
            <p onClick={()=>attackHandle(2)}>{`Attack: ${p1chosenCard[0][2]}`}</p>
            <p onClick={()=>attackHandle(3)}>{`Special: ${p1chosenCard[0][3]}`}</p>
        </Container>
    )


    
}

const Container = styled.div`
background-color: cyan;`

export default Player1;