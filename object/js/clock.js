//alert("test");
//date 객체 생성 - today
let today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay(); //요일 - 숫자(0:일, 1:월, 2:화.....6:토)
console.log(day1);

let day2 = ""; //빈문자로 초기화하면 문자 변수임
switch (day1) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "월요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

// displayDate 선언
let displayDate = document.getElementById("today");
//innerHTML 속성은 - 태그와 글자를 저장할 수 있음
displayDate.innerHTML = `${year}년 ${month}월 ${date}일 ${day2}`;

//시간 추출
let clock = function () {
  //now 객체 새로 생성함
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  //오전, 오후로 분기하기

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // displayTime 선언
  let displayTime = document.getElementById("clock");
  displayTime.innerHTML = `${hours} : ${minutes} : ${seconds}`;
};

//clock- 콜백함수
setInterval(clock, 1000);
