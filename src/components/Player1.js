import styled from 'styled-components';

const Player1 = ({p1Card}) => {

    console.log(p1Card);

    return (
        <Container>
            <h1>Player1</h1>
            <img src={p1Card}/>
            <h1>{p1Card}</h1>
            <p>{p1Card}</p>
            <p>{p1Card}</p>
        </Container>
    )


    
}

const Container = styled.div`
background-color: cyan;`

export default Player1;