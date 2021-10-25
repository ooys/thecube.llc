import React, { Component } from 'react';
import styled from 'styled-components';

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
    margin-bottom: 30px;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

const T3 = styled.div`
    font-family: HKGrotesk;
    font-size: 35px;
    font-weight: 600;
    color: #555555;
`;

const T4 = styled.div`
    font-family: HKGrotesk;
    font-size: 25px;
    font-weight: 500;
    color: #333333;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const PersonTable = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 75px;
    @media (max-width: 768px) {
        margin-bottom: 50px;
        justify-content: space-between;
    }
`;

const PersonContainer = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
    @media (max-width: 768px) {
        width: 125px;
        margin-bottom: 30px;
    }
`;

const PersonImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    transition: all 0.2s ease;
    :hover {
        transform: scale(1.05);
    }
    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`;

class Members extends Component {
    render() {
        var c2021 = [
            'Suchir Bhatt',
            'Sam Chan',
            'Kate Chen',
            'David Elias',
            'Aayush Goradia',
            'Andy Ju',
            'Jaiveer Katariya',
            'Alex Kornegay',
            'Yash Patil',
            'Justin Tandon',
            'Charlie Todd',
            'Rohan Reddy',
            'Alex Balfanz',
            'Varun Nair'
        ];
        var c2022 = [
            'Vineet Alaparthi',
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
            'Catherine McMillan'
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

        var c2020 = [
            'Ethan Holland',
            'Michael Tan',
            'Gaurav Uppal',
            'Thomas Williford',
            'Isabel Senior',
            'Trishul Nagenalli',
            'Jie Cai',
        ];

        c2021.sort();
        c2022.sort();
        c2023.sort();
        c2020.sort();

        var p2021 = c2021.map((p) => {
            return (
                <PersonContainer>
                    <PersonImage
                        src={require(`../people/${p
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                    <T4>{p}</T4>
                </PersonContainer>
            );
        });
        var p2022 = c2022.map((p) => {
            return (
                <PersonContainer>
                    <PersonImage
                        src={require(`../people/${p
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                    <T4>{p}</T4>
                </PersonContainer>
            );
        });
        var p2023 = c2023.map((p) => {
            return (
                <PersonContainer>
                    <PersonImage
                        src={require(`../people/${p
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                    <T4>{p}</T4>
                </PersonContainer>
            );
        });

        var p2020 = c2020.map((p) => {
            return (
                <PersonContainer>
                    <PersonImage
                        src={require(`../people/${p
                            .split(' ')
                            .join('')
                            .toLowerCase()}.jpg`)}
                    />
                    <T4>{p}</T4>
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
