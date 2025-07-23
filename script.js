

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


const toggle = document.getElementById('mobile-menu');
const menu = document.getElementById('list-header');
const body = document.querySelector('body')
const links = menu.querySelectorAll('a');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll'); // Se estiver usando scroll travado
})
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

const btnExpandir = document.querySelectorAll('.expandir');


btnExpandir.forEach((botao) => {
botao.addEventListener('click', () =>{

  const idLista =botao.getAttribute('data-lista');
  const lista = document.getElementById(idLista);

  if (lista.style.display === 'none'){
    lista.style.display = 'flex'
    botao.textContent = '-'
  } else{
    lista.style.display =  'none'
    botao.textContent= '+'

  }

console.log('ola')

});
});
