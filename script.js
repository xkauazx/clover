

const header = document.getElementById('header-index');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      header.classList.toggle('scrolled', !entry.isIntersecting);
    });
  }, 
  { threshold: 1 } 
);


const heroSection = document.querySelector('section:first-of-type');
if (heroSection) {
  observer.observe(heroSection);
} else {
 
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}
const seletor = document.getElementById("seletor-categorias");
const servicos = document.querySelectorAll(".serviço");


function filtrarServicos() {
  const categoriaSelecionada = seletor.value;

  servicos.forEach(servico => {
    if (servico.classList.contains(categoriaSelecionada)) {
      servico.style.display = "block";
    } else {
      servico.style.display = "none";
    }
  });
}



document.addEventListener("DOMContentLoaded", () => {
  seletor.value = "construcao"; 
  filtrarServicos();
});


seletor.addEventListener("change", filtrarServicos);

