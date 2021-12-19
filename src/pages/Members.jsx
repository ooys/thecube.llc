import React, { Component } from 'react';
import styled from 'styled-components';

import T1 from '../components/T1';
import T2 from '../components/T2';
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
    grid-gap: 5px;
    margin-top: 25px;
    margin-bottom: 50px;
    @media (max-width: 800px) {
        grid-template-columns: repeat(auto-fill, 100px);
        margin-bottom: 50px;
    }
`;

const PersonContainer = styled.div`
    width: 200px;
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
    width: 200px;
    height: 200px;
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

class Members extends Component {
    render() {
        var c2020 = [
            'Ethan Holland',
            'Michael Tan',
            'Gaurav Uppal',
            'Isabel Senior',
            'Trishul Nagenalli',
            'Jie Cai',
        ];

        var c2021 = [
            'Suchir Bhatt',
            'Sam Chan',
            'Kate Chen',
            'Aayush Goradia',
            'Andy Ju',
            'Jaiveer Katariya',
            'Alex Kornegay',
            'Yash Patil',
            'Charlie Todd',
            'Rohan Reddy',
            'Alex Balfanz',
            'Varun Nair'
        ];
        var c2022 = [
            'Vineet Alaparthi',
            'Justin Tandon',
            'David Elias',
            'Aaron Chai',
            'Raymond Chen',
            'Andrew Claxton',
            'Donald Groh',
            'Erik Jia',
            'Justin Holmes',
            'Shaiv Kittur',
            'Ana Mees',
            'Maggie Pan',
            'Nitin Subramanian',
            'Michelle Tai',
            'Christine Yang',
            'Bella Almeida',
            'Catherine McMillan',
            'Thomas Williford',
        ];
        var c2023 = [
            'Ryan Chang',
            'Jason Lee',
            'Kaitlyn Luo',
            'Ashna Ram',
            'William Xie',
            'Anna Xu',
            'Jane Zhang',
            'Mona Su',
            'Vishal Dubey',
            'Will Inigo',
            'Rob Wilds',
            'Vanessa Chen',
            'Han Zhang',
            'Tim Ho',
            'Jared Bank',
            'Larry Chen',
            'Judy Zhong',
            'Evan Shen',
            'Tina Xia',
            'Leslie Dees',
            'Emily Mittleman'
        ];

        var c2024 = [
            "Celina You",
            "Clay Bromley",
            "Sonali Sanjay",
            "Claire Tan",
            "Christina Yoh",
        ]

        c2020.sort();
        c2021.sort();
        c2022.sort();
        c2023.sort();
        c2024.sort();

        var p2020 = c2020.map((p) => {
            return (
                <PersonContainer>
                    <PersonImage
                        src={require(`../assets/people/${p
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                    <T5>{p}</T5>
                </PersonContainer>
            );
        });
        var p2021 = c2021.map((p) => {
            return (
                <PersonContainer>
                    <PersonImage
                        src={require(`../assets/people/${p
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                    <T5>{p}</T5>
                </PersonContainer>
            );
        });
        var p2022 = c2022.map((p) => {
            return (
                <PersonContainer>
                    <PersonImage
                        src={require(`../assets/people/${p
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                    <T5>{p}</T5>
                </PersonContainer>
            );
        });
        var p2023 = c2023.map((p) => {
            return (
                <PersonContainer>
                    <PersonImage
                        src={require(`../assets/people/${p
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                    <T5>{p}</T5>
                </PersonContainer>
            );
        });
        var p2024 = c2024.map((p) => {
            return (
                <PersonContainer>
                    <PersonImage
                        src={require(`../assets/people/${p
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                    <T5>{p}</T5>
                </PersonContainer>
            );
        });
        

        return (
            <ContainerBody>
                <TitleDiv>
                    <T1>Members</T1>
                    <T3>Say hi to us anywhere, anytime!</T3>
                </TitleDiv>
                <div style={{ height: '250px' }} />
                <T2>Class of 2024</T2>
                <PersonTable>{p2024}</PersonTable>
                <T2>Class of 2023</T2>
                <PersonTable>{p2023}</PersonTable>
                <T2>Class of 2022</T2>
                <PersonTable>{p2022}</PersonTable>
                <T2>Class of 2021</T2>
                <PersonTable>{p2021}</PersonTable>
                <T2>Class of 2020</T2>
                <PersonTable>{p2020}</PersonTable>
            </ContainerBody>
        );
    }
}

export default Members;
