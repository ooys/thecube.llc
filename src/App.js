import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import './app.css';

import LogoIcon from './logo.svg';
import LogoVertical from './logoVert.svg';
import Menu from './menu.svg';

const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    display: flex;
    padding-top: 25px;
`;

const ContainerLogo = styled.div`
    width: 12.5%;
    height: 100%;
    position: relative;
`;

const ContainerBody = styled.div`
    width: 71.5%;
    height: 200vh;
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const ContainerNav = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 50px;
    flex-grow: 1;
`;

const Logo = styled.img`
    width: 75px;
    top: 190px;
    left: 30px;
    position: fixed;
`;

const LogoVert = styled.img`
    width: 75px;
    top: 20px;
    left: 30px;
    position: fixed;
`;

const MenuIcon = styled.img`
    width: 35px;
`;

const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
`;

const T1 = styled.div`
    font-family: Circular;
    font-size: 90px;
    color: #333333;
`;

const T2 = styled.div`
    font-family: HKGrotesk;
    font-size: 50px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 10px;
`;

const T3 = styled.div`
    font-family: HKGrotesk;
    font-size: 35px;
    font-weight: 600;
    color: #555555;
`;

const T4 = styled.div`
    font-family: HKGrotesk;
    font-size: 32.5px;
    font-weight: 500;
    color: #333333;
`;

const T5 = styled.div`
    font-family: HKGrotesk;
    font-size: 20px;
    font-weight: 600;
    color: #333333;
    cursor: pointer;
    margin-top: 5px;
    transition: all 0.2s ease;
    :hover {
        transform: scale(1.05);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function App() {
    return (
        <Container>
            <ContainerLogo>
                <LogoVert src={LogoVertical} />
                <Logo src={LogoIcon} />
            </ContainerLogo>
            <ContainerBody>
                <TitleDiv>
                    <T1>The Cube</T1>
                    <T3>Duke's premier entrepeneurial organization.</T3>
                </TitleDiv>
                <div style={{ height: '250px' }} />
                <T2>Our Mission</T2>
                <T4>
                    The Cube is Duke's premier entrepreneurship-focused
                    organization that lowers the barriers of entry to
                    entrepreneurship and provides members with the skills and
                    resources to pursue their own ventures. The Cube is also
                    dedicated to promoting entrepreneurship of any form within
                    the community and on Duke’s campus, including social
                    ventures. Our alumni have gone on to create multiple
                    multi-million dollar businesses, and have been featured on
                    Forbes, CNN, and more.
                </T4>
            </ContainerBody>
            <ContainerNav>
                <MenuIcon src={Menu} />
                <BrowserRouter>
                    <StyledLink to='/'>
                        <T5>Home</T5>
                    </StyledLink>
                    <StyledLink to='/members'>
                        <T5>Members</T5>
                    </StyledLink>
                    <StyledLink to='/rush'>
                        <T5>Rush</T5>
                    </StyledLink>
                </BrowserRouter>
            </ContainerNav>
        </Container>
    );
}

export default App;
