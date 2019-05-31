import React from 'react';
import styled from 'styled-components';
import SKillItem from './SkillItem';

const SkillListContainer = styled.div`
    p {
        margin: 0 0 24px 0;
    }
    
    &:last-child {
        margin-bottom: -24px;
    }
`;

const SKillItemListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export interface SkillData {
    name: string;
    imageUrl: string;
}

interface Props {
    title: string;
    data: SkillData[];
}

/**
 * title 및 스킬 목록을 표시
 */
const SkillList: React.FC<Props> = React.memo((props) => (
    <SkillListContainer>
        <p>{props.title}</p>
        <SKillItemListContainer>
            {props.data.map(({ name, imageUrl }) => (
                <SKillItem key={name} name={name} imageUrl={imageUrl}/>
            ))}
        </SKillItemListContainer>
    </SkillListContainer>
));

export default SkillList;
