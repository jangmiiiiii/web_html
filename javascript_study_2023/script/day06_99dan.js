//변수
const dan2Btn = document.querySelector('#dan2')
const dan3Btn = document.querySelector('#dan3')
const dan4Btn = document.querySelector('#dan4')
const dan5Btn = document.querySelector('#dan5')
const dan99Wrap = document.querySelector('#dan99Wrap')
console.log(dan2Btn, dan3Btn, dan4Btn, dan5Btn, dan99Wrap) //p태그 삽입 객체
let pTag = document.createElement('p') //구구단 함수 결과를 삽입하는 DOM객체 
//createElement = 없는것을 동적인 기능으로 생성할때 사용 
console.log(pTag)
console.log(dan2Btn, dan3Btn, dan4Btn, dan5Btn, dan99Wrap)
/* pTag.innerHTML '2x1=2' -> 다른태그면 innerHTML
dan99Wrap.appendChild(pTag) */
//구구단 함수 생성
function dan99(num){
    pTag.innerHTML = `${num}x1=${num*1}<br>`  //console 이 inner로 바뀐것 뿐
    pTag.innerHTML += `${num}x2=${num*2}<br>` 
    pTag.innerHTML += `${num}x3=${num*3}<br>`
    pTag.innerHTML += `${num}x4=${num*4}<br>`
    pTag.innerHTML += `${num}x5=${num*5}<br>`
    pTag.innerHTML += `${num}x6=${num*6}<br>`
    pTag.innerHTML += `${num}x7=${num*7}<br>`
    pTag.innerHTML += `${num}x8=${num*8}<br>`
    pTag.innerHTML += `${num}x9=${num*9}<br>`
    dan99Wrap.appendChild(pTag) //appendChild = 마지막 자식위치
}
dan99(1)
dan2Btn.addEventListener('click',function(){
    dan99(2)
})
dan2Btn.addEventListener('click',function(){
    dan99(3)
})
dan2Btn.addEventListener('click',function(){
    dan99(4)
})
dan2Btn.addEventListener('click',function(){
    dan99(5)
})