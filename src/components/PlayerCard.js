import styled from 'styled-components';

const PlayerCard = ({appState, clickHandler}) => {

    return (
        <Card>
            <p>player1 cards</p>
            {appState.map((item, index) =>
                        <Container key={index} onClick={()=>clickHandler(index)}>
                        <img src={item[0]}/>
                        <h3>{item[1]}</h3>
                        <p>{`Attack: ${item[2]}`}</p>
                        <p>{`Special: ${item[3]}`}</p>
                        </Container>
            )}

            
        </Card>
    )


    
}

const Card = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`


const Container = styled.div`
height: 230px;
width: 125px;
background-color: grey;
border-style: solid;
border-width: 3px;
margin: 4px;
&:hover {
    background-color: white;
}
`


export default PlayerCard;