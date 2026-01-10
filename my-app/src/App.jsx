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
import FragmentExample from './09_Fragment.jsx'
import ContextComponent from './10_Context.jsx'
import LoginExample from './99_Contextex.jsx'
import CartExample from './100_ContextEx.jsx'
import RouterComponent from './11_Router.jsx'
import RefComponent from './12_Ref.jsx'



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

      <section>
        <h2>Fragment 사용</h2>
        <FragmentExample></FragmentExample>
      </section>

      <section>
        <h2>Context 활용</h2>
        <ContextComponent></ContextComponent>
      </section>

      <section>
        <h2>로그인 예제</h2>
        <LoginExample></LoginExample>
      </section>

      <section>
        <h2>장바구니 예제</h2>
        <CartExample></CartExample>
      </section>

      <section>
        <RouterComponent></RouterComponent>
      </section>

      <section>
        <h2>Ref 사용해보기</h2>
        <RefComponent></RefComponent>
      </section>
    </div>


  )
}

export default App
