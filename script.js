const seletor = document.getElementById("seletor-categorias");
const servicos = document.querySelectorAll(".serviço");

// Função para filtrar os serviços
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
  filtrarServicos(); // Filtra os serviços 
});

// eventos de  mudanças futuras
seletor.addEventListener("change", filtrarServicos);