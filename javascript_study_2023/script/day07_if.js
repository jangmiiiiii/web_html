//전역변수, 지역변수 (함수 내/외부 생성한 변수위치 차이)
let b = 20 //함수 바깥에서 생성된 변수 = 전역변수 b,c
let c = 30 //전역변수는 함수 내, 외 모두 사용가능하다.
function test(){ //지역변수 //함수내에서 생성된변수
    let a = 10 //지역변수는 함수 내에서만 사용할 수 있다.
    console.log(a+b)
} //지역변수 끝 . 그 외 전역변수
test()
// console.log(a) //지역변수를 함수 바깥에서 사용시 에러발생
// console.log(a+b)
console.log(b+c)
console.log('----------------------')
//조건문 - 논리데이터 참(true), 거짓(false)
let num1 = 5
let num2 = 7
let num3 = '5'
console.log(num1==num2) //false
console.log(num1 < num2) //true
console.log(num1==num3) //true . 비교연산자에서 ==쓰는건 -> 데이터 타입을 구분 못하기때문에 5와5만 인식해서 true로 나온다.
console.log(num1===num3) //false . === 은 데이터 타입 구분O 
console.log(num1!=num3) //false 
console.log(num1!==num3) //true . 데이터 타입 구분 O (===) (!==)
console.log(num1>=num2) //false . 데이터 타입이 num2보다 크거나 같다
console.log(num1<=num2) //true . 데이터 타입이 num2보다 작거나 같다
console.log('----------------------')
//조건문
//if(조건식){조건식이 'true'일 때 실행결과} 조건식종료
//상황1. 주말에 날씨가 좋으면 등산가자!
//조건 - ( 날씨가 좋으면 )-> {이게 true 일때} 실행결과 : 등산가자!
let weather = ['비','맑음','흐림']
if(weather[0]==='맑음'){ //weather은 배열이므로 []로 정확히 작성 
    console.log('등산을 가자!')
} 
// if(weather[0]===true){ //weather은 배열이므로 []로 정확히 작성 '비가 오면 이라는뜻' -> 조건이이상함
//     console.log('등산을 가자!')
console.log('--------------------')
let d = true
let e = false
let f = 10
let g = 20
if(d===true){console.log('실행1')} // true o  d는 true와 같다
if(f>10){console.log('실행2')} // false x  f는 10보다 크다
if(g<=20){console.log('실행3')} // true o g 는 20보다 작거나 같다
if(e!==true){console.log('실행4')} // true o !== e는 tru가 아니다. e와 true는 데이터 타입까지 다르다
if(d==true){console.log('실행5')}
console.log('-------------------')
//관리자만 접속 할 수 있는 페이지 만들기
//관리자 아이디일 경우만 접속가능(접속 후 인사말 출력)
/* const userId = window.prompt('아이디를 입력하세요')
if(userId === 'admin') {//관리자가 admin과 같다면
    window.alert('관리자님 환영합니다.') //admin이라고 작성시에만 뜨는 문구
} */
//사용자의 나이를 입력 받고 10살 이하라면 '놀이기구 탑슬 불가' 메세지가 나오게 하기
/* const userId = window.prompt('나이를 입력하세요')
if(userId <= 10) {
    window.alert('놀이기구 탑승 불가')

} */
const userPrint = window.confirm('인쇄할까요?')
if(userPrint === true){
    window.print()
}