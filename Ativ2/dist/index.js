"use strict";
function medirTamanhoNome(nome) {
    return nome.length;
}
const atribuirNome = (nome, aluno) => {
    aluno.nome = nome;
};
let aluno = {
    nome: "",
    email: "",
    matricula: "",
    idade: 0
};
atribuirNome("Beatriz", aluno);
console.log(aluno.nome);
//npx tsc => transpila o arquivo 
