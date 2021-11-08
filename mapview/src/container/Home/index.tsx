import React from 'react'
import Map from '../../components/Map'
//import Map from '../../components/Map/index'
import {Container, Aside, StyledApp, Header} from './style'

export default function Home(){
    return (
        <>
        <Header>Logo NetLume</Header>
        <Container>
        <Aside>
            <div> Control Panel </div>
        </Aside>
        <StyledApp>
            <Map/>
            
            <p>Display</p>
            </StyledApp>
        
        </Container>
        </>


    )
};