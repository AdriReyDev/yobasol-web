const form = document.querySelector('.contact-form');
const status = document.querySelector('.form-status');
const header = document.querySelector('.site-header');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopNavigation = window.matchMedia('(min-width: 961px)');
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
let activeNavFrame = 0;

function updateHeaderOffset() {
  document.documentElement.style.setProperty('--header-offset', `${header.offsetHeight}px`);
}

function scrollToAnchor(target, smooth = true) {
  const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
  window.scrollTo({ top: Math.max(0, top), behavior: smooth && !prefersReducedMotion.matches ? 'smooth' : 'auto' });
}

updateHeaderOffset();
window.addEventListener('resize', updateHeaderOffset);

function updateActiveNavigation() {
  activeNavFrame = 0;
  const marker = header.offsetHeight + Math.min(window.innerHeight * .35, 300);
  const activeLink = desktopNavigation.matches ? navLinks.find((link) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (!section) return false;
    const bounds = section.getBoundingClientRect();
    return bounds.top <= marker && bounds.bottom > marker;
  }) : null;

  navLinks.forEach((link) => {
    if (link === activeLink) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function scheduleActiveNavigation() {
  if (!activeNavFrame) activeNavFrame = requestAnimationFrame(updateActiveNavigation);
}

window.addEventListener('scroll', scheduleActiveNavigation, { passive: true });
window.addEventListener('resize', scheduleActiveNavigation);
scheduleActiveNavigation();

document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => {
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;

  event.preventDefault();
  scrollToAnchor(target);
  history.pushState(null, '', link.getAttribute('href'));
}));

if (window.location.hash) {
  const target = document.querySelector(window.location.hash);
  if (target) requestAnimationFrame(() => scrollToAnchor(target, false));
}

if (!prefersReducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else { document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible')); }

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll('[required]')];
  const firstInvalid = fields.find((field) => !field.checkValidity());
  fields.forEach((field) => field.setAttribute('aria-invalid', String(!field.checkValidity())));
  if (firstInvalid) { status.textContent = 'Revisa los campos marcados antes de solicitar el diagnóstico.'; status.classList.add('error'); firstInvalid.focus(); return; }
  status.textContent = 'Solicitud preparada correctamente. El próximo paso será conectarla con la API.';
  status.classList.remove('error'); form.reset();
});
document.querySelector('#year').textContent = new Date().getFullYear();
