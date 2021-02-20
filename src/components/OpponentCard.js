import styled from 'styled-components';

const opponentCard = ({appState}) => {

    return (
        <Card>
            {appState.map((item, index) =>
                        <Container key={index}>
                        <p>Card {index+1}</p>
                        </Container>
            )}
        </Card>
    )


    
}

const Card = styled.div`
display: flex;
flex-wrap: wrap;
background-color: red;
margin-top: 8px;
margin-bottom: 8px;
border-style: solid;
border-color: black;
`


const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

height: 125px;
width: 125px;
background-color: grey;
border-style: solid;
border-width: 3px;
margin: 4px;
font-size: 9px;

@media (max-width: 500px) {
    height: 20px;
    width: 65px;
}
`


export default opponentCard;