// https://medium.com/@mandeepkaur1/a-list-of-javascript-array-methods-145d09dd19a0

// ---> Map

const nsumeros = [1, 2, 3, 4, 5];
const numerosDuplicados = numeros.map((numero) => numero * 2);



// ---> Filter
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // Output: [2, 4, 6, 8, 10]


// ---> Reduce
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero);
console.log(soma); // Output: 15






// ---> Aplicativo TO DO
// Lógica de cada função.

// Adiciona tarefa:
const AdicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTodos([...todos, novaTarefa]);
      setInputValue('');
    }
  };



// edita/atualiza tarefa:
const atualizaTarefa = (index) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: editingTodoText };
      }
      return todo;
});}



// remove tarefa:
const RemoverTarefa = (index) => {
    const updatedTodos = todos.filter((item) => item.id !== idParaRemover);
    setTodos(updatedTodos);
  };






// ---> Filter para remover elemento com certo ID.
const novoArraySemIDRemovido = array.filter((item) => item.id !== idParaRemover);



// ---> Shuffle Array
shuffledArray = newArray.sort(() => Math.random() - 0.5);




// ------->Gerar numero aleatorio
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ------->Ativar uma funcao a cada x milisegundos
setTimeout(myfunction, x);


// ------->indexOf buscar a posicao de um elemento num array.
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
console.log(frutas.indexOf('banana')); // Output: 1
console.log(frutas.indexOf('pera')); // Output: -1


// ------->Sort palavras
const frutas = ['banana', 'maçã', 'laranja', 'abacaxi'];
frutas.sort();
console.log(frutas);
// Output: ['abacaxi', 'banana', 'laranja', 'maçã']


// ------->Sort numeros
const numeros = [10, 5, 8, 2, 3];
numeros.sort((a, b) => a - b);

console.log(numeros);
// Output: [2, 3, 5, 8, 10]



// ------->Manipulacao de Arrays
const numeros = [1, 2, 3, 4, 5];

numeros.push(6);
console.log(numeros); // Output: [1, 2, 3, 4, 5, 6]

const ultimoElemento = numeros.pop();
console.log(ultimoElemento); // Output: 6

const primeiroElemento = numeros.shift();
console.log(primeiroElemento); // Output: 1

numeros.unshift(0);
console.log(numeros); // Output: [0, 2, 3, 4, 5]

const elementosRemovidos = numeros.splice(2, 2);
console.log(elementosRemovidos); // Output: [3, 4]
console.log(numeros); // Output: [0, 2, 5]

const numerosComoString = numeros.join('-');
console.log(numerosComoString); // Output: "0-2-5"

const indice = numeros.indexOf(2);
console.log(indice); // Output: 1

const contemCinco = numeros.includes(5);
console.log(contemCinco); // Output: true

numeros.reverse();
console.log(numeros); // Output: [5, 2, 0]

const numerosComoString = numeros.toString();
console.log(numerosComoString); // Output: "5,2,0"



// -------> Sorteia 3 numeros diferentes de um array 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosSorteados = [];

while (numerosSorteados.length < 3) {
  const numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)];
  
  if (!numerosSorteados.includes(numeroSorteado)) {
    numerosSorteados.push(numeroSorteado);
  }
}

console.log(numerosSorteados);