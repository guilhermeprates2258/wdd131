// Seleção dos elementos DOM
const input = document.querySelector('#favchap'); // Campo de entrada
const button = document.querySelector('button'); // Botão de adicionar capítulo
const list = document.querySelector('#list'); // Lista para os capítulos

// Adiciona evento ao botão
button.addEventListener('click', function () {
  // Verifica se a entrada não está vazia
  if (input.value.trim() !== '') {
    // Criação dos elementos
    const li = document.createElement('li'); // Cria um item de lista
    const deleteButton = document.createElement('button'); // Cria botão de exclusão

    // Define os conteúdos dos elementos
    li.textContent = input.value; // O texto do item será o valor do campo de entrada
    deleteButton.textContent = '❌'; // Texto do botão de exclusão

    // Anexa o botão de exclusão ao item de lista
    li.append(deleteButton);

    // Adiciona o item de lista à lista de capítulos
    list.appendChild(li);

    // Adiciona evento ao botão de exclusão
    deleteButton.addEventListener('click', function () {
      list.removeChild(li); // Remove o item da lista
    });

    // Limpa o campo de entrada e foca nele novamente
    input.value = '';
    input.focus();
  } else {
    // Caso o campo de entrada esteja vazio, retorna o foco ao campo
    input.focus();
  }
});
