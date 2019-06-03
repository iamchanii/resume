import React from 'react';
import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../constants';

const ProfileContainer = styled.div`
    display: flex;
    
    ${MOBILE_BREAKPOINT} {
        flex-direction: column;
    }
    
    img {
        flex: 0 0 120px;
        width: 120px;
        height: 120px;
        border-radius: 120px;
        margin: 0 24px 0 0;
        
        ${MOBILE_BREAKPOINT} {
            margin: 0 auto 24px;
        }
    }
`;

const Profile: React.FC = () => (
    <div className="container">
        <h2>Profile</h2>
        <ProfileContainer>
            <img src="/static/images/profile.png" alt="제 사진입니다 :)"/>
            <p>
                웹 프론트엔드 엔지니어 이찬희 입니다. 자바스크립트를 주로 사용하고, 프론트엔드 개발을 좋아합니다. 최근에는 리액트와 타입스크립트를 사용하여 즐겁게 개발하고 있습니다. 테스트 코드 작성을 통해 품질을 유지하고자 노력합니다. 현재 플러스티브이에서 웹 프론트엔드 엔지니어로 재직중입니다.<br/>
                <br/>
                동료에게 도움이 되는 개발자가 되는 것이 제가 추구하는 개발자로서의 목표입니다. 제가 만든 코드가 다른 개발자들에게, 나아가 비즈니스에 도움이 될 때 가장 큰 보람을 느낍니다. 디자이너, 기획자와 제품에 대해서 생산성 있는 이야기를 나누는 것을 좋아합니다.
            </p>
        </ProfileContainer>
    </div>
);

export default Profile;
