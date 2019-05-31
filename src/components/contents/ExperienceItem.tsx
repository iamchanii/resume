import React from 'react';
import styled from 'styled-components';

const ExperienceItemContainer = styled.div`
    display: flex;
    border: solid 1px #eaeaea;
    background-color: #ffffff;
    padding: 32px;
    
    &:not(:last-child) {
        margin: 0 0 32px 0;
    }
`;

const CompanyLogo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: solid 1px #eaeaea;
    background-color: #ffffff;
`;

const ExperienceItemInformationContainer = styled.div`
    flex: 1;
    margin: 0 0 0 32px;
    
    h3 {
        font-family: 'Noto Sans KR', sans-serif;
        height: 27px;
        line-height: 27px;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: -1.2px;
        color: #242424;
        margin: 0 0 8px 0;
    }
    
    h4 {
        font-family: 'Noto Sans KR', sans-serif;
        height: 13px;
        line-height: 13px;
        font-size: 12px;
        font-weight: 300;
        letter-spacing: -0.5px;
        color: rgba(36, 36, 36, 0.5);
        margin: 0;
    }
    
    h5 {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: -0.8px;
        color: #242424;
        margin: 0 0 32px 0;
    }
`;

const ExperienceItemSkills = styled.ul`
    list-style: none;
    margin: 16px 0 -8px;
    padding: 0;
    font-size: 0;
    
    li {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        border-radius: 2px;
        background-color: #fafafa;
        padding: 0 8px;
        font-family: 'Open Sans', sans-serif;
        font-size: 11px;
        letter-spacing: -0.6px;
        color: #444444;
        margin-bottom: 8px;
        
        &:not(:last-child) {
            margin-right: 8px;
        }
    }
`;

const ExperienceItemWorks = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    
    li {
        position: relative;
        padding: 0 0 0 12px;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: -0.8px;
        color: #242424;
        
        &:not(:last-child) {
            margin: 0 0 8px 0;
        }
        
        &:before {
            position: absolute;
            display: block;
            content: '';
            width: 4px;
            height: 4px;
            border-radius: 100%;
            left: 0;
            top: 10px;
            background-color: #000;
        }
    }
`;

const Divider = styled.div`
    height: 1px;
    background-color: #eaeaea;
    margin: 16px 0;
`;

export interface ExperienceData {
    logoUrl: string;
    companyName: string;
    metadata: string;
    skills: string[];
    description: string;
    works: string[];
}

interface P {
    data: ExperienceData;
}

const ExperienceItem: React.FC<P> = ({ data }) => {
    return (
        <ExperienceItemContainer>
            <CompanyLogo src={data.logoUrl} alt={data.companyName}/>
            <ExperienceItemInformationContainer>
                <h3>{data.companyName}</h3>
                <h4>{data.metadata}</h4>
                <ExperienceItemSkills>
                    {data.skills.map(skill => <li key={skill} children={skill}/>)}
                </ExperienceItemSkills>
                <Divider/>
                <h5>{data.description}</h5>
                <ExperienceItemWorks>
                    {data.works.map(work => <li key={work} children={work}/>)}
                </ExperienceItemWorks>
            </ExperienceItemInformationContainer>
        </ExperienceItemContainer>
    );
};

export default ExperienceItem;
