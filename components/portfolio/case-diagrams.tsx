import type { ComponentType, CSSProperties } from "react";

import type { CaseDiagramKind } from "@/content/case-studies";

type GridPlacement = CSSProperties & { "--gc"?: number; "--gr"?: number };

const sdkLayers = [
  { name: "고객사 웹 앱", external: true, items: [{ text: "채팅 화면 · 채널 목록 · 알림" }] },
  { name: "공개 API", items: [{ text: "Channel 목록·조회·생성" }, { text: "참여자·읽음" }, { text: "Message 조회·수정·삭제" }, { text: "번역·리액션" }] },
  { name: "Collection", items: [{ text: "상태·수명주기" }, { text: "양방향 페이지 병합" }, { text: "재연결 후 복구" }, { text: "실시간 이벤트 반영", partial: true }] },
  { name: "Core", items: [{ text: "REST Transport" }, { text: "Auth" }, { text: "Client" }, { text: "공통 오류 모델" }, { text: "WebSocket(STOMP)", partial: true }] },
  { name: "Chatplanet 서버", external: true, items: [{ text: "REST API" }, { text: "실시간 이벤트" }] },
];

function SdkLayers() {
  return <figure className="case-diagram sdk-diagram">
    <div className="sdk-layers">{sdkLayers.map((layer, index) => <div key={layer.name} className={`sdk-layer${layer.external ? " is-external" : ""}`}>
      {index === 1 ? <p className="sdk-flow-note">↓ 공개 API 호출 · 이벤트 구독</p> : null}
      {index === 4 ? <p className="sdk-flow-note">↓ REST · 실시간 연결</p> : null}
      <div className="sdk-layer-row"><span className="sdk-layer-name">{layer.name}</span><ul>{layer.items.map(item => <li key={item.text} className={"partial" in item && item.partial ? "is-partial" : undefined}>{item.text}</li>)}</ul></div>
    </div>)}</div>
    <figcaption><span className="legend-mine" aria-hidden="true" />본인 PR이 포함된 범위(팀 SDK) <span className="legend-partial" aria-hidden="true" />일부만 다뤘거나 연동 대상</figcaption>
  </figure>;
}

const timelineLanes = ["REST 조회", "실시간 이벤트", "화면 상태"];
const timelineEvents = [
  { id: "request", step: "①", lane: 0, col: 1, title: "과거 페이지 요청", note: "#42 수정 전(v1) 포함" },
  { id: "event", step: "②", lane: 1, col: 2, title: "#42 수정 이벤트(v2) 도착" },
  { id: "apply", lane: 2, col: 2, title: "#42 → v2 반영", tone: "state" },
  { id: "late", step: "③", lane: 0, col: 3, title: "늦게 도착한 응답(#42 v1)", note: "ID·수정 시각 비교 → 더 오래된 값 무시", tone: "late" },
  { id: "keep", lane: 2, col: 3, title: "#42는 v2 유지", tone: "keep" },
  { id: "cancel", step: "④", lane: 0, col: 4, title: "채널 접근 불가 확인", note: "진행 중 요청 취소 · 이후 응답 폐기", tone: "cancel" },
];

const errorPolicies = [
  { situation: "인증 만료", action: "토큰 갱신 제한 · 반복 갱신 방지", value: "1회" },
  { situation: "서버 오류(5xx)", action: "재시도해도 안전한 요청만", value: "최대 3회" },
  { situation: "세션 폐기", action: "리뷰 지적 재현 후 자동 재연결", value: "중단", stop: true },
];

function LateResponse() {
  return <div className="case-diagram">
    <figure className="timeline-diagram">
      <div className="timeline-grid">
        {timelineLanes.map((lane, index) => <span key={lane} className="timeline-lane" style={{ "--gr": index + 1 } as GridPlacement}>{lane}</span>)}
        {timelineLanes.map((lane, index) => <i key={`${lane}-track`} className={`timeline-track track-${index}`} style={{ "--gr": index + 1 } as GridPlacement} aria-hidden="true" />)}
        {timelineEvents.map(event => <div key={event.id} className={`timeline-event tone-${event.tone ?? "default"}`} data-lane={timelineLanes[event.lane]} style={{ "--gc": event.col + 1, "--gr": event.lane + 1 } as GridPlacement}>
          <strong>{event.step ? <b>{event.step}</b> : null}{event.title}</strong>{event.note ? <span>{event.note}</span> : null}
        </div>)}
      </div>
      <figcaption>동작 원리를 설명하기 위한 예시</figcaption>
    </figure>
    <div className="policy-block">
      <p className="diagram-label">오류별 재시도·종료 정책</p>
      <table className="policy-table">
        <thead><tr><th scope="col">상황</th><th scope="col">처리</th></tr></thead>
        <tbody>{errorPolicies.map(policy => <tr key={policy.situation}><th scope="row">{policy.situation}</th><td>{policy.action} <b className={policy.stop ? "is-stop" : undefined}>{policy.value}</b></td></tr>)}</tbody>
      </table>
    </div>
  </div>;
}

