import styled from 'styled-components';

const PlayerCard = ({appState, clickHandler}) => {


    // const clickHandler = () => {
    //     console.log("clicked!")
    // }

    return (
        <div>
            <p>player1 cards</p>
            {appState.map((item, index) =>
                        <Container key={index} onClick={()=>clickHandler(index)}>
                        <img src={item[0]}/>
                        <h3>{`Name: ${item[1]}`}</h3>
                        <p>{`Attack: ${item[2]}`}</p>
                        <p>{`Special: ${item[3]}`}</p>
                        </Container>
            )}

            
        </div>
    )


    
}

const Container = styled.div`
height: 300px;
width: 200px;
background-color: grey;
border-style: solid;
border-width: 3px;
margin: 4px;
&:hover {
    background-color: white;
}
`


export default PlayerCard;