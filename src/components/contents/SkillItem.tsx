import React from 'react';
import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../../constants';

const SkillItemContainer = styled.div`
    flex: 0 0 150px;
    margin-bottom: 24px;
    
    &:not(:last-child) {
        margin-right: 24px;
    }

    ${MOBILE_BREAKPOINT} {
        flex: 0 0 100%;
        margin-right: 0 !important;
    }

    span {
        display: block;
        height: 22px;
        line-height: 22px;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        letter-spacing: -0.7px;
        color: #242424;
    }
`;

const SkillItemImageContainer = styled.div`   
    height: 150px;
    border-radius: 2px;
    border: solid 1px #eaeaea;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        width: 100px;
        height: 75px;
        object-fit: contain;
    }
`;

interface Props {
    name: string;
    imageUrl: string;
}

const SKillItem: React.FC<Props> = React.memo(({ name, imageUrl }) => (
    <SkillItemContainer>
        <SkillItemImageContainer>
            <img src={imageUrl} alt={name}/>
        </SkillItemImageContainer>
        <span children={name}/>
    </SkillItemContainer>
));

export default SKillItem;
