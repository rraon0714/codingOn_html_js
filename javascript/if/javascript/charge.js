/*
    if(조건1){
        조건1가 참일 때 실횅
    } else if(조건2){
        조건1이 false, 조건2가 참일 때 실행
    } else{
        조건 1,2가 거짓일 때
     }*/

//alert("testing");
//나이를 기준으로 입장료 계산

let age = prompt("나이를 입력하세요.");
let charge = 0;

if (age < 8) {
  document.write("미취학 아동입니다.<br>");
  charge = 1000;
} else if (age >= 8 && age < 14) {
  document.write("초등학생입니다.<br>");
  charge = 2000;
} else if (age >= 14 && age < 20) {
  document.write("중, 고등학생입니다.<br>");
  charge = 2500;
} else {
  document.write("일반인입니다.<br>");
  charge = 3000;
}
document.write("입장료는 <span class='access'>" + charge + "원 입니다.");
