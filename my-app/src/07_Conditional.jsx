import { useState } from "react";


//조건부 랜더링
function Step7_Conditional(){

    const [isLogin, setIsLogin] = useState(false); //로그인이 되어있는지 판별할 상태값

    const [userLevel , setUserLevel] = useState("guest"); //유저 상태값

    const [isHide, setIsHide] = useState(false); 

    const [count, setCount] = useState(0); 

    

    /*
    const handleLevel = (e) => {

        if(userLevel==="guest") {
            return <div style={styles.info}>게스트로 접속하셨습니다.</div>
        } else if(userLevel==="user") {
            return <div style={styles.successBox}>일반 사용자 권한입니다.</div>
        } else if(userLevel==="admin") {
            return <div style={styles.errorBox}>관리자 권한입니다.</div>
        }

    }
    */



    const styles = {
        container : {padding: '20px', maxWidth : '600px', margin : '0px auto'},
        section : {marginBottom : '30px', padding:'20px', border:'1px solid black', borderRadius : '8px'}, 
        button : {padding : '10px 20px', margin : '5px', backgroundColor : 'beige', color : 'red', border: 'none', cursor: 'pointer'},
        select : {padding : '8px', margin:'5px', border:'1px solid black',borderRadius : '4px', width:'200px'},
        successBox : {padding : '15px', backgroundColor : 'lightgreen', border : '1px solid lightgreen', borderRadius : '4px', color : 'green'},
        errorBox : {padding : '15px', backgroundColor : 'pink', border : '1px solid red', borderRadius : '4px', color : 'darkred'},
        infoBox : {padding : '15px', backgroundColor : 'lightblue', border : '1px solid lightblue', borderRadius : '4px', color : 'blue'},
        detailBox : {padding : '15px', backgroundColor : 'lightyellow', border : '1px solid lightyellow', borderRadius : '4px', color : 'brown',marginTop : '10px'}
    }


    return (
        <div>
            <h1>React 조건부 랜더링</h1>
            <p>조건에 따라 다른 컴포넌트나 내용을 보여주는 방법.</p>

            <div style={styles.section}>
                <h2>1. 로그인 상태에 따른 랜더링 (if-else 패턴)</h2>
                <button style={styles.button}
                        onClick={() => setIsLogin(!isLogin)}
                    >
                    {isLogin ? '로그아웃' : '로그인'}    
                </button>

                {

                    isLogin? (
                        <div style={styles.successBox}>
                            {/* win + . : 이모티콘 창 */}
                            ✅ 로그인 상태입니다. 환영합니다.
                        </div>
                    ) : (

                        <div style={styles.errorBox}>
                            ❌ 로그인이 필요합니다. 로그인 버튼을 클릭하세요.
                        </div>

                    )

                } 


            </div>

            <div style={styles.section}>
                <h2>2. 다중 조건 렌더링 (switch 패턴)</h2>

                {/*위에 상태값으로 기본값 guest인 상태를 관리하는 변수 및 함수 준비 후 */}
                {/* 선택된 요소에 따라서 infoBox 스타일인 div - 게스트로 접속하셨습니다. */}
                {/* user라면 successBox 스타일인 - 일반 사용자 권한입니다. */}
                {/* admin이라면 errorBox 스타일인 div - 관리자 권한입니다.*/}
                {/* 위와같이 출력 될 수 있도록 작성하시오 해당 div 위치는 select 박스 아래에 작성*/}
                {/* 준비할 상태 변수 및 함수명은 자유 */}

                <select style={styles.select}
                        value = {userLevel}
                        onChange = {(e) => {
                            //console.log(e.target.value);
                            setUserLevel(e.target.value);
                        }}

                >

                    <option value="guest">게스트</option>
                    <option value="user">일반 사용자</option>
                    <option value="admin">관리자</option>

                </select>


                {
                    userLevel==="guest" && (
                        <div style={styles.infoBox}>게스트로 접속하셨습니다.</div>
                    )
                }

                {
                    userLevel === "user" && (
                        <div style={styles.successBox}>일반 사용자 권한입니다.</div>
                    )
                }

                {
                    userLevel === "admin" && (
                        <div style={styles.errorBox}>관리자 권한입니다.</div>
                    )
                }
             </div>   

              <div style={styles.section}>

                    <h2>3. 토글 방식 조건부 렌더링 (&&연산자)</h2>
                    <button
                        style={styles.button}
                        onClick={() => setIsHide(!isHide)}
                    >
                        {isHide ? '상세보기 숨기기' : '상세정보 보기'}
                    </button>

                    {/* 논리값을 사용할 수 있는 상태값을 준비하여 버튼에는 true일 경우
                        상세보기 숨기기를 표시 false일 경우 상세정보보기를 표시하고
                        아래에 있는 div detailBox 영역을 해당 상태값이 true일 경우에만 보여주도록 처리해보기
                        상태값 변수명 자유
                    */}

                    {
                        isHide === true && (

                        
                        <div style={styles.detailBox}>
                            <h3>상세 정보</h3>
                            <p>이 내용은 조건이 true일 경우에만 볼 수 있습니다.</p>

                            {/* new Date().toLocaleDateString() : 현재 시간을 문자열로 반환하는 메소드 */ }
                            <p>현재 시간 : {new Date().toLocaleDateString()}</p>
                        </div>

                        )
                    }

                </div>

                <div style={styles.section}>
                    <h2>4. 숫자 조건에 따른 렌더링</h2>
                    {/*
                        카운트 증가버튼, 리셋버튼을 만들고 증가버튼을 눌렀을때 카운트가 증가될수 있도록 처리
                        증가버튼에 카운트 숫자를 카운트 증가(3)과 같이 표시하고 리셋버튼 하단에는
                        count 상태값에 따라서 아래 메시지를 넣어 div를 생성한다. (스타일 자유)
                        0일땐 - 카운트가 0입니다.
                        1~4일땐 - 카운트가 1~4 사이입니다.
                        5~9일땐 - 카운트가 5~9 사이입니다.
                        10이상일땐 카운트가 10 이상입니다 를 렌더링 해보기
                        조건처리는 jsx 영역에서 해보세요
                    */}

                    <button style={styles.button} onClick={() => setCount(count+1)}
                    >
                    카운트 증가({count})  
                    </button>

                    <button style={styles.button} onClick={() => setCount(0)}
                    >
                    리셋
                    </button>

                    {
                        count === 0 && (
                            <div style={styles.detailBox}
                            >

                            <p>카운트가 0입니다.</p>

                            </div>    
                        )
                    }

                    {
                        (count >=1 && count <5) && (

                            <div style={styles.detailBox}
                            >

                            <p>카운트가 1~4입니다.</p>

                            </div>

                        )
                    }

                    {

                        (count >=5 && count <10) && (

                            <div style={styles.detailBox}
                            >

                            <p>카운트가 5~9입니다.</p>

                            </div>

                        )

                    }

                    {
                        (count>=10) && (

                            <div style={styles.detailBox}
                            >

                            <p>카운트가 10이상입니다.</p>

                            </div>

                        )
                    }


                </div>

                

                
            </div>
        
    );


}

export default Step7_Conditional;