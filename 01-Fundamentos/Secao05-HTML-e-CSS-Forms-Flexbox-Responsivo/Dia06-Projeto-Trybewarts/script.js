const btnFinal = () => {
  const submitBtn = document.querySelector('#submit-btn');
  const checkbox = document.querySelector('#agreement');
  checkbox.addEventListener('click', () => {
    const checkMarked = checkbox.checked;
    if (checkMarked === true) {
      submitBtn.disabled = false;
    }
  });
};

window.onload = () => {
  const loginButton = document.querySelector('#login-button');
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#input-email-login');
    const emailValue = email.value;
    const password = document.querySelector('#input-password');
    const passwordValue = password.value;
    if (emailValue === 'tryber@teste.com' && passwordValue === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
  btnFinal();
};
