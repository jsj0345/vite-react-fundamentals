import { useState,useEffect } from "react";

const FetchEx = () => {
    //상태값 준비
    //todolist용, 로딩용, 에러용 하나씩 준비
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(null);


    //스타일 객체 준비
    const styles = {
        container : {
            padding : '20px',
            maxWidth : '600px',
            margin : '0 auto'
        },

        errorBox : {
            backgroundColor : '#ffcccc',padding : '10px', marginBottom : '10px', borderRadius : '4px'
        },

        loadingBox : {
            backgroundColor : '#ffffcc',padding : '10px', marginBottom : '10px', borderRadius : '4px'
            
        },

        todoItem : {
            padding : '10px', marginBottom : '10px', borderRadius : '4px',border : '1px solid #ddd'
            
        },

        completed : {
            textDecoration : 'line-through', color : 'gray'
        },

        button : {
            padding : '8px 16px', marginRight : '10px', cursor : 'pointer'
        }


    };

    //컴포넌트 처음 마운트시 데이터 조회
    useEffect(() => {
        fetchTodos(); 
    },[]);

    //todo 목록 가져오기
    const fetchTodos = async () => {
        //조회 경로 : https://jsonplaceholder.typicode.com/todos?_limit=10
        setLoading(true); //로딩상태 주기
        setError(null); // 에러 메시지 초기화

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

            if(!response.ok) {
                throw new Error(`Http Error ! Status : ${response.status}`);
            }

            const data = await response.json();

            setTodos(data); 

        } catch(err) {
            setError('데이터를 불러오는데 실패했습니다 : ${err.message}');
        } finally {
            setLoading(false);
        }

        //에러 발생 시 에러용 상태값에 `데이터 불러오는데 실패했습니다 : -에러메시지 담기
        //조회가 끝나면 로딩 상태 변경하기 (로딩해제)
    }

    //단일 todo 가져오기
    const fetchSingleTodo = async (id) => {
        //전달받은 todo의 아이디를 이용하여 해당 todo 아이디 조회하기
        setLoading(true);

        try {
            //요청 경로 : https:jsonplaceholder.typicode.com/todos?id=전달아이디
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?id=${id}`);

            if(!response.ok) {
                throw new Error(`HTTP ERROR ! STATUS : ${response.status}`);
            }

            const data = await response.json(); 

            console.log(data);

            alert(`TODO : ${data[0].title}`); 

            //전달받은 아이디와 목록에서의 아이디가 같다면 논리값 뒤집기(토글형식)
            setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed} : todo));

            //위와같이 에러 및 조회 끝 처리
             

            //조회된 todo 정보 alert으로 간단히 띄우기 

        } catch(err) {

            setError(`조회 실패 ! : ${err.message}`);

        } finally {
            setLoading(false); 
        }
        
    } 

    return (
        <div style={styles.container}>
            <h1>Fetch 예제</h1>

            {/* 버튼 영역*/}
            {/* 해당 버튼을 누르면 목록 새로고침(재조회) */}
            <div style={{marginBottom : '20px'}}>
                <button style={styles.button} onClick = {fetchTodos}>
                    목록 새로고침
                </button>
            </div>

            {/*에러표시 영역*/}
            {error && <div style={styles.errorBox}>{error}</div>}

            {/*로딩표시 영역*/}
            {loading && <div style={styles.loadingBox}>로딩중입니다...</div>}

            {/*todo 목록 div(todoItem)+span(todo.completed)으로 처리*/}
            <h2>TODO 목록 (총 {todos.length}개)</h2>

            {
                todos.map(todo => (
                    <div style={styles.todoItem} key={todo.id} onClick={()=>fetchSingleTodo(todo.id)}>
                        <span style={todo.completed? styles.completed : {}}>
                            {todo.completed ? '✅' : '⬜'} {todo.title}
                        </span>

                    </div>       
                ))
            }


        </div>
    )
}

export default FetchEx; 