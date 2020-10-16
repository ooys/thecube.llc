import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerBody = styled.div`
    width: 71.5%;
    height: 200vh;
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
            </ContainerBody>
        );
    }
}

export default Home;
