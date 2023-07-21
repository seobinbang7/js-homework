import { data } from './data.js';
import { AudioPlayer } from './audio.js';
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector(".nav");
const visual = document.querySelector(".visual");
const visualImg = visual.querySelector("img");
const nickName = document.querySelector(".nickName");

// 선택된 항목에 is-active 클래스 추가 또는 삭제
function activeChange(li){
  if(li){
    const activeLi = document.querySelector(".is-active");
    if(activeLi) {
      activeLi.classList.remove("is-active");
    }
    li.classList.add("is-active");
  }
}

// 배경 색상 변경
function colorChange(colors) {
  const [color1, color2] = colors;
  document.body.style.background = `linear-gradient(to top, ${color1}, ${color2})`;
}

// 이미지 변경
function imgChange(visualImgSrc, visualImgAlt) {
  visualImg.alt = visualImgAlt;
  visualImg.src = visualImgSrc;
}

// 이름 변경
function nickNameChange(nickNameText) {
  nickName.textContent = nickNameText;
}

// 목소리 변경
function voiceChange(voice) {
  const audioPlayer = new AudioPlayer(voice);
  audioPlayer.play();
}

// nav 클릭 시 이벤트
function handleClickEvent(event) {
  if (event.target.tagName === "IMG") {
    const button = event.target.closest("button");
    const li = event.target.closest("li");

    activeChange(li);

    if (button) {
      const dataIndex = button.parentNode.getAttribute("data-index");
      if (dataIndex === "1") {
        const colors = data[0].color;
        const visualImgAlt = data[0].alt;
        const visualImgSrc = "./assets/ember.jpeg";
        const nickNameText = data[0].name;
        const voice = "./assets/audio/ember.m4a";

        colorChange(colors);
        imgChange(visualImgSrc, visualImgAlt);
        nickNameChange(nickNameText);
        voiceChange(voice);
      } else if (dataIndex === "2") {
        li.classList.add("is-active");

        const colors = data[1].color;
        const visualImgAlt = data[1].alt;
        const visualImgSrc = "./assets/wade.jpeg";
        const nickNameText = data[1].name;
        const voice = "./assets/audio/wade.m4a";

        colorChange(colors);
        imgChange(visualImgSrc, visualImgAlt);
        nickNameChange(nickNameText);
        voiceChange(voice);
      } else if (dataIndex === "3") {
        const colors = data[2].color;
        const visualImgAlt = data[2].alt;
        const visualImgSrc = "./assets/clod.jpeg";
        const nickNameText = data[2].name;
        const voice = "./assets/audio/clod.m4a";

        colorChange(colors);
        imgChange(visualImgSrc, visualImgAlt);
        nickNameChange(nickNameText);
        voiceChange(voice);
      } else if (dataIndex === "4") {
        const colors = data[3].color;
        const visualImgAlt = data[3].alt;
        const visualImgSrc = "./assets/gale.jpeg";
        const nickNameText = data[3].name;
        const voice = "./assets/audio/gale.m4a";

        colorChange(colors);
        imgChange(visualImgSrc, visualImgAlt);
        nickNameChange(nickNameText);
        voiceChange(voice);
      }
    }
  }
}

nav.addEventListener("click", handleClickEvent);
