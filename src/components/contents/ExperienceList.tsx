import React from 'react';
import ExperienceItem, { ExperienceData } from './ExperienceItem';

const experiences: ExperienceData[] = [
    {
        logoUrl: '/static/images/logo-plustv.png',
        companyName: '플러스티브이',
        metadata: '2018. 12 ~ NOW / 프론트엔드 개발',
        skills: ['React', 'Typescript', 'Redux', 'Redux-Saga', 'Styled-Component', 'Less', 'Unit Test (Jest)', 'WebStorm', 'Confluence', 'Jira', 'Slack', 'Kanban'],
        description: '자사 디지털 사이니지 관리 솔루션의 신규 CMS 프로젝트 개발 및 유지보수를 담당하였습니다. ' +
            '리액트와 타입스크립트를 사용하여 개발하였고, 테스트 주도 개발을 진행하였습니다.' +
            '최근 프로젝트 폴더 구조 개선 작업을 진행했습니다.',
        works: [
            '자사 디지털 사이니지 솔루션의 신규 CMS 프로젝트 개발',
            '프로젝트 폴더 구조 개선',
        ],
    },
    {
        logoUrl: '/static/images/logo-towncompany.png',
        companyName: '타운컴퍼니',
        metadata: '2018. 03 ~ 2018. 11 / 프론트엔드 개발',
        skills: ['Angular 6', 'Typescript', 'Less', 'Unit Test (Karma)', 'RxJS', 'WebStorm', 'Confluence', 'Jira', 'Slack', 'Kanban'],
        description: '단체 공동구매를 위한 e-커머스 플랫폼 ‘타운어스’ 신규 기능 개발 및 유지보수 담당을 맡았습니다. ' +
            '이 회사에서는 Angular 6 와 RxJS 를 경험해 볼 수 있었고, 테스트 주도 개발을 처음으로 접했습니다. ' +
            '제품 개발 시 기획자, 디자이너, 개발자 간의 협업을 통해 업무를 진행, 역할 조직에 대해 알게되었습니다.',
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
        description: '레스토랑 예약 관리 솔루션의 신규 기능 개발 및 유지보수를 담당했습니다. 기존에 개발 된 코드를 분석하며 업무를 진행했고, ' +
            'static 한 파일을 업로드 했던 기존 방식에 웹팩을 도입하여 브라우저 캐시 관련 문제를 해결했던 경험이 있습니다.',
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
