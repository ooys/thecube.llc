import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion/dist/framer-motion';

import LogoText from '../assets/cube_logos/cubelogotext.svg';
import LogoIcon from '../assets/cube_logos/cubelogo.svg';

const Container = styled.div`
    width: 15%;
    height: 100%;
    position: relative;
`;

// we fix the entire logo container, everything inside is fluid
const ContainerLogo = styled.div`
    position: fixed;
`;

const LogoTextImg = styled.img`
    width: 150px;
    margin-top: 75px;
    user-select: none;
    user-drag: none;
    transform: rotate(270deg);
    @media (max-width: 800px) {
        width: 100px;
        margin-top: 50px;
    }
    @media (max-width: 400px) {
        width: 50px;
        margin-top: 25px;
    }
`;

const LogoAnimated = styled(motion.div)`
    position: fixed;
    top: 0;
    margin-top: 20px;
    margin-left: 42.5px;
    width: 60px;
    height: 200px;
    background-color: white;
    box-shadow: 0 0 5px 10px #fff;
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 800px) {
        margin-left: 37.5px;
        width: 25px;
    }
    @media (max-width: 400px) {
        margin-left: 17.5px;
        width: 15px;
    }
`;

const LogoIconImg = styled.img`
    width: 50px;
    margin-top: 10px;
    user-select: none;
    user-drag: none;
    @media (max-width: 800px) {
        margin-top: 7.5px;
        width: 20px;
    }
    @media (max-width: 400px) {
        margin-top: 5px;
        width: 15px;
    }
`;

const CubeScroll = () => {
    // for scrollYProgress to work, body css height must not be set to 100%
    const { scrollYProgress } = useViewportScroll()
    // get viewport width
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var scrollMax = 180;
    if (vw < 900) {
        scrollMax = 125;
    }
    if (vw <= 400) {
        scrollMax = 70;
    }

    // useTransform maps values input -> output, we want the full movement in the first 0.15 of page scroll
    const yPosAnim = useTransform(scrollYProgress, [0, 0.15, 1], [0, scrollMax, scrollMax]);

    return (
        <Container>
            <ContainerLogo>
                <LogoTextImg src={LogoText} />
                <LogoAnimated style={{ y: yPosAnim }}>
                    <LogoIconImg src={LogoIcon} />
                </LogoAnimated>
            </ContainerLogo>
        </Container>
    )
}

export default CubeScroll;