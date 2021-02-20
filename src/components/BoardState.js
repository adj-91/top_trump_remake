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
border-style: double;
border-width: 5px;
width: 90%;
margin: 2vh;

background-color: #f2e4e4;
`

export default BoardState;