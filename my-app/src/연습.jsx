
//이벤트 처리 : 사용자 상호 작용(클릭,입력 등등)

import { useState } from "react";

function Step6_Events() {

    const [clickCount,setClickCount] = useState(0);
    const [message,setMessage] = useState("이벤트를 발생시켜보세요");
    const [formInput, setFormInput] = useState(''); // 입력폼에서 입력값을 다룰 상태값

    //클릭 이벤트 처리
    const handleClic = () => {
        //해당 클릭 버튼을 눌렀을때 클릭 카운트가 1 증가하고
        //메시지에는 버튼이 N번 클릭되었습니다. 라는 문구가 들어갈 수 있도록 처리해보기

        //해당 위치에서 변경된 상태값을 다뤄야한다면 변수에 담아놓고 처리하기 또는 같은 연산처리 수행하기
        setClickCount(clickCount + 1);

        setMessage(`버튼이 ${clickCount + 1}번 클릭되었습니다.`);
    }

    const handleSubmit = (e) => {

        e.preventDefault(); 

        if(formInput) {
            setMessage(`폼이 제출되었습니다. 입력값은 ${formInput}입니다.`);
            setFormInput("");
        } else {
            setMessage(`메시지에 입력값이 비어있습니다. 입력해주세요.`);
        }

    }

    const handleMouseEnter = () => {
        setMessage(`마우스가 들어왔습니다.`);
    }

    const handleMouseLeave = () => {
        setMessage(`마우스가 나갔습니다.`);
    }

    const handleKeyDown = (e) => {

        if(e.code === 'Enter') {
            setMessage("Enter키가 눌렸습니다.");
        }
        
    }

    const styles = {
        container : {padding: '20px', maxWidth : '600px', margin : '0px auto'},
        section : {marginBottom : '30px', padding:'20px', border:'1px solid black', borderRadius : '8px'}, 
        button : {padding : '10px 20px', margin : '5px', backgroundColor : 'beige', color : 'red', border: 'none', cursor: 'pointer'},
        input : {padding : '8px', margin:'5px', border:'1px solid black',borderRadius : '4px', width:'200px'},
        hoverArea : {padding : '20px', backgroundColor : 'pink', border: '2px dashed hotpink', textAlign : 'center', cursor : 'pointer', margin: '10px 0'},
        message : {padding : '20px', backgroundColor : 'lightblue', border : '1px solid skyblue', borderRadius : '4px', marginTop : '10px'}
    }
    
    return (
        <div style={styles.container}>
            <h1>React 이벤트 처리</h1>
            <p>사용자의 다양한 상호 작용을 처리하는 방법들</p>

            <div style={styles.message}>
                메시지 : {message}
            </div>

            <div style={styles.section}>
                <h2>클릭 이벤트</h2>
                <button style={styles.button} onClick={() => handleClic()}>
                    클릭하세요 (클릭 횟수 : {clickCount})
                </button>
            </div>

            {/* handleSubmit 이벤트 핸들러를 정의하여
                입력된 텍스트가 존재할때 메시지에 폼이 제출되었습니다. 입력값은 OOO입니다. 를 추가 후
                입력폼 비워주기 작업
                만약 텍스트가 존재하지 않을때 폼제출 이벤트가 동작한다면
                메시지에 입력값이 비어있습니다. 입력해주세요. 를 출력하시오
                *기본 이벤트 동작을 막는 함수 e.preventDefault(); 참고  
             */}

            <div style={styles.section}>
                <h2>폼 제출 이벤트</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text"
                            style={styles.input}
                            value={formInput}
                            onChange={(e) => {
                                setFormInput(e.target.value);
                            }}
                            placeholder="텍스트 입력"
                     />     

                     <button style={styles.button} type="submit">제출</button>  
                </form>
            </div>

            {/* 마우스가 들어왔을땐 메시지에 마우스가 들어왔습니다. 나갔을땐 메시지에 마우스가 나갔습니다. 처리 */}
            <div style={styles.section}>
                <h2>마우스 이벤트</h2>
                <div style={styles.hoverArea}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    마우스를 올려보세요 
                </div>
            </div>

            {/*키보드에서 엔터키를 눌렀을 경우 메시지에 Enter가 눌렸습니다. 를 출력해보세요 */}
            <div style={styles.section}>
                <h2>키보드 이벤트</h2>
                <input type="text"
                        style={styles.input}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter키를 눌러보세요"
                />        
            </div>


        </div>
    )
}