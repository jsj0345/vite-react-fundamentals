import {createContext, useContext, useState } from "react";

//스타일 부여 객체
const styles = {
    box : {border : '1px solid #ccc',padding : '15px',margin : '10px',borderRadius : '5px '},
    button : {padding : '8px 16px',marginRight: '5px',cursor : 'pointer'},
    item : {display : 'flex',justifyContent : 'space-between',padding : '10px',bordrBottom : '1px solid #eee'}
};



//1.Context 생성
const CartContext = createContext(); 


//2. Provider 컴포넌트 
const CartProvider = ({children}) =>{
    //**장바구니 목록 State 
    const [cartItems, setCartItems] = useState([]);

    //**장바구니에 추가 함수
    //이미 있는 상품인지 확인 구문
    //있으면 수량 증가 없으면 새로 추가
    const addCart = (product) => {

        // 목록에 있는 item id값과 전달받은 product의 id값이 일치하면 이미 존재 하는 상품 
        const exist = cartItems.find(item => item.id === product.id); 

        if(exist) {
            //아이디 값이 같으면 이미 존재하는 요소이니 count 속성을 +1 처리하기
            setCartItems(cartItems.map(item => 
                item.id === product.id ? {...item,count : item.count + 1} : item
            )); 
        } else { // 없으면 새로 추가

            setCartItems([...cartItems,{...product,count : 1}]); // 처음 추가시 해당 수량은 1



        }
    };


    //**장바구니에서 제거 함수
    const removeItem = (id) => {
        //전달받은 제거할 대상 id와 목록에 있는 아이디와 일치하지 않는 아이템만 담아 반환
        setCartItems(cartItems.filter(item => item.id !== id));
    } 


    //**총 개수 계산 함수
    const totalCount = () => {
        let total = 0;

        //반복순회하며 총 개수 변수에 더해넣기 
        for(const item of cartItems) {
            total = total + (item.count);
        }
        
        return total;
    }

    //**총 가격 계산 함수
    const totalPrice = () => {
        /*
        let total = 0;

        for(const item of cartItems) {
            total = total + (item.price * item.count);
        }

        return total; 
        */

        //reduce : 배열의 모든 요소를 순회하며 하나의 값으로 누적해주는 함수
        //표현법 : 배열.reduce(누적값,각아이템) => 누적값변수 + (계산식 또는 값), 누적값변수 초기값) return 누적값

        return cartItems.reduce((total,item) => total + (item.price*item.count),0); // 0은 total 초기값 

    } 

    //하위 요소에게 제공하는 구문 (위에서 만든 요소들중 필요한 요소들 전달하기)
    return (
        <CartContext.Provider value={{addCart,cartItems,removeItem,totalCount,totalPrice}}>
            {children}
        </CartContext.Provider>
    )

}

//3.Context를 사용하는 컴포넌트들

//헤더 - 장바구니 개수 표시 
const Header = () =>{
    //개수 받아오기

    const {totalCount} = useContext(CartContext); 
    

    return (
        <div style={{...styles.box,backgroundColor : 'black',color:'white'}}>
            <h2>🛒 쇼핑몰</h2>
            <p>장바구니 : {totalCount()} 개</p> 
        </div>
    );
};

//상품 목록
const ProductList = ()=>{
    //상품 추가 함수 받아오기
    const {addCart} = useContext(CartContext); 

    //상품 데이터
    const products = [
        {id : 1,name : '딸기',price : 13500},
        {id : 2,name : '바나나', price : 4500},
        {id : 3,name : '샤인머스켓', price : 7000}
    ];

    return (
        <div style={styles.box}>
            <h3>📦 상품 목록</h3>
            {/* 여기에 상품 목록 넣기 */}
            {
                products.map(product => (
                    <div key={product.id} style={styles.item}>
                        <span>{product.name} - {product.price}원</span>
                        <button style={styles.button}
                            onClick={() => addCart(product)}
                            /*장바구니에 넣기위헤 product 데이터 전달 */
                        >
                            담기
                        </button>
                        
                    </div>    
                ))
            }
            {/* 상품 목록출력은 이미지 참고 */}

        </div>
    );
};

//장바구니 
const Cart = () =>{
    //필요 데이터 받아오기 
    const {cartItems,totalPrice,removeItem} = useContext(CartContext);


    return (
        <div style={styles.box}>
            <h3>🧺장바구니</h3>
            {/* 장바구니가 비어있다면 p태그로 '장바구니가 비어있습니다.' 출력 */}
            {/* 비어있지 않다면 목록 출력 (이미지 참고) */}
            {cartItems.length === 0 ? 
            
                (
                    <p>장바구니가 비어있습니다.</p>
                ) : (
                    <>  
                        {
                            cartItems.map(item => 
                                <div key={item.id} style={styles.item}>
                                    <span>{item.name} X {item.count}개</span>
                                    <span>{item.price * item.count}원</span>
                                    <button style={styles.button}
                                        onClick={() => removeItem(item.id)}
                                    >
                                        {/*식별자 전달 (삭제용) */}
                                        삭제 
                                    </button>
                                </div>
                            )
                        } 
                    </>
                )

            }




            <div style={{textAlign : 'right',marginTop : '15px',fontWeight : 'bold'}}>
                총 금액 : {totalPrice().toLocaleString()} 원 
            </div>
        </div>
    );
};


//메인 컴포넌트
const CartExample = () =>{
    return(

        <CartProvider>
            {/*위에서 만든것들을 하단에 추가 및 Provider 처리*/}
            <div style={{maxWidth : '500px',margin : '0 auto'}}>
                <h1>장바구니 Context 예제</h1>
                <Header></Header>
                <ProductList></ProductList>
                <Cart></Cart>
            </div>
        </CartProvider>
    );
};

export default CartExample;
