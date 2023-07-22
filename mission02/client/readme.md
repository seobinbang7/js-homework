# 멋쟁이 사자처럼 javaScript 2번째 과제

## JS

### function handleClickEvent(){}

```function handleClickEvent(event) {
  const clickedButton = event.target.closest("button");

  if (clickedButton) {
    const liElements = ul.querySelectorAll("li");

    liElements.forEach(li => {
      if (clickedButton.parentNode === li) {
        const dataIndex = li.getAttribute("data-index");
        const dataIndexNumber = parseInt(dataIndex);

        const dataArrayIndex = dataIndexNumber - 1;
        const selectData = data[dataArrayIndex];
      }
    })
  }}

  nav.addEventListener("click", handleClickEvent);
```

- nav 클릭 시 handleClickEvent가 실행되게하고 이벤트가 발생한 요소의 조상 요소를 찾기위해 event를 받아서 clsest를 사용하여 이벤트가 발생한 요소("IMG")의 조상인 button을 찾았습니다.

- 이벤트가 발생한 button일 경우 ul 태그의 li태그들을 모두 불러오고, forEach를 사용하여 li 모두 순환해서 불러와서 li들 중에 이벤트가 발생한 button의 부모인 li의 "data-index"값을 가져오고 "data-index" 값이 문자열이기 때문에 parseInt를 사용해서 정수로 변환했습니다. (배열 index 값으로 사용)

- 정수로 변환한 "data-index" 값은 1로 시작하지만, data는 0으로 시작하기 때문에 맞춰주기위해 값에서 - 1을 했습니다. 이렇게하면 data[1]이아닌 data[0]으로 0부터 시작합니다.

```
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

```

- 이벤트가 발생한 버튼의 li의 "data-index" 값이 1이면 data[1]이 되는데 data[1]일 경우 해당 li 요소를 activeChange함수로 보냈고 data[1]의 color 값을 변수에 넣었습니다.  

### function activeChange(){}

```
function activeChange(li){
  if(li){
    const activeLi = document.querySelector(".is-active");
    if(activeLi) {
      activeLi.classList.remove("is-active");
    }
    li.classList.add("is-active");
  }
}
```

- 선택한 li에 is-active 클래스가 있다면 is-acitve 클래스를 제거하도록 작성했습니다. 해당되지 않는다면 li에 is-active 클래스를 추가했습니다.

### function setBgColor(){}

```
function setBgColor(colors) {
 const [colorA, colorB="#000"] = colors;
  document.body.style.background = `linear-gradient(to top, ${colorA}, ${colorB})`;
}
```

- colors의 값을 const [colorA, colorB="#000] 변수에 각각 넣었습니다. 그리고 body의 background에 컬러 값을 넣었습니다.

### function setImage() {}

```
const visual = document.querySelector(".visual");
const visualImg = visual.querySelector("img");

function setImage(visualImgSrc, visualImgAlt) {
  visualImg.alt = visualImgAlt;
  visualImg.src = visualImgSrc;
}

```

- visual 클래스를 가진 요소를 visual 변수에 넣었고, visual에서 img 요소를 visualImg 변수에 넣었습니다.

- visualImgSrc 값과 visualImgAlt 값을 받아서 img 요소의 src, alt 값을 변경했습니다.

### function setNameText() {}

```
function setNameText(nickNameText) {
  nickName.textContent = nickNameText;
}

```

- textContent를 사용해서 nickNameText 값으로 설정했습니다.

### function setVoice() {}

```
function setVoice(voice) {
  const audioPlayer = new AudioPlayer(voice);
  audioPlayer.play();
}
```

- audio.js의 클래스인 AudioPlayer안에 voice 값을 넣고 voice가 적용된 audioPlayer을 실행하기위해 AudioPlayer의 play()메서드를 사용했습니다
