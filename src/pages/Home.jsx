import React, { Component } from 'react';
import styled from 'styled-components';

import AmazonLogo from '../logos/amazon.png';
import AndurilLogo from '../logos/anduril.png';
import AtomicLogo from '../logos/atomic.png';
import BostonLogo from '../logos/boston.png';
import BridgewaterLogo from '../logos/bridgewater.png';
import CitiLogo from '../logos/citi.png';
import ContraryLogo from '../logos/contrary.png';
import DropboxLogo from '../logos/dropbox.png';
import FacebookLogo from '../logos/facebook.png';
import GoldmanLogo from '../logos/goldman.png';
import HumanLogo from '../logos/human.png';
import MicrosoftLogo from '../logos/microsoft.png';
import MorganLogo from '../logos/morgan.png';
import OptiverLogo from '../logos/optiver.png';
import OptumLogo from '../logos/optum.png';
import PalantirLogo from '../logos/palantir.png';
import PearLogo from '../logos/pear.png';
import PendoLogo from '../logos/pendo.png';
import SomaLogo from '../logos/soma.png';
import UizardLogo from '../logos/uizard.png';

import ColdcallLogo from '../logos/coldcall.png';
import ToucanLogo from '../logos/toucan.png';
import FarmshotsLogo from '../logos/farmshots.png';
import CarpeLogo from '../logos/carpe.png';
import NeuroLogo from '../logos/neuro.png';
import SmartLogo from '../logos/smart.png';
import MatiLogo from '../logos/mati.png';
import BuddiesLogo from '../logos/buddies.png';

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
    @media (max-width: 768px) {
        font-size: 50px;
    }
`;

const T2 = styled.div`
    font-family: HKGrotesk;
    font-size: 50px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        font-size: 35px;
    }
`;

const T3 = styled.div`
    font-family: HKGrotesk;
    font-size: 35px;
    font-weight: 600;
    color: #555555;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

const T4 = styled.div`
    font-family: HKGrotesk;
    font-size: 32.5px;
    font-weight: 500;
    color: #333333;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const Table = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TableRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const Image = styled.img`
    height: 40px;
    max-width: 500px;
    margin-right: 25px;
    margin-top: 45px;
    @media (max-width: 768px) {
        width: 40%;
        margin-top: 35px;
        margin-right: 0;
    }
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
                <T2>
                    Our <span style={{ color: '#003CB1' }}>Mission</span>
                </T2>
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
                <T2>
                    What We've <span style={{ color: '#003CB1' }}>Built</span>
                </T2>
                <Table>
                    <TableRow>
                        <Image src={ToucanLogo} />
                        <Image src={FarmshotsLogo} />
                        <Image src={ColdcallLogo} />
                        <Image src={CarpeLogo} />
                    </TableRow>
                    <TableRow>
                        <Image src={NeuroLogo} />
                        <Image src={BuddiesLogo} />
                        <Image src={SmartLogo} />
                        <Image src={MatiLogo} />
                    </TableRow>
                </Table>
                <div style={{ height: '100px' }} />
                <T2>
                    What We <span style={{ color: '#003CB1' }}>Do</span>
                </T2>
                <T4>
                    We are a community of computer scientists, engineers,
                    economists, business developers, and more. We provide
                    comprehensive entrepreneurial support all the way from
                    evaluating product-market fit to technical development.
                    <br /> <br />
                    We host public and private speaking events, entrepreneurship
                    summits, and other professional development workshops. We
                    work closely with Duke’s entrepreneurship faculty to get our
                    members the resources and expertise necessary to succeed.
                    Moreover, our members and alumni are active in programs like
                    the Duke Start-up Challenge and Melissa & Doug
                    Entrepreneurship program.
                </T4>
                <div style={{ height: '100px' }} />
                <T2>
                    Our <span style={{ color: '#003CB1' }}>Experiences</span>
                </T2>
                <Table>
                    <TableRow>
                        <Image src={AmazonLogo} />
                        <Image src={MicrosoftLogo} />
                        <Image src={AndurilLogo} />
                        <Image src={BostonLogo} />
                        <Image src={PearLogo} />
                    </TableRow>
                    <TableRow>
                        <Image src={CitiLogo} />
                        <Image src={ContraryLogo} />
                        <Image src={DropboxLogo} />
                        <Image src={FacebookLogo} />
                        <Image src={GoldmanLogo} />
                    </TableRow>
                    <TableRow>
                        <Image src={AtomicLogo} />
                        <Image src={HumanLogo} />
                        <Image src={OptumLogo} />
                        <Image src={OptiverLogo} />
                        <Image src={BridgewaterLogo} />
                    </TableRow>
                    <TableRow>
                        <Image src={PalantirLogo} />
                        <Image src={MorganLogo} />
                        <Image src={PendoLogo} />
                        <Image src={SomaLogo} />
                        <Image src={UizardLogo} />
                    </TableRow>
                </Table>
                <div style={{ height: '100px' }} />
            </ContainerBody>
        );
    }
}

export default Home;
