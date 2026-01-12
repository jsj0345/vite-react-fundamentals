import { useEffect } from "react";


const FetchComponent = () =>{

    //fetch 함수로 post 요청해보기 - 전달데이터를 fetch함수의 두번째 파라미터에 담아 보낸다.
    useEffect(()=>{
        
        const response = fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json; charset=UTF-8' //json데이터 형식으로 요청
            },
            body : JSON.stringify({
                id : 1,
                userId : 5,
                title : 'Hello Fetch',
                body : '안녕하세요 반갑습니다.'
            })
        })
        .then(response=>response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error.message));
        

        fetchTest();
        
    },[]);


    const fetchTest = async ()=>{

         //위 구문 async - await 구문으로 처리 
        const response2 = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json; charset=UTF-8'
                },
                body : JSON.stringify({
                        id : 10,
                        userId : 10,
                        title : '두번째 post 테스트 입니다',
                        body : '잘들어가는지 확인 중 입니다.'
                    })
            }
        );

        const data = await response2.json();
        console.log(data);

    }

    


        
}

export default FetchComponent;