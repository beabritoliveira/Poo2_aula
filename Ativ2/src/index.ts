interface Aluno{
    nome: string;
    email: string;
    matricula: string;
    idade: number;
    ehlegal?: boolean;  //? significa que o atributo é opcional
}

function medirTamanhoNome(nome: string): number{
    return nome.length;
}

const atribuirNome = (nome: string, aluno: Aluno) : void => { // arrow function
    aluno.nome = nome;
}

let aluno = {
    nome: "",
    email: "",
    matricula: "",
    idade: 0
};
atribuirNome("Beatriz", aluno);
console.log(aluno.nome);

//npx tsc => transpila o arquivo 