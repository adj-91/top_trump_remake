import styled from 'styled-components';

const PlayerCard = ({appState, clickHandler}) => {

    return (
        <Card>
            <div>
            <p>player1 cards</p>
            </div>
            {appState.map((item, index) =>
                        <Container key={index} onClick={()=>clickHandler(index)}>
                        <img src={item[0]}/>
                        <h3>{item[1]}</h3>
                        <p>{`Atk: ${item[2]}`}</p>
                        <p>{`Spec: ${item[3]}`}</p>
                        </Container>
            )}

            
        </Card>
    )


    
}

const Card = styled.div`
display: flex;
flex-direction: row;
background-color: blue;
`


const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

height: 200px;
width: 125px;
background-color: grey;
border-style: solid;
border-width: 3px;
margin: 4px;
font-size: 9px;
/* &:hover {
    background-color: white;
} */
`


export default PlayerCard;