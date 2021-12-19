import React, { Component } from 'react';
import styled from 'styled-components';

import T1 from '../components/T1';
import T2 from '../components/T2';
import T3 from '../components/T3';
import T4 from '../components/T4';

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

const Table = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-content: space-between;
    grid-gap: 10px;
`;

const StartupTable = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StartupLogoImage = styled.img`
    height: 40px;
    max-width: 500px;
    margin: 25px;
    margin-top: 45px;
    @media (max-width: 768px) {
        width: 40%;
        margin-top: 35px;
        margin-right: 0;
    }
`;

const LogoImage = styled.img`
    height: 95px;
    width: 95px;
    margin: 15px;
`;

class Home extends Component {
    render() {
        var experiences = [
            "amazon",
            "meta",
            "microsoft",
            "stripe",
            "slack",
            "dropbox",
            "ibm",
            "optum",
            "mckinsey",
            "bcg",
            "bain",
            "goldman",
            "jane",
            "optiver",
            "bridgewater",
            "morgan",
            "citi",
            "kp",
            "atomic",
            "contrary",
            "pear",
            "drf",
            "hc",
            "soma",
            "check",
            "retool",
            "anduril",
            "alloy",
            "pendo",
            "magical",
            "titan",
            "uizard",
            "curai",
        ]

        var startups = [
            "jailbreak",
            "toucan",
            "farmshots",
            "carpe",
            "mati",
            "scope",
            "neuro",
            "smart",
            "buddies",
            "coldcall",
        ]

        var experiencesLogoSplash = experiences.map((exp) => {
            return (
                <LogoImage
                    src={require(`../assets/company_logos/${exp
                        .split(' ')
                        .join('')
                        .toLowerCase()}.jpg`)}
                />
            );
        });

        var startupLogoSplash = startups.map((start) => {
            return (
                <StartupLogoImage
                    src={require(`../assets/startup_logos/${start
                        .split(' ')
                        .join('')
                        .toLowerCase()}.png`)}
                />
            );
        });

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
                <StartupTable>
                    {startupLogoSplash}
                </StartupTable>
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
                    {experiencesLogoSplash}
                </Table>
                <div style={{ height: '100px' }} />
            </ContainerBody>
        );
    }
}

export default Home;
