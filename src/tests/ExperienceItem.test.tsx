import { render } from '@testing-library/react';
import React from 'react';
import ExperienceItem, { ExperienceData } from '../components/contents/ExperienceItem';

describe('ExperienceItem', () => {
    const data: ExperienceData = {
        logoUrl: 'https://via.placeholder.com/500',
        companyName: '플러스티브이',
        metadata: '2018. 12 ~ NOW / 프론트엔드 개발',
        skills: ['React', 'Typescript'],
        description: '디지털 사이니지 관리 도구...',
        works: ['Do foo', 'Do bar', 'Do bax'],
    };

    const node = () => (
        <ExperienceItem data={data}/>
    );

    it('정상적으로 렌더링이 된다.', () => {
        const { getByText, getByAltText } = render(node());

        expect(getByText('플러스티브이')).toBeInTheDocument();
        expect(getByAltText('플러스티브이')).toBeInTheDocument();
        expect((getByAltText('플러스티브이') as HTMLImageElement).src).toEqual('https://via.placeholder.com/500');
        expect(getByText('2018. 12 ~ NOW / 프론트엔드 개발')).toBeInTheDocument();
        expect(getByText('React')).toBeInTheDocument();
        expect(getByText('Typescript')).toBeInTheDocument();
        expect(getByText('디지털 사이니지 관리 도구...')).toBeInTheDocument();
        expect(getByText('Do foo')).toBeInTheDocument();
        expect(getByText('Do bar')).toBeInTheDocument();
        expect(getByText('Do bax')).toBeInTheDocument();
    });
});
