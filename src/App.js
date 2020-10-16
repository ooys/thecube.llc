import React from 'react';
import styled from 'styled-components';
import './app.css';

import LogoIcon from './logo.svg';
import LogoVertical from './logoText.svg';

const Container = styled.div`
    width: 100vw;
    display: flex;
    padding-top: 25px;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const ContainerLogo = styled.div`
    width: 7.5%;
    height: 100%;
    padding-left: 50px;
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
    width: 50px;
    height: 50px;
`;

const LogoVert = styled.img`
    height: 125px;
`;

function App() {
    return (
        <Container>
            <ContainerLogo>
                <LogoVert src={LogoVertical}/>
                <Logo src={LogoIcon} />
            </ContainerLogo>
            <ContainerBody>
                <Logo src={LogoIcon} />
            </ContainerBody>
            <ContainerNav>
                <Logo src={LogoIcon} />
            </ContainerNav>
        </Container>
    );
}

export default App;
