# 멋쟁이 사자처럼 javaScript 2번째 과제

## HTML

``` <audio><source /></audio> ```
- img 클릭 시 audio가 재생되게 하기위해 audio와 source 사용했습니다. source는 브라우저 간 호환성을 높여줍니다.


## JS

### function handleClickEvent(){}

```function handleClickEvent(event){ 
      if (event.target.tagName === "IMG") {
        const button = event.target.clost("button");
        const li = event.target.closest("li");
    
        activeChange(li);
    } 
  }

  nav.addEventListener("click", handleClickEvent);
```
- nav 클릭 시 handleClickEvent가 실행되게하고 event가 발생한 tag를 찾기위해 handleClickEvent에 event를 넣었습니다. 그리고 이벤트가 발생된 tag가 "IMG"일 경우에 IMG의 상위 요소  중에서 "button"을 찾기위해 가까운 조상요소를 찾는 .closest()를 사용했습니다. 그리고 이어서 "IMG"의 조상요소인 li를 찾기위해 closest()를 사용했습니다.

- 클릭한 li에게 is-actvie 클래스를 주고, 삭제하기위해 activeChange 함수에 li 값을 보냈습니다.

```
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

```

- 이벤트가 발생한 "IMG"의 조상요소인 button이 선택 될 경우 해당 button만 적용이 되도록 if문을 사용하였고, parentNode를 사용해서 button의 부모요소인 li를 부르고, data-index 값을 .getAttribute()를 사용해서 불러와 dataIndex 변수에 넣었습니다.

- dataIndex 값마다 다르게 적용되도록 if문을 사용했습니다. 해당 if문 안에는 변수들과 함수로 보내는 코드가 작성되어있습니다.

- colors, visualImgAlt와 nickNameText 변수에 import한 data.js의 data 값의 color,alt과 name을 가져와 넣었습니다.

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


### function colorChange(){}

 ``` 
 function colorChange(colors) {
  const [color1, color2] = colors;
  document.body.style.background = `linear-gradient(to top, ${color1}, ${color2})`;
}
```

- colors의 값을 const [color1, color2] 변수에 각각 넣었습니다. 그리고 body의 background에 컬러 값을 넣었습니다.

### function imgChange() {}

```
const visual = document.querySelector(".visual");
const visualImg = visual.querySelector("img");

function imgChange(visualImgSrc, visualImgAlt) {
  visualImg.alt = visualImgAlt;
  visualImg.src = visualImgSrc;
}

```
- visual 클래스를 가진 요소를 visual 변수에 넣었고, visual에서 img 요소를 visualImg 변수에 넣었습니다.

- visualImgSrc 값과 visualImgAlt 값을 받아서 img 요소의 src, alt 값을 변경했습니다.

### function nickNameChange() {}

```
function nickNameChange(nickNameText) {
  nickName.textContent = nickNameText;
}

```

- textContent를 사용해서 nickNameText 값으로 설정했습니다.

### function voiceChange() {}

```
function voiceChange(voice) {
  const audioPlayer = new AudioPlayer(voice);
  audioPlayer.play();
}
```

- audio.js의 클래스인 AudioPlayer안에 voice 값을 넣고 voice가 적용된 audioPlayer을 실행하기위해 AudioPlayer의 play()메서드를 사용했습니다