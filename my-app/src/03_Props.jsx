import { useState } from "react";

//1. 기본 Props 사용법
function StudentCard({name,grade,subjects,isPresent}){


    //console.log(subjects);
    return (
        <div style={{
            border : '1px solid black',
            padding : '16px',
            margin: '8px',
            borderRadius : '8px',
            backgroundColor : isPresent ? 'bisque' : 'beige'
        }}>
            <h3>{name} 학생</h3>
            <p>학년 : {grade}학년</p>

            {/* 과목은 문자열 나열 */}
            <p>과목 : {subjects.join(',')}</p>

            {/*출석이면 '출석' 결석이면 '결석' 표현*/}
            <p>출석 : {isPresent?'출석':'결석'}</p>


        </div>
    );
}

//학생 데이터 목록 준비
const students = [
    {
        name : '김유저',
        grade : 3,
        subjects : ['자바','오라클','자바스크립트'],
        isPresent : true
    },

    {
        name : '박학생',
        grade : 2,
        subjects : ['리액트','스프링부트','마이바티스'],
        isPresent : false
    },

    {
        name : '한개발',
        grade : 1,
        subjects : ['스프링레거시','JSP','JSTL'],
        isPresent : true
    }
];

//사용자 데이터
const user = {
    name : '김개발',
    email : 'kimdev@google.com',
    age : 30,
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzzsEJw2-AphrbszlvGrcGhxhATnRur98xQ&s',
    hobby : ['달리기','코딩','동산','게임']
};

//2.객체 Props 전달
function ProfileCard({user}){
    return (
        <div style={{
            border : '2px solid blue',
            padding : '20px',
            margin : '10px',
            borderRadius : '10px',
            backgroundColor : 'beige'

        }}>

        <img src={user.img} alt={user.name}
            style={{
                width : '100px',
                height : '100px',
                borderRadius : '50%',
                objectFit : 'cover'

            }}
        />
            <h2>이름 : {user.name} </h2>
            <p>이메일 : {user.email}</p>
            <p>나이 : {user.age}</p>
            <div>
                <h4>취미</h4>
                <ul>
                    {
                        user.hobby.map((hb,index) => (
                            <li key={index}>{hb}</li>
                        )
                        )
                    }
                </ul>    
            </div>        

        </div>
    )
}

//3.함수 Props (이벤트 핸들러)
function Counter({count,onIncrement,onDecrement,onReset}) {

    const btnStyle = {
        backgroundColor : 'lightblue',
        color : 'white',
        border : 'none',
        padding : '10px 5px',
        margin : '5px',
        borderRadius : '5px',
        cursor : 'pointer'
    };

    return (
        <div style={{
            border : '1px solid darkgreen',
            padding : '20px',
            margin : '10px',
            borderRadius : '8px',
            textAlign : 'center',
            backgroundColor : 'burlywood'

        }}>
            <h2>카운터 : {count}</h2>
            <div>
                <button style={btnStyle} onClick={onIncrement}>
                    증가(+)
                </button>

                <button style={{...btnStyle,backgroundColor:'red'}} onClick={onDecrement}>
                    감소(-)
                </button>

                <button style={{...btnStyle,backgroundColor:'blue'}} onClick={onReset}>
                    초기화
                </button>
            </div>
        </div>
    )

}

//4.Children과 조건부 랜더링
function Modal({isOpen,title,onClose,children}){

    //전달받은 모달 논리상태값이 false면 null 리턴하기
    if(!isOpen) return null;

    return (
        <div style={{

            position : 'fixed',
            top: 0,
            left : 0,
            right : 0,
            bottom : 0,
            backgroundColor : 'rgba(0,0,0,0.5)',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            zIndex : 1000

        }}>

        <div style={{
            backgroundColor : 'white',
            padding : '20px',
            borderRadius : '8px',
            maxWidth : '500px',
            width : '90%'
        }}>    

            <div style={{
                display : 'flex',
                justifyContent : 'space-between',
                alignItems : 'center',
                marginBottom : '15px'
            }}>
                <h2>{title}</h2>
                <button onClick={onClose} style={{
                    backgroundColor : 'blue',
                    color : 'white',
                    border : 'none',
                    padding : '5px 10px',
                    borderRadius : '3px',
                    cursor : 'pointer'
                }}>
                    X
                </button>
            </div>    
          {/*전달받은 children 태그들 넣을 위치 */}  
          {children}
        </div> 
      </div>   
    );


}



