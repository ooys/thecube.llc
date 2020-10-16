import React, { Component } from 'react';
import styled from 'styled-components';

import AndurilLogo from '../logos/anduril.svg';
import AtomicLogo from '../logos/atomic.png';
import BridgewaterLogo from '../logos/bridgewater.png';
import CitiLogo from '../logos/citi.png';
import ColdcallLogo from '../logos/coldcall.png';
import ContraryLogo from '../logos/contrary.png';
import DropboxLogo from '../logos/dropbox.png';
import FacebookLogo from '../logos/facebook.png';
import GoldmanLogo from '../logos/goldman.png';
import HumanLogo from '../logos/human.png';
import MorganLogo from '../logos/morgan.png';
import OptiverLogo from '../logos/optiver.png';
import OptumLogo from '../logos/optum.png';
import PalantirLogo from '../logos/palantir.png';
import PearLogo from '../logos/pear.png';
import PendoLogo from '../logos/pendo.png';
import SomaLogo from '../logos/soma.png';
import UizardLogo from '../logos/uizard.png';

const ContainerBody = styled.div`
    width: 71.5%;
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
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
    margin-bottom: 15px;
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

const Table = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Image = styled.img`
    height: 50px;
    max-width: 500px;
    margin-right: 25px;
    margin-top: 45px;
`;

class Home extends Component {
    render() {
        return (
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
                <div style={{ height: '100px' }} />
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
                <div style={{ height: '100px' }} />
                <T2>Our Experiences</T2>
                <Table>
                    {/* <Image src={AndurilLogo}/> */}
                    <Image src={AtomicLogo}/>
                    <Image src={BridgewaterLogo}/>
                    <Image src={CitiLogo}/>
                    <Image src={ColdcallLogo}/>
                    <Image src={ContraryLogo}/>
                    <Image src={DropboxLogo}/>
                    <Image src={FacebookLogo}/>
                    <Image src={GoldmanLogo}/>
                    <Image src={HumanLogo}/>
                    <Image src={MorganLogo}/>
                    <Image src={OptiverLogo}/>
                    <Image src={OptumLogo}/>
                    <Image src={PalantirLogo}/>
                    <Image src={PearLogo}/>
                    <Image src={PendoLogo}/>
                    <Image src={SomaLogo}/>
                    <Image src={UizardLogo}/>
                </Table>
                <div style={{ height: '100px' }} />
            </ContainerBody>
        );
    }
}

export default Home;
