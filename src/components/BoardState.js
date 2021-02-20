import styled from 'styled-components';

const BoardState = ({gameState}) => {

    return (
        <Container>
            <p>{gameState}</p>
        </Container>
    )
    
}

const Container = styled.div`
align-self: center;
border-color: black;
border-style: solid;
width: 70%;
margin: 2vh;
`

export default BoardState;