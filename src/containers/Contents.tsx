import React from 'react';
import styled from 'styled-components';
import InnerContainer from '../components/InnerContainer';
import { TABLET_BREAKPOINT } from '../constants';
import Experiences from './Experiences';
import Footer from './Footer';
import Profile from './Profile';
import Skills from './Skills';

const ContentsContainer = styled.div`
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 -10px 75px 0 rgba(0, 0, 0, 0.19);
    margin-top: 100vh;
    position: relative;
    padding: 128px;
    
    ${TABLET_BREAKPOINT} {
        padding: 48px;
    }
`;

/**
 * 프로필, 스킬, 경력 표시
 */
const Contents: React.FC = React.memo(() => {
    return (
        <>
            <ContentsContainer>
                <InnerContainer>
                    <Profile/>
                    <Skills/>
                    <Experiences/>
                </InnerContainer>
            </ContentsContainer>
            <Footer/>
        </>
    );
});

export default Contents;
