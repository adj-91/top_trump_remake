import styled from 'styled-components';

const Player2 = ({p2chosenCard}) => {

    console.log(p2chosenCard);

    return (
        <Container>
            <h1>Opponent's Card</h1>
            <img src={p2chosenCard[0][0]}/>
            <h1>{p2chosenCard[0][1]}</h1>
            <p>{`Attack: ${p2chosenCard[0][2]}`}</p>
            <p>{`Special: ${p2chosenCard[0][3]}`}</p>
        </Container>
    )


    
}

const Container = styled.div`
background-color: green;`

export default Player2;