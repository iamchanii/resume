import React from 'react';
import ExperienceItem, { ExperienceData } from './ExperienceItem';

const experiences: ExperienceData[] = [
    {
        logoUrl: '/static/images/logo-plustv.png',
        companyName: '플러스티브이',
        metadata: '2018. 12 ~ NOW / 프론트엔드 개발',
        skills: ['React', 'Typescript', 'Redux', 'Redux-Saga', 'Styled-Component', 'Less', 'Unit Test (Jest)', 'WebStorm', 'Confluence', 'Jira', 'Slack', 'Kanban'],
        description: '디지털 사이니지 관리 솔루션 개발. 신규 CMS 프로젝트 개발 및 유지보수 담당.',
        works: [
            '신규 디지털 사이니지 관리 도구(CMS) 개발',
            '배포 자동화 및 슬랙 알림 스크립트 작성',
            'tui-calendar 활용한 스크린 일정 기능 구현',
            'VOD 콘텐츠 및 카테고리 관리 기능 구현',
            'Context API 를 활용한 ListController, DetailController 를 구현하고 공통적인 비즈니스 로직을 제공하는 ListView/DetailView 컴포넌트 구현',
            '드래그 앤 드롭 방식으로 콘텐츠 업로드 기능 구현. Notification 으로 실시간 업로드 진행률 확인 기능 구현',
            '일정 이미지/영상 콘텐츠를 바로 편성하는 기능 구현',
            '레이아웃 구조를 표시하는 LayoutContainer 컴포넌트 구현',
            '패키지 관리 구현',
        ],
    },
    {
        logoUrl: '/static/images/logo-towncompany.png',
        companyName: '타운컴퍼니',
        metadata: '2018. 03 ~ 2018. 11 / 프론트엔드 개발',
        skills: ['Angular 6', 'Typescript', 'Less', 'Unit Test (Karma)', 'RxJS', 'WebStorm', 'Confluence', 'Jira', 'Slack', 'Kanban'],
        description: '단체 공동구매를 위한 e-커머스 플랫폼 ‘타운어스’ 개발. 신규 기능 개발 및 유지보수 담당.',
        works: [
            '신규 플랫폼 오픈 후 발생한 이슈 및 크로스브라우징 대응',
            'E2E 테스트 스크립트 작성',
            'Sentry 로 보고되는 오류를 추적할 수 있도록 배포 시 sourcemap 을 생성하여 Sentry 에 업로드 하도록 개선.',
            '역경매 신규 플랫폼 타운초이스 프로토타입 개발',
            '공동구매방 프로세스 개선 (2.0.0 버전)',
            '배포 자동화 스크립트 개선',
            '업체 상세 정보 및 정보 공유 기능 개발',
        ],
    },
    {
        logoUrl: '/static/images/logo-tablemanager.png',
        companyName: '테이블매니저',
        metadata: '2017. 01 ~ 2018. 02 / 프론트엔드 및 백엔드 개발',
        skills: ['Node.js', 'ExpressJS', 'Restify', 'ES6', 'Socket.IO', 'AngularJS', 'SCSS', 'Webpack2'],
        description: '레스토랑 예약 관리 솔루션. 신규 기능 개발 및 유지보수 담당.',
        works: [
            '아임포트 모듈을 연동하여 솔루션 내 예약금 결제 기능 도입',
            '매장에서 태블릿 PC를 활용, 전화번호를 입력하면 고객 포인트를 적립/사용 처리할 수 있는 기능 개발',
            '매일 9시, 전체 고객사의 솔루션 사용 정보를 확인하여 리포트를 생성하는 기능 개발',
            'SMS/LMS 기반의 문자 발송 시스템에서 카카오톡 알림톡을 발송하도록 개발',
        ],
    },
];

const ExperienceList: React.FC = React.memo(() => (
    <>
        {experiences.map(experience => (
            <ExperienceItem key={experience.companyName} data={experience}/>
        ))}
    </>
));

export default ExperienceList;
