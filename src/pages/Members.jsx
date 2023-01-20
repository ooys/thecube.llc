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

    generateMembers(classYear) {
        return classYear.map((p) => {

            let personImage = <PersonImage
                                src={require(`../assets/people/${p[0]
                                .split(' ')
                                .join('')
                                .toLowerCase()}.jpg`)}
                              />

            return (
                <PersonContainer>
                    {p[1] != ""
                    ? <a href={p[1]} target="_blank">{personImage}</a>
                    : personImage}
                    <T5>{p[0]}</T5>
                </PersonContainer>
            );
        });
    }

    render() {
        var c2020 = [
            ['Ethan Holland', ""],
            ['Michael Tan', "https://www.linkedin.com/in/mtan2/"],
            ['Gaurav Uppal', "https://www.linkedin.com/in/gaurav-uppal-0a3922122/"],
            ['Isabel Senior', "https://www.linkedin.com/in/isabelsenior/"],
            ['Trishul Nagenalli', "https://www.linkedin.com/in/trishul-nagenalli/"],
            ['Jie Cai', "https://www.linkedin.com/in/jiecai1997/"]
        ];

        var c2021 = [
            ['Suchir Bhatt', "https://www.linkedin.com/in/suchir1/"],
            ['Sam Chan', "https://www.linkedin.com/in/samuelpchan/"],
            ['Kate Chen', "https://www.linkedin.com/in/katezchen/"],
            ['Aayush Goradia', "https://www.linkedin.com/in/aayushgoradia/"],
            ['Andy Ju', "https://www.linkedin.com/in/andyjuice/"],
            ['Jaiveer Katariya', "https://www.linkedin.com/in/jaiveer-k-900865166/"],
            ['Alex Kornegay', "https://www.linkedin.com/in/alex-kornegay-4b5841150/"],
            ['Yash Patil', "https://www.linkedin.com/in/yash-p-2021/"],
            ['Charlie Todd', "https://www.linkedin.com/in/charles-todd-7143a715a/"],
            ['Rohan Reddy', "https://www.linkedin.com/in/rohan-reddy-583b00111/"],
            ['Alex Balfanz', ""],
            ['Varun Nair', "https://www.linkedin.com/in/varunnair18/"]
        ];
        var c2022 = [
            ['Vineet Alaparthi', "https://www.linkedin.com/in/vineet-alaparthi/"],
            ['Justin Tandon', "https://www.linkedin.com/in/justintandon/"],
            ['David Elias', "https://www.linkedin.com/in/david-elias-a5444442/"],
            ['Aaron Chai', "https://www.linkedin.com/in/aaronschai/"],
            ['Raymond Chen', "https://www.linkedin.com/in/raymondhechen/"],
            ['Andrew Claxton', "https://www.linkedin.com/in/andrew-claxton/"],
            ['Donald Groh', "https://www.linkedin.com/in/donald-groh/"],
            ['Erik Jia', "https://www.linkedin.com/in/erikjia/"],
            ['Justin Holmes', "https://www.linkedin.com/in/justinholmes920/"],
            ['Shaiv Kittur', "https://www.linkedin.com/in/shaivkittur/"],
            ['Ana Mees', "https://www.linkedin.com/in/anamees/"],
            ['Maggie Pan', ""],
            ['Nitin Subramanian', "https://www.linkedin.com/in/nitin-subramanian-bbba26126/"],
            ['Michelle Tai', "https://www.linkedin.com/in/michelle-r-tai/"],
            ['Christine Yang', "https://www.linkedin.com/in/christinezyang/"],
            ['Bella Almeida', "https://www.linkedin.com/in/isabellajalmeida/"],
            ['Catherine McMillan', "https://www.linkedin.com/in/catherine-r-mcmillan/"],
            ['Thomas Williford', "https://www.linkedin.com/in/thomas-williford-742a9412b/"]
        ];
        var c2023 = [
            ['Ryan Chang', "https://www.linkedin.com/in/ryancwc/"],
            ['Kaitlyn Luo', "https://www.linkedin.com/in/kaitlyn-luo/"],
            ['Ashna Ram', "https://www.linkedin.com/in/ashna-ram/"],
            ['William Xie', "https://www.linkedin.com/in/williamxie36/"],
            ['Anna Xu', "https://www.linkedin.com/in/anna-xu-2023/"],
            ['Jane Zhang', "https://www.linkedin.com/in/jjanezhang/"],
            ['Mona Su', "https://www.linkedin.com/in/mona-su-255301195/"],
            ['Vishal Dubey', "https://www.linkedin.com/in/vishaldubey01/"],
            ['Will Inigo', "https://www.linkedin.com/in/william-inigo/"],
            ['Rob Wilds', "https://www.linkedin.com/in/robwilds/"],
            ['Vanessa Chen', "https://www.linkedin.com/in/vanessa-chen888/"],
            ['Han Zhang', "https://www.linkedin.com/in/han-zhang-0b5633159/"],
            ['Tim Ho', ""],
            ['Jared Bank', "https://www.linkedin.com/in/jared-bank-8aba6a1b8/"],
            ['Larry Chen', "https://www.linkedin.com/in/larry-ch3n/"],
            ['Judy Zhong', "https://www.linkedin.com/in/judy-zhong/"],
            ['Evan Shen', "https://www.linkedin.com/in/evantaoshen/"],
            ['Tina Xia', "https://www.linkedin.com/in/tina-xia/"],
            ['Leslie Dees', "https://www.linkedin.com/in/lesliedees/"],
            ['Emily Mittleman', "https://www.linkedin.com/in/emilymittleman/"],
            ['Christian Chitty', "https://www.linkedin.com/in/christianchitty/"]
        ];

        var c2024 = [
            ['Celina You', "https://www.linkedin.com/in/celinayou/"],
            ['Clay Bromley', "https://www.linkedin.com/in/clayton-bromley-90bbb5187/"],
            ['Sonali Sanjay', "https://www.linkedin.com/in/sonalisanjay/"],
            ['Claire Tan', "https://www.linkedin.com/in/clclairetan/"],
            ['Christina Yoh', "https://www.linkedin.com/in/akira-christina-yoh/"],
            ['Nils Roede', "https://www.linkedin.com/in/nilsroede/"],
            ['Xixi Lei', "https://www.linkedin.com/in/xixi-lei-1453711b6/"],
            ['Ryan Hu', "https://www.linkedin.com/in/ryan-hu-3474141b3/"],
            ['Junwoo Kang', "https://www.linkedin.com/in/junwookang/"],
            ['Athena Yao', "https://www.linkedin.com/in/athenaayao/"],
            ['Aden Clemente', "https://www.linkedin.com/in/aden-clemente/"],
            ['Chris Liang', ""],
            ['Ayush Garg', "https://www.linkedin.com/in/ayush-garg-ag/"],
            ['Evelyn Shi', "https://www.linkedin.com/in/evelynxshi/"],
            ['Emily Leung', "https://www.linkedin.com/in/emily-leung-82279a1a9/"],
            ['Chang Yan', ""]
        ]

        var c2025 = [
            ['Jason Lee', "https://www.linkedin.com/in/choonghwanlee/"],
            ['Kasey Park', "https://www.linkedin.com/in/kaseypark/"],
            ['Harry Liu', "https://www.linkedin.com/in/harry-liu-me/"],
            ['N Wang', "https://www.linkedin.com/in/nwang888/"],
            ['Richard Kim', ""],
            ['Tyler Cheung', "https://www.linkedin.com/in/tyler-cheung-24373118b/"],
            ['Saathvik Boompelli', "https://www.linkedin.com/in/saathvik-boompelli-9a680b200/"],
            ['Aditya Gaur', "https://www.linkedin.com/in/adityagaur53/"],
            ['Pranay Vure', "https://www.linkedin.com/in/pranay-vure-0903641b2/"],
            ['Ellen Liu', "https://www.linkedin.com/in/xinrui-ellen-liu/"],
            ['Christian Okokhere', "https://www.linkedin.com/in/christianokokhere/"]
        ]

        c2020.sort();
        c2021.sort();
        c2022.sort();
        c2023.sort();
        c2024.sort();
        c2025.sort();

        var p2020 = this.generateMembers(c2020);
        var p2021 = this.generateMembers(c2021);
        var p2022 = this.generateMembers(c2022);
        var p2023 = this.generateMembers(c2023);
        var p2024 = this.generateMembers(c2024);
        var p2025 = this.generateMembers(c2025);

        return (
            <ContainerBody>
                <TitleDiv>
                    <T1>Members</T1>
                    <T3><span role="img" aria-label="wave">👋</span> Say hi to our family!</T3>
                </TitleDiv>
                <div style={{ height: '250px' }} />
                <T2>Class of 2025</T2>
                <PersonTable>{p2025}</PersonTable>
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
