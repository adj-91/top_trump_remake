import styled from 'styled-components';

const Player1 = ({p1chosenCard, attackHandle}) => {

    return (
        <Container>
            {/* <h3>Player's Card</h3> */}
            <PokeImg src={p1chosenCard[0][0]}/>
            <h3>{p1chosenCard[0][1]}</h3>
            <p onClick={()=>attackHandle(2)}>{`Atk: ${p1chosenCard[0][2]}`}</p>
            <p onClick={()=>attackHandle(3)}>{`Spec: ${p1chosenCard[0][3]}`}</p>
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

export default Player1;