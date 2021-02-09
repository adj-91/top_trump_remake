import styled from 'styled-components';

const Menu = ({gameStart}) => {

    return (
        <Container>
            <h1>Menu</h1>
            <button onClick={gameStart}>press start</button>
        </Container>
    )



}

const Container = styled.div`
background-color: red;`

export default Menu;