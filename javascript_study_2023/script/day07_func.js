//함수
//함수 생성 > 호출 
//함수 생성 후 호출식을 작성하지안흥면 함수결과를 볼 수 없다!
//1. 생성 : function 함수명(매개변수명){재사용함수문법}
//2. 호출 : 함수명 ()
function func1(str){ //접속 회원 맞춤형 인사 함수생성
    console.log(`${str}님 어서오세요!`) //${접속한 사용자 명}
}//생성함수 end
func1('홍길동')// 생성하고싶은 아이디or실명 넣으면됨
func1('abc1234') //->호출
//--------------------------------
//함수 기능 : 리턴(return) 함수결과값 외부로 반환명령
function func2(a){
    return a+1 //리턴을 활용해서 함수의 결과값만 외부로 반환
}
func2(50) //함수결과값 출력하는 메서드가 없어 출력X
console.log(func2(50)) //함수결과를 호출앞 메서드에 의해 출력O
// window.alert(func2(100))
document.write(func2(10))
//---------------------------------
function func3(a, b){
    return a*b //함수 내 return은 1개만 존재
}
console.log(func3(10,20))
console.log(func3(2,3))
//---------------------------------
let total = 0 //초기값 =0
function func4(a){
    total = a //호출할때 total을 a에 보내라 
    total++
    return total
    total ++ //증감연산자 . return뒤에 있는 js는 <무조건> 실행하지 못한다. 앞에쓰면 인식가능. 즉 total++은 return밖에있어서 읽지 x

}
console.log(func4(10))
//----------------------------------
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2 // num1= num1+num2 -> 10+20 = 30 num1=30
    num2 = a+b // num=20 -> = 은 기존값 버리라는 의미 -> 20제거 . a=2 b=4 num2 =6
    num1 += num2 // num1=30 num2=6 30+6 = 36
    return num1  // 외부 반환
}
console.log(func5(2,4)) //함수호출
//-------------------
const txtInput = document.querySelectorAll('.box .txt')
console.log(txtInput)
txtInput[0].addEventListener('focus',function(){
    bg(txtInput[0], 'yellow') //노랑
})
txtInput[1].addEventListener('focus',function(){
    bg(txtInput[1], 'blue') //블루
    txtInput[1].style.color = 'white'
})
txtInput[2].addEventListener('focus',function(){
    bg(txtInput[2], 'pink') //분홍
})
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용문법 내 수정데이터
function bg(target, color) {
    return target.style.backgroundColor = color
}
//----------------------------------------------
//관심상품, 알림설정 이미지에 마우스를 올렸을 때
//off=> on 이미지 변경
//마우스를 나갔을때 on -> off 이미지 변경
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg) //변수 정상 확인
likeImg.addEventListener('mouseover',function(){
    // console.log('over') //이벤트 정상 확인
    // likeImg.src = './image/heart_on.png'
    // onOff(likeImg,'heart','on')
    onOff(this,'heart','on')
})
likeImg.addEventListener('mouseout',function(){
    // console.log('out') //이벤트 정상 확인
    // likeImg.src = './image/heart_off.png'
    onOff(likeImg,'heart','off')
})
ideaImg.addEventListener('mouseover',function(){
    // console.log('out') //이벤트 정상 확인
    // ideaImg.src = './image/idea_on.png'
    onOff(ideaImg,'idea', 'on')
})
ideaImg.addEventListener('mouseout',function(){
    // console.log('out') //이벤트 정상 확인
    // ideaImg.src = './image/idea_off.png' 
    onOff(ideaImg,'idea', 'off')
})

function onOff(target, name, status){
    return target.src = `./image/${name}_${status}.png`
}
