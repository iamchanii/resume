import React from 'react';
import SkillList, { SkillData } from '../components/contents/SkillList';

const mostRecentUsed: SkillData[] = [
    { name: 'React', imageUrl: '/static/images/icon-react.png' },
    { name: 'Typescript', imageUrl: '/static/images/icon-typescript.png' },
    { name: 'Jest', imageUrl: '/static/images/icon-jest.png' },
    { name: 'React Testing Library', imageUrl: '/static/images/icon-react-testing-library.png' },
    { name: 'Node.js', imageUrl: '/static/images/icon-node-js.png' },
];

const everUsed: SkillData[] = [
    { name: 'Angular', imageUrl: '/static/images/icon-angular.png' },
    { name: 'RxJS', imageUrl: '/static/images/icon-rxjs.png' },
    { name: 'Golang', imageUrl: '/static/images/icon-golang.png' },
    { name: 'Python', imageUrl: '/static/images/icon-python.png' },
];

const Skills: React.FC = () => (
    <div className="container">
        <h2>Skills</h2>
        <SkillList
            title="최근에 가장 많이 사용하여 익숙한 기술입니다:"
            data={mostRecentUsed}
        />
        <SkillList
            title="예전에 사용해 본 경험이 있는 기술입니다:"
            data={everUsed}
        />
    </div>
);

export default Skills;
