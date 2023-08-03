// dom == document object model
// 자바스크립트 = 객체지향언어
// bom = browser object model 웹브라우저의 기본 객체
let hello = 'hello js';
// window.alert(hello); //객체.메소드 alert=팝업창 띄우기
// let qa = window.prompt('1+1');
// window.alert('정답은 '+qa+'입니다.');
// let ox = window.confirm('자바스크립트는 객체지향언어다.'); //확인=true(참), 취소=false(거짓)
// window.alert(ox);

//객체.속성
//객체.메소드()
//객체.속성.메소드()

//아이디 객체 변수 대입하기
//변수선원키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1')
btn1.style.color = 'red';
const loginBtn = document.getElementById('login')
const payBtn = document.getElementById('pay')
const price = document.getElementById('price')
console.log(btn1, loginBtn, payBtn, price);

//클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first');
const li_second = document.getElementsByClassName('second');
const li_last = document.getElementsByClassName('last')[0];
console.log(li_last, li_second, li_last);
console.log(li_first[0])
console.log(li_first[1])

//태그 객체 변수 생성하기
const header = document.getElementsByTagName('header');
const h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const aTag = document.getElementsByTagName('a');
console.log(header, h1, nav, aTag);
console.log(aTag[0]);

//innerHTML 속성 활용
//객체.속성 //읽기
//객체.속성 = 대입값 //수정or삭제
console.log(header.innerHTML); //undefined
console.log(header[0].innerHTML); //자식, 자손 읽기
console.log(h1[0].innerHTML);
console.log(li_first[0].innerHTML);
console.log(li_first[1].innerHTML);
console.log(loginBtn.innerHTML);

h1[0].innerHTML = '로<br>고';
btn1.innerHTML = '전송';
aTag[2].innerHTML = ''; //빈문자열 == 문자열을 비운다.(삭제)
li_first[1].innerHTML = '';

nav[0].style.backgroundColor = 'aqua';
nav[0].style.border = '2px solid black';
h1[0].style.color = 'pink';
btn1.style.border = 'none';
h1[0].style.transform = 'rotate(-10deg)';
loginBtn.style.background = 'linear-gradient(90deg, red, pink)';