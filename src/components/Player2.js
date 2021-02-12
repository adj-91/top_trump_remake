import styled from 'styled-components';

const Player2 = ({p2Card}) => {

    console.log(p2Card);

    return (
        <Container>
            <h1>Player2</h1>
            <img src={p2Card}/>
            <h1>{p2Card}</h1>
            <p>{p2Card}</p>
            <p>{p2Card}</p>
        </Container>
    )


    
}

const Container = styled.div`
background-color: green;`

export default Player2;