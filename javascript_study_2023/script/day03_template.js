//자바스크립트 = 객체지향언어
//객체구분 > 변수생성 > 변수활용 속성, 이벤트, 메소드

 //getElement 객체방법
const ulWrap = document.getElementById('wrap');
const liTag = document.getElementsByTagName('li');
const aTag = document.getElementsByTagName('a');
console.log(ulWrap, liTag, aTag);
 //querySelector 객체방법
const ulWrapQ = document.querySelector('#wrap');
const liTagQ = document.querySelectorAll('li');
const aTagQ = document.querySelectorAll('a');
const aTagQ1 = document.querySelector('#wrap a:nth-child(1)')
//변수 정상출력확인
console.log(ulWrapQ, liTagQ, aTagQ); 
console.log('---------------------');
console.log('li태그 변수 값은 '+liTagQ[0]+'입니다!')
console.log('1+1='+(1+1));
console.log('7X4='+(7*4));
console.log(`1+1=${1+1}`);
console.log(`7X4=${7*4}`);