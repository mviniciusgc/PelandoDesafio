Essa API busca obter dados de páginas web. 

O objetivo dessa API é receber uma URL como parâmetro e salvar/retornar alguns dados dessa página, são eles: 
{
  title: string
  description: string
  price: string
  link: string
  created_at: timestamp
  updated_at: timestamp
}

# Plataforma aceitas:

* Casas Bahia
* Magazine Luiza
* Ponto Frio
* Natura
* Amaro


<br /><br />

## Configuração e execução do projeto

Para executar o projeto é necessário ter o docker, docker compose, dbeaver ou equivalente, npm e o nodejs. 

Execute o comando docker compose up para subir o banco de dados. 

Execute o npm i no terminal dentro da pasta raiz do projeto para instalar as depedencias

Execute o npm run test:dev no terminal dentro da pasta raiz do projeto para iniciar.

<br />

## Rotas

Essa API contém 1 única rota: 
[POST] /api/promotion
Request: "url": string
Response:   "title": string
            "description": string
            "price": string
            "link": string
            "created_at": timestamp
            "updated_at": timestamp

<br />

> ## Bibliotecas e Ferramentas

* NPM
* Typescript
* Git
* Docker
* Jest
* PostgresSQL
* Express
* Eslint
* Standard Javascript Style
* Nodemon
* Module-Alias
* Reflect-Metadata
* typeorm
* puppeteer
* pg