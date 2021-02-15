import styled from 'styled-components';

const Menu = ({gameStart}) => {

    return (
        <Container>
            <h2>Menu</h2>
        <h2 onClick={gameStart}>Start</h2>
        </Container>
    )



}

const Container = styled.div`
background-color: red;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

export default Menu;