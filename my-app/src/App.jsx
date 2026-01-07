import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Step1_JSX from './01_JSX.jsx'
import Step2_Components from './02_Component.jsx'
import Step3_Props from './03_Props.jsx'
import Step4_State from './04_State.jsx'
import Step5_Hooks from './05_Hooks.jsx'
import Step6_Events from './06_EventHandler.jsx'
import Step7_Conditional from './07_Conditional.jsx'
import Step8_List from './08_List.jsx'

function App() {
  

  return (
    <div>
      <h1>React 학습</h1>
      <section>
        <h2>JSX 문법</h2>
        {/* 01_JSX 컴포넌트를 사용하기 위해(import) */}
        <Step1_JSX></Step1_JSX>
      </section>

      <section>
        <h2>컴포넌트 기본</h2>
        <Step2_Components></Step2_Components>
      </section>

      <section>
        <h2>Props 심화</h2>
        <Step3_Props></Step3_Props>
      </section>

      <section>
        <h2>State 관리</h2>
        <Step4_State></Step4_State>
      </section>

      <section>
        <h2>Hooks(useEffect 활용)</h2>
        <Step5_Hooks></Step5_Hooks>

      </section>

      <section>
        <h2>문제</h2>
        <Step6_Events></Step6_Events>
      </section>

      <section>
        <h2>Conditional (조건부 렌더링)</h2>
        <Step7_Conditional></Step7_Conditional>
      </section>

      <section>
        <h2>List (목록 렌더링)</h2>
        <Step8_List></Step8_List>
      </section>
    </div>
  )
}

export default App
