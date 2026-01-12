const FetchPostEx = () => {

    //입력값 상태

    //응답 결과 상태

    //로딩 상태

    const styles = {
        container : {
            padding : '20px', maxWidth : '500px', margin : '0 auto'
        },
        input : {
            width : '100%', padding : '10px', marginBottom : '10px', fontSize : '16px'
        },
        textarea : {
            width : '100%', padding : '10px', marginBottom : '10px', fontSize : '16px', minHeight : '100px'
        },
        button : {
            padding : '10px 20px', fontSize : '16px', cursor : 'pointer', backgroundColor : 'black',
            color : 'white', border : 'none', borderRadius : '4px'
        },
        resultBox : {
            marginTop : '20px', padding : '15px', backgroundColor : 'beige', borderRadius : '4px'
        }
    };

    //입력값 변경 처리 함수

    //post 요청 처리 함수

    return (
        <div style={styles.container}>
            <h1>Post 요청 연습</h1>

            {/* 입력폼 */}
            <input type="text"
                    style={styles.input}
                    placeholder="제목 입력"
                    name='title'
                    //value={}
                    //onChange={}
            />

            <textarea name="body"
                    style={styles.textarea}
                    placeholder="내용 입력"
                    //value = {}
                    //onChange = {}
            />

            {/* 버튼 */}
            <button style={styles.button}
                    //onClick={}
                    //disabled={} //로딩값으로 처리
            >
            전송
            </button>

            {/*로딩 표시 위치*/}

            {/*결과 표시 위치*/}
            {/*결과가 있다면*/}
            <div style={styles.resultBox}>
                <h3>서버 응답</h3>
                <p>ID : </p>
                <p>제목 : </p>
                <p>내용 : </p>
            </div>
        </div>
    )

}