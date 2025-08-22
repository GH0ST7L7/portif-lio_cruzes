// Utilidades simples de UI
const year = document.getElementById('ano');
if (year) year.textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// Lightbox da galeria (sem dependências)
const lightbox = document.getElementById('lightbox');
const lightImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    lightImg.src = link.getAttribute('href');
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightImg.src = '';
}
if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// Botão voltar ao topo
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) backToTop.classList.add('show');
  else backToTop.classList.remove('show');
});
backToTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
