## Como criar um projeto do Node
npm init -y

## Instalar o typescript
npm install typescript --save-dev
///
npx tsc --init

## Formato do tsconfig.json recomendado, para configuração do typeScript: 
  "compilerOptions": { 
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}

//npm = instalar
//npx = executar
