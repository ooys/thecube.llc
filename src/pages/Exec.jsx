import React, { Component } from 'react';
import styled from 'styled-components';

import T1 from '../components/T1';
import T3 from '../components/T3';
import T5 from '../components/T5';

const ContainerBody = styled.div`
    width: 70%;
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

const PersonTable = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: space-between;
    grid-gap: 80px;
    margin-top: 25px;
    margin-bottom: 50px;
    @media (max-width: 800px) {
        grid-template-columns: repeat(auto-fill, 100px);
        margin-bottom: 50px;
    }
`;

const PersonContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    @media (max-width: 800px) {
        width: 125px;
        margin-bottom: 25px;
    }
`;

const PersonImage = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 6px;
    object-fit: cover;
    margin-bottom: 20px;
    transition: all 0.2s ease;
    :hover {
        transform: scale(1.05);
    }
    @media (max-width: 800px) {
        width: 100px;
        height: 100px;
    }
`;

class Exec extends Component {
    render() {
        
        

        return (
            <ContainerBody>
                <TitleDiv>
                    <T1>Executive Team</T1>
                    <T3><span role="img" aria-label="wave">👑</span> The people who make it happen!</T3>
                </TitleDiv>
                <div style={{ height: '250px' }} />
                <PersonTable>
                    <PersonContainer>
                        <PersonImage
                            src={require(`../assets/people/nilsroede.jpg`)}
                        />
                        <T3>{'Nils Roede'}</T3>
                        <T5>{'President'}</T5>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage
                                src={require(`../assets/people/sonalisanjay.jpg`)}
                            />
                            <T3>{'Sonali Sanjay'}</T3>
                            <T5>{'Vice President'}</T5>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage
                                src={require(`../assets/people/chrisliang.jpg`)}
                            />
                            <T3>{'Chris Liang'}</T3>
                            <T5>{'Treasurer'}</T5>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage
                            src={require(`../assets/people/judyzhong.jpg`)}
                        />
                        <T3>{'Judy Zhong'}</T3>
                        <T5>{'Social'}</T5>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage
                                src={require(`../assets/people/adenclemente.jpg`)}
                            />
                            <T3>{'Aden Clemente'}</T3>
                            <T5>{'Recruitment'}</T5>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage
                                src={require(`../assets/people/claybromley.jpg`)}
                            />
                            <T3>{'Clay Bromley'}</T3>
                            <T5>{'New Member Education'}</T5>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage
                            src={require(`../assets/people/athenayao.jpg`)}
                        />
                        <T3>{'Athena Yao'}</T3>
                        <T5>{'Alumni'}</T5>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage
                                src={require(`../assets/people/celinayou.jpg`)}
                            />
                            <T3>{'Celina You'}</T3>
                            <T5>{'Marketing'}</T5>
                    </PersonContainer>
                </PersonTable>
                
            </ContainerBody>
        );
    }
}

export default Exec;
