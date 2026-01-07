import { useState } from "react";

//리스트 랜더링 : 배열 데이터를 기반으로 여러 컴포넌트들을 렌더링 하는 방법
function Step8_List(){
    //데모데이터 목록 준비
    const [todos,setTodos] = useState([
        {id : 1,text : '리액트 공부하기',completed : false},
        {id : 2,text : '프로젝트 만들기',completed : true},
        {id : 3,text : '포트폴리오 만들기',completed : false}
    ]);

    const [newTodoText, setNewTodoText] = useState(''); // 새 할 일 입력값 state 만들기 

    //formInput.trim()

    
    //새로운 할일 담을 변수 준비  (변수명 자유)

    //할일 추가 이벤트 핸들러 (함수명 자유) 
    //공백제거한 입력값이 있을때 할일 목록에 추가하기
    //할일 목록은 각 인덱스에 담긴 데이터가 객체 형태이기 때문에
    //할일 추가할때도 객체로 만들어서 추가하기 (식별자,할일,여부)
    //식별자는 중복되지 않는 키값을 이용 카운트 증가값 또는 Date.now() 사용하여 현재시간으로 처리 
    //할일은 추가 input 요소에서 작성한 value로 넣기
    //실행 여부는 기본값 false 
    //작성 추가후 새 할일 작성영역 비워주기 

    const addWork = () => {
        const text = newTodoText.trim();

        if(!text) {
            return;
        }

        setTodos((todos) => [
            ...todos,{id : Date.now(),text,completed: false}, // 스프레드 연산자 이용
        ]);

        setNewTodoText("");
    };


    //할일 완료 토글 이벤트 핸들러 (함수명 자유)
    //각 반복되어 나온 요소가 어떤 요소인지 판별할수 있는 식별자를 전달받아 
    //해당 요소를 찾아서 completed를 반대값으로(논리부정) 변환하여 수정하기
    //todos 목록 자체에서 찾아내어 수정해야함 **

    const completeWork = (id) => {
        setTodos((todos) =>
        todos.map((todo) =>
            todo.id === id ? {...todo, completed : !todo.completed} : todo
        )
        );

    }


    //할일 삭제 이벤트 핸들러 (함수명 자유)
    //어떠한 대상이 삭제되어야하는지 식별자를 전달받아 해당 값을 이용하여 기존 목록에서 제거한 목록으로 수정해보기



     const styles = {
        container : {padding:'20px',maxWidth : '600px', margin : '0px auto'},
        section : {marginBottom : '30px',padding:'20px',border : '1px solid black',borderRadius : '8px'},
        button : {padding : '10px 20px',margin : '5px',backgroundColor : 'beige', color :'red',border:'none',cursor : 'pointer'},
        deleteButton : {padding : '5px 10px',backgroundColor:'red',color:'white',border : 'none',borderRadius : '4px',cursor:'pointer',fontSize:'12px'},
        input : {padding : '8px',margin : '5px', border : '1px solid gray',borderRadius : '4px',width : '200px'},
        todoItem : {display : 'flex',alignItems : 'center',justifyContent : 'space-between', padding : '10px',borderBottom : '1px solid lightgray'},
        completed : {textDecoration : 'line-through',color : 'gray'},
        userCard : {padding : '15px',margin : '10px 0',backgroundColor : 'white',border : '1px solid lightgray',borderRadius : '6px'},
        fruitItem : {display : 'inline-block',padding : '5px 10px',margin : '5px',backgroundColor : 'lightblue',borderRadius : '15px',fontSize :'14px'}
    
    };


    return (
        <div style={styles.container}>
            <h1>React 리스트 랜더링</h1>
            <p>배열 데이터를 기반으로 여러 컴포넌트를 랜더링 하는 방법 (고유 key값 필수)</p>

            <div style={styles.section}>
                <h2>1.동적 리스트 - 할 일 목록 만들기</h2>
                <div style={{display : 'flex',gap : '10px',marginBottom : '15px',justifyContent : 'center'}}>
                    <input type="text" 
                           style={styles.input}
                           placeholder="새 할 일 입력"
                           value={newTodoText}
                           onChange={(e) => setNewTodoText(e.target.value)}
                           
                    />

                    <button style={styles.button}
                            onClick={addWork}
                           >할일 추가</button>
                </div>

                {/* 위에서 작성한 할일 목록 출력하기 */}
                <div>
                    {
                        todos.map(todo=> (
                            // 해당 객체에 있던 id (식별자)를 이용하여 key값 추가 
                            <div key={todo.id} style={styles.todoItem}>
                                <span
                                    onClick={() => completeWork(todo.id)}
                                    //각 todo에 있는 completed 속성값이 true라면 스타일 부여 아니라면 스타일 X 
                                    style={{...(todo.completed? styles.completed : {}),cursor:'pointer'}}>
                                    
                                    {todo.completed? '✅':'⬜'} {todo.text}
                                </span>
                                <button style={styles.deleteButton}
                                        //onClick={}
                                        >
                                    삭제
                                </button>
                            </div>
                        ))
                    }
                </div>
                {/* todo 객체 실행여부 논리값인 completed를 이용하여 조건에 부합하는 대상만 모아 배열로 반환시켜 해당 개수를 추출(length) */}
                <p>총 {todos.length}개의 할 일, 완료 : {todos.filter(t=>t.completed).length} 개</p>
                {/* filter 자체 규칙이 true인것만 걸러냄  */}


            </div>

        </div>


    );

}

export default Step8_List;