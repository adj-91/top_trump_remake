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
`

export default BoardState;