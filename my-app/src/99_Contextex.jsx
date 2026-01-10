import { createContext, useContext, useState } from "react";


//스타일 부여 객체
const styles = {
    box : {border : '1px solid #ccc',padding : '15px',margin : '10px',borderRadius : '5px '},
    button : {padding : '8px 16px',marginRight: '5px',cursor : 'pointer'},
    header : {backgroundColor : '#f0f0f0', padding : '15px',marginBottom : '20px'}
};



//1. Context 생성(컴포넌트 밖에서 선언)
const AuthContext = createContext();

//2.Provider 컴포넌트 정의
const AuthProvider = ({children}) =>{
    //로그인 상태용 state (false : 로그아웃 ,true : 로그인 -기본값 false)
    const [isLogin,setIsLogin] = useState(false);
    //사용자 이름용 state (문자열 state 기본값 '')
    const [userName,setUserName] = useState('');
    //로그인 함수  (로그인 상태값 true로, 전달받은 이름 업데이트)
    const login = (name) =>{
        setIsLogin(true);
        setUserName(name);
    }
    //로그아웃 함수 (로그인 상태값 false로, 전달받은 이름 기본값으로 업데이트)
    const logout = (name) =>{
        setIsLogin(false);
        setUserName('');
    }

    //위에 생성한 AuthContext 를 이용하여 Provider로 하위 컴포넌트들에게 로그인상태,사용자이름,로그인함수,로그아웃함수 전달
    return(
        <AuthContext.Provider value={{isLogin,userName,login,logout}}>
            {children}
        </AuthContext.Provider>

    );

};

//3. Context를 사용하는 컴포넌트들 준비 

//헤더 컴포넌트 - 로그인 상태 표시용
const Header = () =>{
    //AuthContext에서 값을 가져오기 
    const {isLogin,userName} = useContext(AuthContext);
    return (
        <div style={styles.header}>
            <h2>Hello React</h2>
            {/* 로그인 상태값이 true라면 OOO님 환영합니다! 를, 상태값이 false라면 '로그인이 필요합니다' 메시지를 p 태그로 출력  */}
            {
                isLogin? (
                    <p>😊{userName}님 환영합니다.</p>
                ):(
                    <p>🚨로그인이 필요합니다.</p>
                )
            }
        </div>
    );
};


//로그인 폼 컴포넌트 
const LoginForm = () =>{
    //AuthContext에서 필요한 요소 받아오기 
    const {isLogin,login,logout} = useContext(AuthContext);
    //입력란에 필요한 상태값 준비 (문자열)
    const [inputName,setInputName] = useState('');


    //로그인 버튼 클릭시 입력값으로 로그인 처리 될수 있도록 하는 이벤트 핸들러
    const handleLogin = () =>{
        if(inputName.trim()){
            login(inputName);//입력된 이름 전달
            setInputName('');//입력란 초기화
        }
    };

    return (
        <div style={styles.box}>
            <h3>로그인 영역</h3>
            {/* 로그인 상태일땐  로그아웃 버튼 보이도록 */}
            {
                isLogin? (
                    <button style={styles.button} onClick={logout}>
                        로그아웃
                    </button>
                ): (
                    <>
                        <input type="text"
                            value={inputName}
                            onChange={(e)=>setInputName(e.target.value)}>
                        </input>
                        <button style={styles.button} onClick={handleLogin}>
                            로그인
                        </button>
                    </>
                )
            }
            {/* 로그아웃 상태일땐 이름 입력용 input 요소와 로그인 버튼 보이도록 처리 */}
       
        </div>
    )
};

//프로필 컴포넌트 
const Profile = () =>{
    //AuthContext에서 필요 데이터 가져오기 
    const {isLogin,userName} = useContext(AuthContext);

    return (
        <div style={styles.box}>
            <h3>프로필 영역</h3>
            {/* 로그인 되어있다면 이름과 로그인 상태를 p 태그로 표현 */}
            {/* 로그인 되어있지 않다면 '로그인 후 확인 가능합니다' 를 p태그로 표현 */}

            {
                isLogin? (
                    <>
                        <p>이름 : {userName}</p>
                        <p>상태 : ✅로그인 됨</p>
                    </>
                ):(
                    <p>
                        ⚠️로그인 후 확인 가능합니다.
                    </p>
                )
            }
        </div>
    );
};

//메인 컴포넌트
const LoginExample = () =>{
    return (
        //사용할 Provider를 이용하여 처리 
        <AuthProvider>
            <div style={{maxWidth : '500px',margin:'0 auto'}}>
                <h1>로그인 Context 예제</h1>
                <Header></Header>
                <LoginForm></LoginForm>
                <Profile></Profile>
            </div>
        </AuthProvider>
    );
};

//메인에서 해당 로그인 예제를 불러와 화면에 출력후 확인해보기
export default LoginExample;
