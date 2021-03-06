import styled from 'styled-components';

const PlayerCard = ({appState, clickHandler}) => {

    return (
        <Card>
            {appState.map((item, index) =>
                        <Container key={index} onClick={()=>clickHandler(index)}>
                        <img src={item[0]}/>
                        <h3>{item[1]}</h3>

                        </Container>
            )}

            
        </Card>
    )


    
}

const Card = styled.div`
display: flex;
flex-wrap: wrap;
background-color: blue;
margin-top: 8px;
margin-bottom: 8px;
border-style: solid;
border-color: black;
`


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;

height: 125px;
width: 125px;
background-color: grey;
border-style: solid;
border-width: 3px;
margin: 4px;
font-size: 9px;

@media (max-width: 500px) {
    height: 120px;
    width: 120px;
}
`


export default PlayerCard;