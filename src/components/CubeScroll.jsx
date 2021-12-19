import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion/dist/framer-motion'

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
`;

const LogoIconImg = styled.img`
    width: 50px;
    margin-top: 10px;
    user-select: none;
    user-drag: none;
`;

const CubeScroll = () => {
    // for scrollYProgress to work, body css height must not be set to 100%
    const { scrollYProgress } = useViewportScroll()
    // useTransform maps values input -> output, we want the full movement in the first 0.15 of page scroll
    const yPosAnim = useTransform(scrollYProgress, [0, 0.15, 1], [0, 180, 180]);

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