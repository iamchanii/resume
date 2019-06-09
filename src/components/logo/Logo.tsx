import lottie from 'lottie-web';
import React from 'react';
import styled from 'styled-components';
import { TABLET_BREAKPOINT } from '../../constants';

const animationData = require('./data.json');

const LogoContainer = styled.div`
    width: 50vw;
    max-width: 720px;
    
    ${TABLET_BREAKPOINT} {
        width: 80vw;
        max-width: 80vw;
    }
`;

/**
 * lottie-web 을 이용하여 로고를 표시
 */
const Logo: React.FC = React.memo(() => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // div 가 그려진 뒤를 보장하기 위해 useLayoutEffect 사용
    React.useLayoutEffect(() => {
        setTimeout(() => {
            if (containerRef.current) {
                lottie.loadAnimation({
                    container: containerRef.current,
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    animationData,
                });
            }
        }, 250);
    }, []);

    return (
        <LogoContainer ref={containerRef}/>
    );
});

export default Logo;
