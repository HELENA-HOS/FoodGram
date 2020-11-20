// 1 -Capturar o elemento que exibe o nome do visitante
const displayNome = document.querySelector(".avatar-content b");
console.log(displayNome);

// 2 - Levantar a informação do meu localStorage (.getItem)
let nome = localStorage.getItem("nomeDoVisitante");
console.log(nome);


// 3 - Escrever o nome do visitante (levantado do localStorage)
// no elemento html capturado
displayNome.textContent = nome;
