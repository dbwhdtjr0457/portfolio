import { companyCases } from "@/content/case-studies";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedDetails } from "@/components/ui/animated-details";

export function CaseNarrative({ story }: { story: { problem: string; choice: string; reason: string; result: string } }) {
  return <div className="case-narrative">{[
    ["문제", story.problem], ["선택", `${story.choice} / ${story.reason}`], ["검증", story.result],
  ].map(([label, text]) => <div key={label}><h4>{label}</h4><p>{text}</p></div>)}</div>;
}

function MessageSequence() {
  return <div className="message-sequence" aria-label="실시간 수신과 복구 응답을 비교해 최신 메시지 하나로 합치는 과정">
    <div className="sequence-input"><span>실시간 수신</span><strong>메시지 ID 확인</strong></div>
    <div className="sequence-input"><span>복구 응답</span><strong>같은 ID 확인</strong></div>
    <div className="sequence-operator" aria-hidden="true">+</div>
    <div className="sequence-decision"><span>수정 시각 비교</span><strong>최신 상태 1건</strong></div>
    <p>취소·종료 이후 응답 제외</p>
  </div>;
}

function CampaignContributions() {
  return <div className="campaign-notes">
    <section><span>메시지 작성</span><h4>새 타입 연결 범위</h4><ol className="contribution-flow">{["새 메시지 타입", "입력 폼", "템플릿", "저장·불러오기"].map(step => <li key={step}>{step}</li>)}</ol></section>
    <section><span>예약 현황</span><h4>디자인 전, 동작 검증</h4><ol className="contribution-flow">{["예약 현황 요구", "동작 프로토타입", "FE·BE·PM 확인", "캘린더 구현"].map(step => <li key={step}>{step}</li>)}</ol></section>
  </div>;
}

export function CompanyCases() {
  return <>{companyCases.map((item, index) => <Reveal key={item.id} className="work-featured">
    <article className={`company-case case-${item.id}`}>
      <header className="company-case-heading"><span className="case-number">CASE 0{index + 1}</span><p>{item.label}</p><h3>{item.company}</h3><dl><div><dt>역할</dt><dd>{item.role}</dd></div><div><dt>기간</dt><dd>{item.period}</dd></div></dl></header>
      <div className="company-case-story"><div className="case-scope"><span>담당 범위</span><p>{item.scope}</p></div><p className="case-feature-label">대표 구현</p><h4>{item.title}</h4><p className="case-brief">{item.brief}</p>{item.id === "chatplanet" ? <MessageSequence /> : <CampaignContributions />}
        <p className="case-result"><span>검증</span>{item.result}</p>
        <AnimatedDetails label="구현과 검증 보기" className="work-details case-details"><div className="case-detail-notes">{item.id === "chatplanet" ? <>
          <p><span>자동 테스트</span>Vitest·Testing Library 195개 · CI 연결</p><p><span>리뷰 반영</span>세션 폐기 오류 재연결 대상 제외 · 반복 재연결 직접 재현 → 연결 종료</p><p><span>공통 UI</span>Storybook 36개 · MSW API 응답 재현</p><p><span>협업</span>FE·BE API·세션 동작 조율 · 동료 PR 리뷰</p>
        </> : <><p><span>프로토타입</span>동작 캘린더 선공유 · 화면 기반 요구사항 합의</p><p><span>API 전환</span>GET→POST 기존 호출부 탐색 · 동시 수정</p><p><span>협업</span>FE·BE·PM 요구사항 조율 · QA 조건 확인</p></>}<p className="case-tech">{item.tags}</p></div></AnimatedDetails>
      </div>
    </article>
  </Reveal>)}</>;
}
