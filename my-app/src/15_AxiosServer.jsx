import axios from "axios";
import { useEffect, useState } from "react";

const AxiosServer = () =>{

    const [list,setList] = useState([]);
    const [formData, setFormData] = useState({
        title : '',
        writer : '',
        content : ''
    });


    //게시글 목록 조회해보기 
    const boardList = async () =>{

        const response = await axios.get('/api/list');

        console.log(response);

        setList(response.data);
    }

    //게시글 작성 해보기 
    const insertBoard = async () => {

        
        //post 요청하기
        const response = await axios.post('/api/insert',{
            boardWriter : formData.writer,
            boardTitle : formData.title,
            boardContent : formData.content
        });

        if(response.data > 0) {
            alert('등록 성공!');
        } else {
            alert('등록 실패!');
            console.log(response.data);
        }
    }

    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormData({...formData,[name] : value});

    }

    const selectMember = () => {
        //버튼 누르면 사용자 정보 조회해오기
        //가지고 있는 사용자 아이디를 이용하여 실제 데이터베이스에서 조회된 사용자 정보 출력하기
        //get요청시 찾고자하는 아이디 전달하기  
        //이름,이메일,전화번호,주소 데이터 불러와서 2번 프로필처럼 만들어보기

        

        
    }



    useEffect(()=>{
        boardList();
    },[]);


    return (
        <div>
            <h2>Axios로 서버에 요청하기</h2>
           {/* 게시글 목록 */}
            <div style={{ marginTop: "20px" }}>
                <h4>게시글 목록</h4>
         
                  {list?.length ===0 ? (
                    <p>게시글이 없습니다. "GET (목록 조회)" 버튼을 클릭하세요.</p>
                ) : (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {list.map(board => (
                            <li key={board.boardNo} style={listItemStyle}>


                                {/* 포스트 클릭 핸들러 */}
                                <span 
                                    onClick={()=>handleSelect(board)}
                                    style={{ cursor: "pointer", flex: 1 }}
                                >
                                    <strong>[{board.boardNo}]</strong> {board.boardTitle}
                                </span>
                                
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
            {/* 게시글 제목,내용,사용자아이디 input으로 입력받아 post 요청해보기 */}
            {/* 요청 매핑은 /api/insert */}
            {/* 전달값담아서 요청하고 스프링에서 해당 데이터 받아서 System.out.println으로 출력해보기 */}

            <button onClick={insertBoard} style={btnStyle}>
                POST 요청
            </button>

            <button onClick={selectMember} style={btnStyle}>GET 요청</button>


        </div>
    )
}

const btnStyle = {
    padding: "8px 16px",
    margin: "5px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#2196F3",
    color: "white",
    cursor: "pointer"
};

const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderBottom: "1px solid #eee"
};

export default AxiosServer;