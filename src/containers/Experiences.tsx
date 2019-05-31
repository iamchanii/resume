import React from 'react';
import ExperienceList from '../components/contents/ExperienceList';

const Experiences: React.FC = React.memo(() => {
    return (
        <div className="container">
            <h2>Experiences</h2>
            <ExperienceList/>
        </div>
    );
});

export default Experiences;
