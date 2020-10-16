import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import './app.css';

import LogoIcon from './logo.svg';
import LogoVertical from './logoVert.svg';
import Menu from './menu.svg';

import Home from './pages/Home';

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
    user-select: none;
`;

const LogoVert = styled.img`
    width: 75px;
    top: 20px;
    left: 30px;
    position: fixed;
    user-select: none;
`;

const MenuIcon = styled.img`
    width: 35px;
    user-select: none;
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
        <BrowserRouter>
            <Container>
                <ContainerLogo>
                    <LogoVert src={LogoVertical} />
                    <Logo src={LogoIcon} />
                </ContainerLogo>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                <ContainerNav>
                    <MenuIcon src={Menu} />
                    <StyledLink to='/'>
                        <T5>Home</T5>
                    </StyledLink>
                    <StyledLink to='/members'>
                        <T5>Members</T5>
                    </StyledLink>
                    <StyledLink to='/rush'>
                        <T5>Rush</T5>
                    </StyledLink>
                </ContainerNav>
            </Container>
        </BrowserRouter>
    );
}

export default App;
