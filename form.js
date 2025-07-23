const cidadesPorEstado = {
  SP: ["São Paulo", "Campinas", "Santos", "Sorocaba"],
  MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
  RJ: ["Rio de Janeiro", "Niterói", "Nova Iguaçu"],
  BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
  PE: ["Recife", "Olinda", "Petrolina"],
  CE: ["Fortaleza", "Juazeiro do Norte", "Sobral"],
  PR: ["Curitiba", "Londrina", "Maringá"],
  RS: ["Porto Alegre", "Caxias do Sul", "Pelotas"],
  GO: ["Goiânia", "Anápolis", "Rio Verde"],
  DF: ["Brasília"],
  SC: ["Florianópolis", "Joinville", "Blumenau"],
  MT: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
  MA: ["São Luís", "Imperatriz", "Caxias"]
};



const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade')


estadoSelect.addEventListener('change', function () {

  const estadoSelecionado = this.value;
  console.log(estadoSelecionado)
  const cidades = cidadesPorEstado[estadoSelecionado] || []

  cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>'
  cidades.forEach(function (cidade) {
    const option = document.createElement('option')
    option.value = cidade;
    option.textContent = cidade
    cidadeSelect.appendChild(option)
  })





});



document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.intercalar');
  const btnVoltar = document.getElementById('btn-voltar');
  const btnAvancar = document.getElementById('btn-avancar');
  const btnFinalizar = document.getElementById('btn-finalizar');
  let currentSection = 0;

  function updateDisplay() {
    
    sections.forEach((section, index) => {
      section.style.display = index === currentSection ? 'flex' : 'none';
    });

    // Controle dos botões
    const isFirstSection = currentSection === 0;
    const isThirdSection = currentSection === 2; 
    const isFourthSection = currentSection === 3; 
   
    btnVoltar.classList.toggle('btn-none', isFirstSection || isFourthSection);

  
    btnAvancar.classList.toggle('btn-none', isThirdSection || isFourthSection);

    
    btnFinalizar.classList.toggle('btn-finalizar-on', isThirdSection);
    btnFinalizar.classList.toggle('btn-none', !isThirdSection || isFourthSection);
  }

 
  btnAvancar.addEventListener('click', () => {
    if (currentSection < sections.length - 1) {
      currentSection++;
      updateDisplay();
    }
  });

  btnVoltar.addEventListener('click', () => {
    if (currentSection > 0) {
      currentSection--;
      updateDisplay();
    }
  });

 
  btnFinalizar.addEventListener('click', (event) => {
    event.preventDefault();
    currentSection = 3; 
    updateDisplay();
  });

  updateDisplay(); 
});

