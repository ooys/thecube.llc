import React, { Component } from 'react';
import styled from 'styled-components';

import T1 from '../components/T1';
import T3 from '../components/T3';
import T4 from '../components/T4';

import Img1 from '../assets/gallery/1.jpg';
import Img2 from '../assets/gallery/2.jpg';
import Img3 from '../assets/gallery/3.jpg';
import Img4 from '../assets/gallery/4.jpg';
import Img5 from '../assets/gallery/5.jpg';
import Img6 from '../assets/gallery/6.jpg';
import Img7 from '../assets/gallery/7.jpg';
import Img8 from '../assets/gallery/8.jpg';

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

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 5vw);
    grid-gap: 15px;
    @media (max-width: 800px) {
        grid-gap: 10px;
    }
    @media (max-width: 400px) {
        grid-gap: 5px;
    }
`;

const GalleryImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
`;

class Home extends Component {
    render() {
        return (
            <ContainerBody>
                <TitleDiv>
                    <T1>Join Us!</T1>
                    <T3><span role="img" aria-label="shake">🤝</span> We're excited to meet you!</T3>
                </TitleDiv>
                <div style={{ height: '150px' }} />
                <Gallery>
                    <GalleryImg src={Img5} style={{
                        gridColumnStart: "5",
                        gridColumnEnd: "8",
                        gridRowStart: "1",
                        gridRowEnd: "7",
                    }} />
                    <GalleryImg src={Img2} style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "5",
                        gridRowStart: "1",
                        gridRowEnd: "4",
                    }} />
                    <GalleryImg src={Img3} style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "3",
                        gridRowStart: "4",
                        gridRowEnd: "7",
                    }} />
                    <GalleryImg src={Img8} style={{
                        gridColumnStart: "3",
                        gridColumnEnd: "5",
                        gridRowStart: "4",
                        gridRowEnd: "7",
                    }} />
                </Gallery>
                <T4>
                    Once a year we conduct a rush process where you will be able to get to know members and gain a better understanding of what the Cube is all about. 
                    This usually lasts a couple weeks and happens towards the beginning of the semester.
                    We post on official Duke class Facebook pages to announce our calendar.
                </T4>
                <div style={{ height: '75px' }} />
                <Gallery>
                    <GalleryImg src={Img6} style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "4",
                        gridRowStart: "1",
                        gridRowEnd: "7",
                    }} />
                    <GalleryImg src={Img1} style={{
                        gridColumnStart: "4",
                        gridColumnEnd: "6",
                        gridRowStart: "1",
                        gridRowEnd: "3",
                    }} />
                    <GalleryImg src={Img4} style={{
                        gridColumnStart: "6",
                        gridColumnEnd: "8",
                        gridRowStart: "1",
                        gridRowEnd: "3",
                    }} />
                    <GalleryImg src={Img7} style={{
                        gridColumnStart: "4",
                        gridColumnEnd: "8",
                        gridRowStart: "3",
                        gridRowEnd: "7",
                    }} />
                </Gallery>
                <div style={{ height: '50px' }} />
            </ContainerBody>
        );
    }
}

export default Home;