const adminSteps = [
  { title: "초기 구조", lines: ["초기 디자인·아키텍처", "기능 단위 폴더 구조", "공통 오류·세션 만료"] },
  { title: "핵심 화면", lines: ["로그인·앱 선택·앱 정보", "금칙어·관리자·메시지", "React Query 적용 참여"] },
  { title: "검증 기반", lines: ["Vitest·Testing Library", "회귀 테스트 195개", "PR에서 CI 자동 실행"] },
  { title: "실행 환경", lines: ["Node 20→24", "로컬·CI·Docker 버전 정렬"] },
  { title: "운영 전환", lines: ["개발 환경 배포", "1차 운영 전환 참여"], partial: true },
];

function AdminFlow() {
  return <div className="case-diagram admin-diagram">
    <ol className="step-flow">{adminSteps.map((step, index) => <li key={step.title} className={step.partial ? "is-partial" : undefined}>
      <span>STEP {index + 1}</span><strong>{step.title}</strong><p>{step.lines.map(line => <span key={line}>{line}</span>)}</p>
    </li>)}</ol>
    <div className="filter-flow" aria-label="편집 중 필터와 적용된 필터를 분리해 모든 요청이 같은 조건을 쓰는 구조">
      <div className="filter-box"><strong>편집 중 필터</strong><span>입력만 변경 · 조회 영향 없음</span></div>
      <span className="filter-arrow" aria-hidden="true">→</span>
      <div className="filter-box is-applied"><strong>적용된 필터</strong><span>검색할 때만 확정</span></div>
      <span className="filter-arrow" aria-hidden="true">→</span>
      <ul className="filter-targets">{["목록", "이어보기(커서)", "CSV 다운로드", "새로고침·재시도"].map(target => <li key={target}>{target}</li>)}</ul>
    </div>
  </div>;
}

function CssLayers() {
  return <div className="case-diagram layers-diagram">
    <div className="layers-col">
      <p className="diagram-label is-warn">BEFORE</p>
      <div className="layers-box is-winner"><strong>레이어 밖 스타일</strong><span>reset · 외부 디자인 시스템 전역 CSS</span></div>
      <div className="layers-box is-ignored"><strong>@layer 자체 디자인 시스템</strong><span>탭 여백·선택 색 무시됨</span></div>
    </div>
    <span className="layers-arrow" aria-hidden="true">→</span>
    <div className="layers-col">
      <p className="diagram-label">AFTER · 위일수록 우선</p>
      <div className="layers-box tier-1"><strong>@layer 자체 디자인 시스템</strong></div>
      <div className="layers-box tier-2"><strong>@layer 외부 디자인 시스템</strong></div>
      <div className="layers-box tier-3"><strong>@layer reset</strong></div>
      <p className="layers-note">진입 HTML에서 순서 먼저 선언</p>
    </div>
  </div>;
}

function CampaignContributions() {
  return <div className="campaign-notes">
    <section><span>메시지 작성</span><h4>새 타입 연결 범위</h4><ol className="contribution-flow">{["새 메시지 타입", "입력 폼", "템플릿", "저장·불러오기"].map(step => <li key={step}>{step}</li>)}</ol></section>
    <section><span>예약 현황</span><h4>디자인 전, 동작 검증</h4><ol className="contribution-flow">{["예약 현황 요구", "동작 프로토타입", "FE·BE·PM 확인", "캘린더 구현"].map(step => <li key={step}>{step}</li>)}</ol></section>
  </div>;
}

const diagrams: Record<CaseDiagramKind, ComponentType> = {
  "sdk-layers": SdkLayers,
  "late-response": LateResponse,
  "admin-flow": AdminFlow,
  "css-layers": CssLayers,
  campaign: CampaignContributions,
};

export function CaseDiagram({ kind }: { kind: CaseDiagramKind }) {
  const Diagram = diagrams[kind];
  return <Diagram />;
}
