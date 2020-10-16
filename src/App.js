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
    width: 12.5%;
    height: 100%;
    position: relative;
`;

const ContainerBody = styled.div`
    width: 72.5%;
    height: 200vh;
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

const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    // background-color: gray;
    margin-top: 200px;
`;

const T1 = styled.div`
    font-family: Circular;
    font-size: 90px;
    color: #333333;
`;

const T3 = styled.div`
    font-family: HKGrotesk;
    font-size: 35px;
    font-weight: 600;
    color: #555555;
`;

function App() {
    return (
        <Container>
            <ContainerLogo>
                <LogoVert src={LogoVertical}/>
                <Logo src={LogoIcon} />
            </ContainerLogo>
            <ContainerBody>
                <TitleDiv>
                    <T1>
                        The Cube
                    </T1>
                    <T3>
                        Duke's premier entrepeneurial organization.
                    </T3>
                </TitleDiv>
            </ContainerBody>
            <ContainerNav>
            </ContainerNav>
        </Container>
    );
}

export default App;
