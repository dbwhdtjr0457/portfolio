"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

type GridPlacement = CSSProperties & { "--gc"?: number; "--gr"?: number };

const timelineLanes = ["REST 조회", "실시간 이벤트", "화면 상태"];
const timelineEvents = [
  { id: "request", step: 1, mark: "①", lane: 0, col: 1, title: "과거 페이지 요청", note: "#42 수정 전(v1) 포함" },
  { id: "event", step: 2, mark: "②", lane: 1, col: 2, title: "#42 수정 이벤트(v2) 도착" },
  { id: "apply", step: 2, lane: 2, col: 2, title: "#42 → v2 반영", tone: "state" },
  { id: "late", step: 3, mark: "③", lane: 0, col: 3, title: "늦게 도착한 응답(#42 v1)", note: "ID·수정 시각 비교 → 더 오래된 값 무시", tone: "late" },
  { id: "keep", step: 4, mark: "④", lane: 2, col: 4, title: "#42는 v2 유지", tone: "keep" },
];
const stepDescriptions = [
  "단계 재생 또는 다음 → 순서대로 확인",
  "① 과거 페이지 요청 · #42가 수정 전(v1)으로 담김",
  "② #42 수정 이벤트(v2) 도착 → 화면에 v2 반영",
  "③ 늦게 도착한 응답(#42 v1) → ID·수정 시각 비교로 반영하지 않음",
  "④ 화면은 #42 v2 유지",
];
const lastStep = 4;
const stepDelay = 1600;

export function LateResponseTimeline() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      const next = Math.min(step + 1, lastStep);
      setStep(next);
      if (next >= lastStep) setPlaying(false);
    }, stepDelay);
    return () => window.clearTimeout(timer);
  }, [playing, step]);

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (step === 0 || step >= lastStep) setStep(1);
    setPlaying(true);
  };

  const goTo = (next: number) => {
    setPlaying(false);
    setStep(Math.max(1, Math.min(lastStep, next)));
  };

  return <figure className="timeline-diagram" data-playing={step > 0 ? "true" : undefined}>
    <div className="timeline-grid">
      {timelineLanes.map((lane, index) => <span key={lane} className="timeline-lane" style={{ "--gr": index + 1 } as GridPlacement}>{lane}</span>)}
      {timelineLanes.map((lane, index) => <i key={`${lane}-track`} className={`timeline-track track-${index}`} style={{ "--gr": index + 1 } as GridPlacement} aria-hidden="true" />)}
      {timelineEvents.map(event => {
        const state = step === 0 ? "" : event.step === step ? " is-current" : event.step > step ? " is-muted" : " is-past";
        return <div key={event.id} className={`timeline-event tone-${event.tone ?? "default"}${state}`} data-lane={timelineLanes[event.lane]} style={{ "--gc": event.col + 1, "--gr": event.lane + 1 } as GridPlacement}>
          <strong>{event.mark ? <b>{event.mark}</b> : null}{event.title}</strong>{event.note ? <span>{event.note}</span> : null}
        </div>;
      })}
    </div>
    <div className="timeline-controls">
      <button type="button" className="diagram-button is-primary" onClick={togglePlay}>{playing ? "재생 정지" : "단계 재생"}</button>
      <button type="button" className="diagram-button" aria-disabled={step <= 1} onClick={() => { if (step > 1) goTo(step - 1); }}>이전</button>
      <button type="button" className="diagram-button" aria-disabled={step >= lastStep} onClick={() => { if (step < lastStep) goTo(step + 1); }}>다음</button>
      <button type="button" className="diagram-button" onClick={() => goTo(1)}>처음으로</button>
      <span className="timeline-counter" aria-hidden="true">{step}/{lastStep}</span>
    </div>
    <p className="timeline-status" aria-live="polite">{stepDescriptions[step]}</p>
    <figcaption>동작 원리를 설명하기 위한 예시</figcaption>
  </figure>;
}

const demoTabs = ["전체", "문서", "대화"];

export function LayerToggleDemo() {
  const [declared, setDeclared] = useState(false);
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const moveSelection = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = { ArrowRight: index + 1, ArrowDown: index + 1, ArrowLeft: index - 1, ArrowUp: index - 1, Home: 0, End: demoTabs.length - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (keys[event.key]! + demoTabs.length) % demoTabs.length;
    setSelected(next);
    tabRefs.current[next]?.focus();
  };

  return <div className="layer-demo">
    <div className="layer-demo-control">
      <p className="diagram-label">직접 확인 · 격리된 예시</p>
      <button type="button" role="switch" aria-checked={declared} className="layer-switch" onClick={() => setDeclared(value => !value)}>
        <span className="layer-switch-track" aria-hidden="true"><span className="layer-switch-thumb" /></span>
        <span>레이어 순서 선언</span>
        <span className="layer-switch-state" aria-hidden="true">{declared ? "후" : "전"}</span>
      </button>
      <code className={declared ? "is-declared" : undefined}>@layer reset, external-ds, design-system;</code>
      <p className="layer-demo-note" aria-live="polite">{declared ? "선언 후 · design-system 스타일 우선 → 여백·선택 색 복구" : "선언 전 · 레이어 밖 전역 CSS 우선 → 여백·선택 색 사라짐"}</p>
    </div>
    <div className={`layer-demo-preview${declared ? " is-declared" : ""}`}>
      <p className="layer-demo-caption">예시 탭 컴포넌트</p>
      <div className="demo-tabs" role="radiogroup" aria-label="예시 탭">
        {demoTabs.map((tab, index) => <button
          key={tab}
          ref={node => { tabRefs.current[index] = node; }}
          type="button"
          role="radio"
          aria-checked={selected === index}
          tabIndex={selected === index ? 0 : -1}
          className="demo-tab"
          onClick={() => setSelected(index)}
          onKeyDown={event => moveSelection(event, index)}
        >{tab}</button>)}
      </div>
    </div>
  </div>;
}
