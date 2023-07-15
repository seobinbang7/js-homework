const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
}

//변수선언
const loginEmail = document.querySelector('#userEmail')
const loginPassword = document.querySelector('#userPassword')
const loginButton = document.querySelector('.btn-login')
// console.log(loginEmail)
// console.log(loginPassword)

//정규표현식 조건처리
function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(text).toLowerCase())
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/
  return re.test(String(text).toLowerCase())
}


// 1. email 정규표현식을 사용한 validation
function validateEmail() {
  const idValue = loginEmail.value
  if (!emailReg(idValue)) {
    loginEmail.classList.add('is--invalid')
  } else {
    loginEmail.classList.remove('is--invalid')
  }
}

loginEmail.addEventListener('input', validateEmail) //이메일 형식 유효성검사

// 2. pw 정규표현식을 사용한 validation
function validatePassword() {
  const passValue = loginPassword.value
  if (pwReg(passValue)) {
    loginPassword.classList.remove('is--invalid')
  } else {
    loginPassword.classList.add('is--invalid')
  }
}

loginPassword.addEventListener('input', validatePassword) //비밀번호 형식 유효성 검사

// 3. 상태 변수 관리 ???

// 4. 로그인 버튼을 클릭시 조건처리

function loginButtonValidat(event) {
  event.preventDefault()
  if (loginEmail.value === user.id && loginPassword.value === user.pw) {
    window.location.href = 'welcome.html'
  } else {
    console.log('이메일 또는 비밀번호를 잘못 입력했습니다.')
  }
}

loginButton.addEventListener('click', loginButtonValidat)