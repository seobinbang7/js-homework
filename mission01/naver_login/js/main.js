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


/*
 const emailInput = document.querySelector('#userEmail');
 const pwInput = document.querySelector('#userPassword');
 const loginButton = document.querySelector('.btn-login');

 function handleCheckEmail(){
  const value = this.value;
  if(emailReg(value)){
  this.classList.remove('is--invalid');
  emailPass = true;
 }else{
  this.classList.add('is--invalid');
  emailPass = false;
 }

 function handleCheckPw() {
  const value = this.value;
  if(pwReg(value)){
    this.classList.remove('is--invalid');
    pwPass = true;
  }else{
    this.classList.add('is--invalid');
    pwPass = false;
  }
 }

 function handleLogin(e){
  e.preventDefault();
  if(emailPass && pwPass){
    const id = emailInput.value;
    const pw = pwInput.value;

    const getUserId = user.id;
    const getUserPw = user.pw;

    if(id === getUserId && pw === getUserPw){
      console.log('로그인 성공!');
    }else{
      console.log('정확한 아이디와 비밀번호를 입력해 주세요.);
    }catch(e){
      alert(e.message);
    }
    
    else{
      console.log('정확한 아이디와 비밀번호를 입력해 주세요.');
    }
  }
 }

 emailInput.addEventListener('input', handleCheckEmail);
 pwInput.addEventListener('input', handleCheckPw);
 loginButton.addEventListener('click', hanleLogin);
 
 */
