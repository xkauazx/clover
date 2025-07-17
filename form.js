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
    const cidadeSelect = document.getElementById ('cidade')

  
    estadoSelect.addEventListener('change', function()  {

          const estadoSelecionado = this.value;
      console.log(estadoSelecionado)
        const cidades = cidadesPorEstado[estadoSelecionado] || []
    
      cidadeSelect.innerHTML ='<option value="">Selecione uma cidade</option>'
      cidades.forEach(function (cidade){
        const option = document.createElement('option')
        option.value = cidade;
        option.textContent = cidade
        cidadeSelect.appendChild(option)
      })





    });

    const buttonAvancar = document.getElementById('btn-avancar');
    const buttonVoltar = document.getElementById('btn-voltar');
    const endereco = document.getElementById('endereco')

     const orcamento = document.getElementById('orcamento')

    buttonAvancar.addEventListener('click', () =>{


      
      endereco.style.display ='flex'
      orcamento.style.display ='none'
      buttonVoltar.style.display ='block'



    })
      buttonVoltar.addEventListener('click', () =>{


      
      endereco.style.display ='none'
      orcamento.style.display ='flex'


    })