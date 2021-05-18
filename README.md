<h1 align="center">
  Muito Dinheiro API
</h1>
<p align="center">Casa de câmbio Muito Dinheiro</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-instalar">Como instalar</a>
</p>

## 👨🏻‍💻 Sobre o projeto
### Pequena explicação sobre o projeto
A API permite o controle de operações de câmbio de moedas pré criadas ou cadastradas posteriormente pelo usuário,</br>
onde a empresa ficará com 10% da taxa de cada operação.
### Requisitos
- <p>Deve permitir que o usuário crie uma nova moeda de câmbio</p>
- <p>Deve permitir que o usuário atualize o valor de câmbio para uma moeda já existente</p>

- <p>Deve permitir que o usuário crie uma nova operação de câmbio</p>
- <p>Deve ser cobrado uma taxa de 10% por cada operação de câmbio efetuada</p>

- <p>Deve permitir que o usuário gere um relatório de todas operações de câmbio existentes</p>
- <p>Deve permitir que o usuário gere um relatório de todas operações de câmbio existentes por data</p>
- <p>Deve permitir que o usuário gere um relatório de todas operações de câmbio existentes por usuário</p>
- <p>Esse relatório deve conter o valor total das operações e valor total das taxas cobradas </p>

## 🚀 Tecnologias

Tecnologias utilizadas para a criação da API
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [Tsyringe](https://github.com/Microsoft/tsyringe)
- [Uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Swagger](https://swagger.io)

## 💻 Como instalar

### Requerimentos
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- Uma instancia no [Postgre](https://www.postgresql.org/)
> Obs.: Recomendo a utilização do Docker

**Clone o projeto e acesse a pasta da api**
```bash
$ git clone https://github.com/jrgraff/api-muito-dinheiro-corretora.git && cd api-muito-dinheiro-corretora
```
**Siga os passos abaixo**
> Obs.: Utilizarei o yarn para a instalação dos pacotes, mas o npm também pode ser utilizado
```bash
# Instale as dependências
$ yarn

# Crie a instancia do postgres utilizando o docker-compose caso o tenha instalado em sua maquina
$ docker-compose up -d

# Caso não utilize o comando acima, tenha certeza que o 'ormconfig.json'
# tenha as informações necessárias para se conectar ao seu banco de dados postegres

# Com a instância do postgres rodando, sincronize o banco de dados e após isso rode as migrations
$ yarn typeorm schema:sync
$ yarn typeorm migration:run

# E por fim, rode a api
$ yarn dev

# Muito bem, o projeto está rodando! Agora você pode testar as rotas utilizando a UI do Swagger ou uma ferramenta como Insomnia ou Postman.
```

**Acessando a documentação do Swagger**
<p>Após tudo configurado, com a sistema rodando, entre no link http://localhost:3333/api-docs/ para acessar a documentação do Swagger.</p>

---
Made with 💜 &nbsp;by jackson Graff &nbsp;[See my linkedin](https://www.linkedin.com/in/jackson-graff-a032b119a/)
