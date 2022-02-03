const nome = "Lucas Silveira";
let nome2 = "";
let pessoaDefault = {
    nome: "Lucas Silveira",
    idade: "28",
    trabalho: "designer"
}

let nomes = ["Lucas Silveira", " Maria Silva", "Pedro Silva"]

let pessoasListaVazia = [];

let pessoas = [
    {
    nome: "Lucas Silveira",
    idade: "28",
    trabalho: "designer"
    },
    {
    nome: "Maria Silva",
    idade: "25",
    trabalho: "UX/UI Designer"
    }
];

function alterarNome() {
nome2 = "Maria Silva";
console.log("Valor alterado:");
console.log("nome2");
}

function recebeEalteraNome(novoNome){
nome2 = novoNome
console.log("Valor alterado recebendo um nome:");
console.log("nome2");
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

//imprimirPessoa(pessoaDefault);

function adicionarPessoa(pessoa) {
pessoas.push(pessoa);
}


console.log(pessoas);

  adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
    })

console.log(pessoas);

//imprimirPessoa({
  //  nome: "Maria Silva",
  //  idade: "25",
 //   trabalho: "UX/UI Designer"
// });

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();