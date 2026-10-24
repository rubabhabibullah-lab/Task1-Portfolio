const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const themeBtn = document.getElementById('themeBtn');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.textContent = open ? '×' : '☰';
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? '☾' : '☼';
});

document.getElementById('calculatorLink').addEventListener('click', event => {
  event.preventDefault();
  alert('Add your published Smart Calculator URL here when it is ready.');
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('visitorName').value.trim();
  const email = document.getElementById('visitorEmail').value.trim();
  const message = document.getElementById('visitorMessage').value.trim();
  const destination = 'your.email@example.com'; // Replace with your own email before publishing.
  if (destination === 'your.email@example.com') {
    document.getElementById('formNote').textContent =
      `Thanks, ${name}! This is a demo form. Replace the sample email in script.js to prepare a real email draft.`;
    return;
  }
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
});
