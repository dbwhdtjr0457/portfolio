import type { EducationContent } from "@/content/types";

export const education: EducationContent = {
  school: "경희대학교",
  college: "소프트웨어융합대학",
  major: "소프트웨어융합학과",
  degree: "학사",
  period: "2019.03.01 ~ 2024.08.21",
  track: "데이터사이언스트랙",
  credits: "131학점",
  score: "3.823/4.3",
  coursework: [
    "객체지향프로그래밍",
    "자료구조",
    "컴퓨터네트워크",
    "운영체제",
    "알고리즘 분석",
    "데이터베이스",
    "시스템 분석 및 설계",
    "기계학습",
    "데이터사이언스",
    "데이터마이닝",
    "영상처리",
    "자연어처리",
    "정보보호",
  ],
  trainings: [
    {
      id: "boostcamp-challenge",
      title: "네이버 부스트캠프 웹·모바일 8기 챌린지",
      detail: "웹 풀스택 JavaScript, 2023.07.10 ~ 2023.08.04",
    },
    {
      id: "boostcamp-membership",
      title: "네이버 부스트캠프 웹·모바일 8기 멤버십",
      detail: "웹 풀스택 JavaScript, 2023.08.18 ~ 2023.12.15",
    },
    {
      id: "42-seoul",
      title: "42 Seoul Common Core 검증 완료",
      detail: "2024.05.06, Level 11/21",
    },
  ],
  certifications: [
    {
      id: "engineer-information-processing",
      title: "정보처리기사",
      detail: "합격일 2025.09.12",
    },
  ],
  language: [
    {
      id: "toeic",
      title: "TOEIC 950",
      detail: "LC 490 / RC 460, 시험일 2024.08.04",
    },
    {
      id: "toeic-speaking",
      title: "TOEIC Speaking Advanced Low, 160점",
      detail: "시험일 2024.09.07",
    },
    {
      id: "english-conversation",
      title: "영어 일상 회화",
      detail: "업무/학습 맥락의 기본 커뮤니케이션 가능",
    },
  ],
};
