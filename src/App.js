import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import './app.css';

import Menu from './menu.svg';
import CubeScroll from './components/CubeScroll';

import Home from './pages/Home';
import Members from './pages/Members';
import Exec from './pages/Exec';
import Join from './pages/Join';

const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    display: flex;
    padding-top: 25px;
`;

const ContainerNav = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    padding-right: 50px;
    flex-grow: 1;
    @media (max-width: 768px) {
        width: 30px;
        padding-right: 25px;
    }
`;

const MenuIcon = styled.img`
    width: 35px;
    user-select: none;
    @media (max-width: 768px) {
        width: 30px;
    }
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
    @media (max-width: 768px) {
        font-size: 17.5px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <CubeScroll />
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/members' element={<Members/>} />
                        <Route path='/exec' element={<Exec/>} />
                        <Route path='/join' element={<Join/>} />
                    </Routes>
                    <ContainerNav>
                        <MenuIcon src={Menu} />
                        <StyledLink to='/'>
                            <T5>Home</T5>
                        </StyledLink>
                        <StyledLink to='/members'>
                            <T5>Members</T5>
                        </StyledLink>
                        <StyledLink to='/exec'>
                            <T5>Executive Team</T5>
                        </StyledLink>
                        <StyledLink to='/join'>
                            <T5>Join</T5>
                        </StyledLink>
                    </ContainerNav>
                </Container>
            </BrowserRouter>
        );
    }
}

export default App;
