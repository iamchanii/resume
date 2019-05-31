import { render } from '@testing-library/react';
import React from 'react';
import SKillItem from '../components/contents/SkillItem';

describe('SkillItem', () => {
    const node = () => (
        <SKillItem name="React" imageUrl="https://via.placeholder.com/500"/>
    );

    it('정상적으로 렌더링 된다.', () => {
        const { getByText, getByAltText } = render(node());
        expect(getByText('React')).toBeInTheDocument();
        expect(getByAltText('React')).toBeInTheDocument();
        expect((getByAltText('React') as HTMLImageElement).src).toEqual('https://via.placeholder.com/500');
    });
});
