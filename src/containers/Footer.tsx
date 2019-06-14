import { styled } from 'linaria/lib/react';
import React from 'react';
import InnerContainer from '../components/InnerContainer';
import { TABLET_BREAKPOINT } from '../constants';

const FooterContainer = styled.footer`
    z-index: 1;
    background-color: #f0f0f0;
    padding: 64px 0;
    position: relative;
    
    ${TABLET_BREAKPOINT} {
        padding: 64px 48px;
    }
    
    ${InnerContainer} {
        display: flex;
        align-items: center;
        
        p {
            height: 18px;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 11px;
            line-height: 18px;
            letter-spacing: -0.6px;
            color: #787878;
            margin: 0 24px 0 0;
        }
        
        a {
            width: 18px;
            height: 18px;
            border-radius: 18px;
            overflow: hidden;
            text-indent: -9999px;
            background-size: cover;
            background-position: center center;
            
            &.figma {
                background-image: url("/static/images/footer-icon-figma.png");
            }
            
            &.github {
                background-image: url("/static/images/footer-icon-github.png");
            }
            
            &:not(:last-child) {
                margin-right: 8px;
            }
        }
    }
`;

const Footer: React.FC = React.memo(() => {
    return (
        <FooterContainer>
            <InnerContainer>
                <p>어떻게 만들었는지 궁금하신가요?</p>
                <a className="figma" href="https://www.figma.com/file/cpj7U8fJNmQBatH7S0OkYi1y/resume.v2?node-id=18%3A13" target="_blank" rel="noopener noreferrer">Figma</a>
                <a className="github" href="https://github.com/iamchanii/resume" target="_blank" rel="noopener noreferrer">GitHub</a>
            </InnerContainer>
        </FooterContainer>
    );
});

export default Footer;
