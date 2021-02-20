import styled from 'styled-components';

const Player2 = ({p2chosenCard}) => {

    return (
        <Container>
            {/* <h3>Opponent's Card</h3> */}
            <PokeImg src={p2chosenCard[0][0]}/>
            <h3>{p2chosenCard[0][1]}</h3>
            <p>{`Atk: ${p2chosenCard[0][2]}`}</p>
            <p>{`Spec: ${p2chosenCard[0][3]}`}</p>
        </Container>
    )


    
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

height: 200px;
width: 125px;
background-color: grey;
border-style: solid;
border-width: 3px;
font-size: 9px;`

const PokeImg = styled.img`
height: 90px;
width: 90px;
`

export default Player2;