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
    margin-bottom: 250px;
`;

const Section = styled.div`
    margin-bottom: 75px;
`;

const Table = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-content: space-between;
    grid-gap: 10px;
    @media (max-width: 800px) {
        grid-template-columns: repeat(auto-fill, 75px);
        grid-gap: 5px;
    }
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
    @media (max-width: 800px) {
        width: 40%;
        margin-top: 35px;
        margin-right: 0;
    }
    // for mobile
    @media (max-width: 400px) {
        width: auto;
    }
`;

const LogoImage = styled.img`
    height: 95px;
    width: 95px;
    margin: 15px;
    cursor: pointer;
    user-select: none;
    user-drag: none;
    @media (max-width: 800px) {
        height: 65px;
        width: 65px;
        margin: 5px;
    }
    :hover {
        transform: scale(1.05);
    }
`;

class Home extends Component {
    render() {
        var experiences = {
            amazon: "https://www.amazon.com/",
            meta: "https://meta.com/",
            microsoft: "https://microsoft.com/",
            salesforce: "https://salesforce.com/",
            stripe: "https://stripe.com/",
            palantir: "https://www.palantir.com/",
            slack: "https://slack.com/",
            dropbox: "https://dropbox.com/",
            ibm: "https://ibm.com/",
            optum: "https://optum.com/",
            mckinsey: "https://www.mckinsey.com/",
            bcg: "https://www.bcg.com/",
            bain: "https://www.bain.com/",
            goldman: "https://www.goldmansachs.com/",
            vanguard: "https://vanguard.com/",
            jane: "https://www.janestreet.com/",
            optiver: "https://optiver.com/",
            bridgewater: "https://www.bridgewater.com/",
            morgan: "https://www.morganstanley.com/",
            citi: "https://www.citi.com/",
            kp: "https://kleinerperkins.com/",
            atomic: "https://atomic.vc/",
            contrary: "https://contrarycap.com/",
            pear: "https://pear.vc/",
            drf: "https://drf.vc/",
            hc: "https://human.capital/",
            soma: "https://www.somacap.com/",
            alumniventures: "https://www.av.vc/",
            check: "https://www.checkhq.com/",
            ondeck: "https://beondeck.com/",
            retool: "https://retool.com/",
            anduril: "https://www.anduril.com/",
            alloy: "https://runalloy.com/",
            coil: "https://coil.com/",
            pendo: "https://pendo.io/",
            sym: "https://symops.com/",
            magical: "https://getmagical.com/",
            islands: "https://islands.xyz/",
            titan: "https://www.titan.com/",
            uizard: "https://uizard.com/",
            curai: "https://curaihealth.com/",
            untitled: "https://untitledinbrackets.com/",
            infinitus: "https://www.infinitus.ai/",
            replicant: "https://www.replicant.ai/",
            glowforge: "https://glowforge.com/",
            balanced: "https://www.hellobalanced.com/",
            leap: "https://www.leap.work/",
            dccc: "https://dccc.org/",
        }

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


        var experiencesLogoSplash = Object.keys(experiences).sort().map((expKey) => {
            return (
                <a href={experiences[expKey]} target="_blank">
                    <LogoImage
                        src={require(`../assets/company_logos/${expKey
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                </a>
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
                <Section>
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
                </Section>
                <Section>
                    <T2>
                        What We've <span style={{ color: '#003CB1' }}>Built</span>
                    </T2>
                    <T4>
                        We love building! Here are just a few startups that we've built.
                    </T4>
                    <StartupTable>
                        {startupLogoSplash}
                    </StartupTable>
                </Section>
                <Section>
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
                </Section>
                <Section>
                    <T2>
                        Our <span style={{ color: '#003CB1' }}>Experiences</span>
                    </T2>
                    <T4 style={{ marginBottom: "20px" }}>
                        Here are some of the places we've worked at before.
                        We're proud to have supported these companies, whether multi-billion dollar public firms or private startups in their infancy,
                        in their missions.
                    </T4>
                    <Table>
                        {experiencesLogoSplash}
                    </Table>
                </Section>
            </ContainerBody>
        );
    }
}

export default Home;
