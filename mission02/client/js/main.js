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
const ul = nav.querySelector('ul');
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
function setBgColor(colors) {
  const [colorA, colorB="#000"] = colors;
  document.body.style.background = `linear-gradient(to top, ${colorA}, ${colorB})`;
}

// 이미지 변경
function setImage(visualImgSrc, visualImgAlt) {
  visualImg.alt = visualImgAlt;
  visualImg.src = visualImgSrc;
}

// 이름 변경
function setNameText(nickNameText) {
  nickName.textContent = nickNameText;
}

// 목소리 변경
function setVoice(voice) {
  const audioPlayer = new AudioPlayer(voice);
  audioPlayer.play();
}

function handleClickEvent(event) {
  const clickedButton = event.target.closest("button");

  if (clickedButton) {
    const liElements = ul.querySelectorAll("li");

    liElements.forEach(li => {
      if (clickedButton.parentNode === li) {
        const dataIndex = li.getAttribute("data-index");
        const dataIndexNumber = parseInt(dataIndex);

        const dataArrayIndex = dataIndexNumber - 1;
        const selectData = data[dataArrayIndex];

        if (selectData) {
          activeChange(li);

          const colors = selectData.color;
          const visualImgAlt = selectData.alt;
          const visualImgSrc = `./assets/${selectData.name.toLowerCase()}.jpeg`;
          const nickNameText = selectData.name;
          const voice = `./assets/audio/${selectData.name.toLowerCase()}.m4a`;

          setBgColor(colors);
          setImage(visualImgSrc, visualImgAlt);
          setNameText(nickNameText);
          setVoice(voice);
        }
      }
    });
  }
}
nav.addEventListener("click", handleClickEvent);
