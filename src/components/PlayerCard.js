import styled from 'styled-components';

const PlayerCard = ({name, attack, special, pokeImg}) => {

    return (
        <Container>
            <p>player1 cards</p>
            <img src={pokeImg}/>
            <h3>{name}</h3>
            <p>{attack}</p>
            <p>{special}</p>
            
        </Container>
    )


    
}

const Container = styled.div`
height: 150px;
width: 100px;
background-color: grey;`

export default PlayerCard;