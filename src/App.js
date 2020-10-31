import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import './app.css';

import LogoIcon from './logoIcon.svg';
import LogoBox from './logoBox.svg';
import LogoVertical from './logoVert.svg';
import Menu from './menu.svg';

import Home from './pages/Home';
import Members from './pages/Members';

const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    display: flex;
    padding-top: 25px;
`;

const ContainerLogo = styled.div`
    width: 15%;
    height: 100%;
    position: relative;
    @media (max-width: 768px) {
        width: 10%;
    }
`;

const ContainerNav = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 50px;
    flex-grow: 1;
    @media (max-width: 768px) {
        width: 30px;
        padding-right: 25px;
    }
`;

const Logo = styled.img`
    width: 75px;
    top: 20px;
    left: 30px;
    position: fixed;
    user-select: none;
    @media (max-width: 768px) {
        display: none;
    }
`;

const LogoVert = styled.img`
    width: 75px;
    top: 20px;
    left: 30px;
    position: fixed;
    user-select: none;
    @media (max-width: 768px) {
        display: none;
    }
`;

const LogoMain = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 25px;
    display: none;
    @media (max-width: 768px) {
        display: block;
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
    constructor(props) {
        super(props);
        this.pos = 0;
        this.logoRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        this.logoRef.current.style.top = '20px';
    }

    onScroll = (e) => {
        let component = this.logoRef.current.style;
        if (component.top >= 190) {
            return;
        }
        let st = window.scrollY;
        // scroll up
        if (st > this.pos) {
            let newPos =
                parseInt(component.top.replace(/px/, '')) + (st - this.pos);
            if (newPos >= 20 && newPos <= 190) {
                component.top = newPos + 'px';
            }
        }
        // scroll down
        else if (st <= 400) {
            let newPos =
                parseInt(component.top.replace(/px/, '')) + (st - this.pos);
            if (newPos >= 20 && newPos <= 190) {
                component.top = newPos + 'px';
            }
        }

        this.pos = st <= 0 ? 0 : st;
    };

    render() {
        return (
            <BrowserRouter>
                <Container>
                    <ContainerLogo>
                        <LogoVert src={LogoVertical} />
                        <Logo src={LogoIcon} ref={this.logoRef} />
                        <LogoMain src={LogoBox} />
                    </ContainerLogo>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/members' component={Members} />
                    </Switch>
                    <ContainerNav>
                        <MenuIcon src={Menu} />
                        <StyledLink to='/'>
                            <T5>Home</T5>
                        </StyledLink>
                        <StyledLink to='/members'>
                            <T5>Members</T5>
                        </StyledLink>
                        <StyledLink to='/gallery'>
                            <T5>Gallery</T5>
                        </StyledLink>
                    </ContainerNav>
                </Container>
            </BrowserRouter>
        );
    }
}

export default App;
