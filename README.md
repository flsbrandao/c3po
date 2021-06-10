![c3p0_icon-icons com_76936](https://user-images.githubusercontent.com/47752369/118412106-8f31de80-b66e-11eb-8fe1-32c063f11e49.png)
# C3PO 💻
O C3PO  que é uma API REST de cadastro de clientes e cidades.  

## Como funciona? 📜

Através de endpoints, o usuário poderá cadastrar, alterar, consultar e remover clientes e cadastrar e consultar de cidades. 

## Como instalar o projeto? ⚙️
Nesse projeto estaremos utilizando o banco de dados **MySQL**.  As configurações de acesso ao banco de dados estão no arquivo *.env*. Certifique-se que o MySQL está ativo antes de iniciar a instalação do projeto.

Faça clone desse repositório ou baixe o zip. Dentro da pasta do projeto execute o seguinte comando para baixar os pacotes utilizados no projeto.

    yarn OU npm install

Logo após, execute os comandos abaixo para criar o banco de dados e as tabelas.
 
    yarn sequelize db:create OU npx sequelize db:create
     
    yarn sequelize db:migrate OU npx sequelize db:migrate

Para startar o projeto execute:

     yarn start OU npm run start
     

## Endpoints 🎯

Para consumir a API, use um API Client como o _Insomnia_ ou _Postman_ ou outro de sua preferência.
 
### Cadastrar Cidade 
🟢 **POST**  - *http://localhost:3000/cities* 

Deve ser enviado um objeto JSON com os atributos _cidade_ e _estado_ e os respectivos valores no formato de _string_

#### Exemplo:
> {
	"cidade": "Vitória",
	"estado": "ES"
}

### Consultar cidades
🟣 **GET** - *http://localhost:3000/cities* 

Para fazer o filtro por cidade, utilize a query _cidade_.
#### Exemplo
> *localhost:3000/cities?cidade=Embu*
> 
> *localhost:3000/cities?cidade=Rio de Janeiro*

Para filtar por estado, utilize a query _estado_.
#### Exemplo
> *localhost:3000/cities?estado=SP*

### Cadastrar Cliente
🟢 **POST** - *http://localhost:3000/customers*

Para realizar o cadastro, deve-se enviar um objeto JSON informando o _nome, sexo, data de nascimento, idade e o ID da cidade_. Os valores dos atributos  _idade_ e _cidade_ devem ser _integer_, os demais _string_.
#### Exemplo
> {
	"nome": "Antonio Marcos Alegrim",
	"sexo": "M",
	"data_nascimento": "1999-02-19",
	"idade": 22,
	"cidade":1
}

### Consultar Cliente
🟣 **GET** - *http://localhost:3000/customers*
 
 Para filtrar pelo id, utilize a query _id_
 #### Exemplo
 > *localhost:3000/customers?id=30*

Para filtrar pelo nome, utilize a query _nome_

#### Exemplo
>  *localhost:3000/customers?nome=Bento*
>  
>   *localhost:3000/customers?nome=Severino Silva*

### Alterar Cliente
🟠  **PUT** - *http://localhost:3000/customers/{id}*

 Para alterar o nome do cliente, deve-se enviar um objeto JSON, com o atributo _nome_ e o respectivo valor, e informar na URL da endpoint o ID do cliente
#### Exemplo
> URL :  *localhost:3000/customers/30*
> 
> JSON:  
> 
> {
	"nome": "Aparecido Silva"
}

### Remover Cliente
🔴  **DELETE** - *http://localhost:3000/customers/{id}*
 
 Para remover o cliente, basta informar na endpoint o ID do mesmo.
 #### Exemplo
>  *localhost:3000/customers/30*


## Tecnologias utilizadas 🚀
- Node.js
- MySQL
- Express
- [Sequelize](https://sequelize.org/)
- [Ajv](https://www.npmjs.com/package/ajv)
