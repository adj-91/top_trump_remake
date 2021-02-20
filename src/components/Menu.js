import styled from 'styled-components';

const Menu = ({gameStart, helpText}) => {

    return (
        <Container>
        <h2 onClick={gameStart}>Start</h2>
        </Container>
    )



}

const Container = styled.div`
background-color: #f2e4e4;
display: flex;
flex-direction: row;
justify-content: space-evenly;

border-style: double;
border-width: 5px;
`

export default Menu;