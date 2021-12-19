import React, { Component } from 'react';
import styled from 'styled-components';

import T1 from '../components/T1';
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

class Home extends Component {
    render() {
        return (
            <ContainerBody>
                <TitleDiv>
                    <T1>Join Us!</T1>
                    <T3>Our rush process:</T3>
                </TitleDiv>
                <div style={{ height: '150px' }} />
                <T4>
                    Every fall semester, we organize a rush process for member recruiting! 
                    We'll post online and around campus when we start. Rush lasts 2 weeks and has 2 rounds.
                </T4>
                <div style={{ height: '200px' }} />
            </ContainerBody>
        );
    }
}

export default Home;
