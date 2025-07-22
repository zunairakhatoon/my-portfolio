document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('contactBtn');

  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  const nameMsg = document.getElementById('nameMsg');
  const phoneMsg = document.getElementById('phoneMsg');
  const emailMsg = document.getElementById('emailMsg');
  const subjectMsg = document.getElementById('subjectMsg');
  const msgMsg = document.getElementById('msgMsg');

  function validateInput(input, messageEl, condition, successMsg, errorMsg) {
    if (condition(input.value)) {
      messageEl.textContent = successMsg;
      messageEl.className = 'message valid';
      return true;
    } else {
      messageEl.textContent = errorMsg;
      messageEl.className = 'message invalid';
      return false;
    }
  }

  name.addEventListener('input', () => {
    validateInput(name, nameMsg, val => val.trim().length >= 2, '✔ ', '✖ ');
  });

  phone.addEventListener('input', () => {
    validateInput(phone, phoneMsg, val => /^[0-9]{10,15}$/.test(val), '✔ Valid number', '✖ Invalid phone number');
  });

  email.addEventListener('input', () => {
    validateInput(email, emailMsg, val => val.includes('@') && val.includes('.'), '✔ Valid email', '✖ Enter a valid email');
  });

  subject.addEventListener('input', () => {
    validateInput(subject, subjectMsg, val => val.trim().length > 2, '✔ ', '✖ Enter a subject');
  });

  message.addEventListener('input', () => {
    validateInput(message, msgMsg, val => val.trim().length > 5, '✔ ', '✖ Message too short');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const validName = validateInput(name, nameMsg, val => val.trim().length >= 2, '', '');
    const validPhone = validateInput(phone, phoneMsg, val => /^[0-9]{10,15}$/.test(val), '', '');
    const validEmail = validateInput(email, emailMsg, val => val.includes('@') && val.includes('.'), '', '');
    const validSubject = validateInput(subject, subjectMsg, val => val.trim().length > 2, '', '');
    const validMsg = validateInput(message, msgMsg, val => val.trim().length > 5, '', '');
    if (validName && validPhone && validEmail && validSubject && validMsg) {
      const bubble = document.createElement('span');
      bubble.classList.add('bubble');
      bubble.style.left = e.clientX + 'px';
      bubble.style.top = e.clientY + 'px';
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 600);
      alert('Your message has been sent!');
      form.reset();
      [nameMsg, phoneMsg, emailMsg, subjectMsg, msgMsg].forEach(msg => msg.textContent = '');
    }
  });
});
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.querySelector('header').classList.toggle('dark');
  document.querySelector('.hero').classList.toggle('dark');
  document.querySelector('.contact-section').classList.toggle('dark');
});