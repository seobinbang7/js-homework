const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@'
}

const emailInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');
const loginBtn = document.querySelector('.btn-login');

function emailReg(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function pwReg(pw) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(pw);
}

function login(event) {
  event.preventDefault();

  const emailValue = emailInput.value;
  const pwValue = pwInput.value;

  if (!emailReg(emailValue)) {
    emailInput.classList.add('is--invalid');
    return;
  } else {
    emailInput.classList.remove('is--invalid');
  }

  if (!pwReg(pwValue)) {
    pwInput.classList.add('is--invalid');
    return;
  } else {
    pwInput.classList.remove('is--invalid');
  }

 
  if (emailValue === user.id && pwValue === user.pw) {
    window.location.href = 'welcome.html';
  } else {
    alert('이메일 또는 비밀번호를 잘못 입력하셨습니다.');
  }
}

loginBtn.addEventListener('click', login);




