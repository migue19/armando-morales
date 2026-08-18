const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

navigation.addEventListener('click', () => {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const message = `Hola, soy ${formData.get('nombre')}.\n\nMi teléfono: ${formData.get('telefono')}\n\nMe gustaría recibir orientación:\n${formData.get('mensaje')}`;
  window.open(`https://wa.me/522227076102?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.querySelector('#year').textContent = new Date().getFullYear();