//내보낼 컴포넌트 (export용)
function Step3_Props(){

    //상태값 관리하기 위한 hook 준비
    const [count,setCount] = useState(0);

    //모달창 열고 닫기 위해 사용할 논리 상태값 준비
    const [isModalOpen,setIsModalOpen] = useState(false);


    return (

        <div>
            <h1>3단계 : Props 심화 학습</h1>
            <h2>1.다양한 타입의 props 전달</h2>
            {/* 학생목록(배열)을 반복하여 StudentCard를 생성 및 전달 데이터 전달 */}
            {/* 전달 데이터는 각 학생객체에 있는 속성명 그대로 전달하기 */}
            {/* StudentCard 컴포넌트에서는 각 위치에 알맞게 데이터 추가하여 출력할 수 있도록 수정해보기 */}

            
            {students.map((student,index) => (
                <StudentCard key={index} 
                    name={student.name}
                    grade={student.grade}
                    subjects={student.subjects}
                    isPresent={student.isPresent}
                    //{...student}
                    >
                    
                </StudentCard>
                        
            ))};

            <h2>2. 객체 Props 전달</h2>
            <ProfileCard user={user}/>

            <h2>3. 함수 Props 전달</h2>
            <Counter
                count={count}
                onIncrement={()=>setCount(count+1)}
                onDecrement={()=>setCount(count-1)}
                onReset={()=>setCount(0)}
            />

            <h2>4. 모달 컴포넌트 (Children 활용)</h2>
            <button onClick={() => setIsModalOpen(true)}
                    style={{
                        backgroundColor : 'blue',
                        color : 'white',
                        border : 'none',
                        padding : '10px 20px',
                        borderRadius : '5px',
                        cursor : 'pointer',
                        margin : '10px'
                    }}
                >
                모달 열기
            </button>

            <Modal
                isOpen={isModalOpen}
                title={"모달예제"}
                onClose={()=>setIsModalOpen(false)}
            >
                <p>이것은 모달의 내용입니다.</p>
                <p>Children Prop을 이용하여 전달된 태그들 입니다.</p>

                <button onClick={() => setIsModalOpen(false)}
                    style={{
                        backgroundColor : 'blue',
                        color : 'white',
                        border : 'none',
                        padding : '10px 20px',
                        borderRadius : '5px',
                        cursor : 'pointer',
                        margin : '10px'
                    }}
                >
                확인
                </button>    
            </Modal>

            <div style={{
                border : '1px solid darkgreen',
                padding : '20px',
                margin : '10px',
                borderRadius : '8px',
                textAlign : 'center',
                backgroundColor : 'burlywood'
            }}>
                
                <h3>Props 정리</h3>
                <ul>
                    <li>Props는 읽기 전용이다.</li>
                    <li>모든 타입의 데이터를 전달할 수 있다.</li>
                    <li>함수도 Props로 전달하여 이벤트 처리를 할 수 있다.</li>
                    <li>구조 분해 할당을 통해 Props를 더욱 쉽게 사용 가능하다.</li>
                    <li>기본값을 설정하여 안전하게 사용할 수 있다.</li>
                    <li>children을 활용한다면 더욱 유연한 컴포넌트들을 작성할 수 있다.</li>
                </ul>

            </div>
            
            

        </div>

    );
}

export default Step3_Props;