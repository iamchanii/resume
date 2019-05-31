import React from 'react';
import styled from 'styled-components';
import Logo from '../components/logo/Logo';

const MainContainer = styled.div`
    height: 100vh;
    background-color: #222;
    font-size: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
`;

/**
 * 메인 화면.
 */
const Main: React.FC = React.memo(() => {
    return (
        <MainContainer>
            <Logo/>
        </MainContainer>
    );
});

export default Main;
