import React from 'react';
import styled from 'styled-components';
import './app.css';

import LogoIcon from './logo.svg';
import LogoVertical from './logoVert.svg';

const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    display: flex;
    padding-top: 25px;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const ContainerLogo = styled.div`
    width: 10%;
    height: 100%;
    position: relative;
`;

const ContainerBody = styled.div`
    width: 80%;
    height: 200vh;
    background-color: gray;
`;

const ContainerNav = styled.div`
    width: auto;
    height: 100%;
`;

const Logo = styled.img`
    width: 75px;
    top: 170px;
    left: 30px;
    position: absolute;
`;

const LogoVert = styled.img`
    width: 75px;
    top: 0;
    left: 30px;
    position: absolute;
`;

function App() {
    return (
        <Container>
            <ContainerLogo>
                <LogoVert src={LogoVertical}/>
                <Logo src={LogoIcon} />
            </ContainerLogo>
            <ContainerBody>
            </ContainerBody>
            <ContainerNav>
            </ContainerNav>
        </Container>
    );
}

export default App;
