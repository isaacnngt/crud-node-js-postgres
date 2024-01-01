# Exemplo de CRUD PostgreSQL Node.js com APIs Express Rest

Artigo completo com implementação:
> [Node.js PostgreSQL CRUD example with Express Rest APIs](https://www.bezkoder.com/node-express-sequelize-postgresql/)

Construiremos Rest Apis que podem criar, recuperar, atualizar, excluir e encontrar tutoriais por título.

A tabela a seguir mostra a visão geral das APIs Rest que serão exportadas:

- GET     `api/tutorials`	            Todos os tutoriais
- GET     `api/tutorials/:id`         Obter tutorial por id
- POST    `api/tutorials`             Adiciona novo tutorial
- PUT     `api/tutorials/:id`         Update Tutorial por id
- DELETE  `api/tutorials/:id`         Remove Tutorial por id
- DELETE  `api/tutorials`             Remove todos Tutoriais
- GET     `api/tutorials/published`   Encontre todos os tutoriais publicados
- GET     `api/tutorials?title=[kw]`  Encontre todos os tutoriais cujo título contenha 'kw'

Front-end que funciona bem com este Back-end
> [Axios Client](https://www.bezkoder.com/axios-request/)

> [Angular 8](https://www.bezkoder.com/angular-crud-app/) / [Angular 10](https://www.bezkoder.com/angular-10-crud-app/) / [Angular 11](https://www.bezkoder.com/angular-11-crud-app/) / [Angular 12](https://www.bezkoder.com/angular-12-crud-app/) / [Angular 13](https://www.bezkoder.com/angular-13-crud-example/) / [Angular 14](https://www.bezkoder.com/angular-14-crud-example/) / [Angular 15](https://www.bezkoder.com/angular-15-crud-example/) / [Angular 16](https://www.bezkoder.com/angular-16-crud-example/)

> [Vue 2 Client](https://www.bezkoder.com/vue-js-crud-app/) / [Vue 3 Client](https://www.bezkoder.com/vue-3-crud/) / [Vuetify Client](https://www.bezkoder.com/vuetify-data-table-example/)

> [React Client](https://www.bezkoder.com/react-crud-web-api/) / [React Redux Client](https://www.bezkoder.com/react-redux-crud-example/)

## Vídeo de demonstração
Este é nosso exemplo Node.js PostgreSQL CRUD usando demonstração do aplicativo Express & Sequelize, teste Rest API's com Postman.

[![Node.js PostgreSQL CRUD example Github](http://img.youtube.com/vi/x1pZHN_sjGk/0.jpg)](http://www.youtube.com/watch?v=x1pZHN_sjGk "Node.js PostgreSQL CRUD example Github")

### Teste as APIs
Run our Node.js application with command: `node server.js`.

Usando o Postman, vamos testar todas as Apis acima.

- Crie um novo tutorial usando `POST /tutorials` Api

![node-js-postgresql-crud-example-create](https://dev-to-uploads.s3.amazonaws.com/i/hqvz8ra9p21z927iwzph.png)

Depois de criar alguns novos tutoriais, você pode verificar a tabela PostgreSQL:
```testdb=# select * from tutorials;
 id |    title    |    description    | published |         createdAt          |         updatedAt
----+-------------+-------------------+-----------+----------------------------+----------------------------
  1 | Node Tut #1 | Tut#1 Description | f         | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  2 | Node Tut #2 | Tut#2 Description | f         | 2020-01-29 10:43:05.131+07 | 2020-01-29 10:43:05.131+07
  3 | Node Tut #3 | Tut#3 Description | f         | 2020-01-29 10:43:48.028+07 | 2020-01-29 10:43:48.028+07
  4 | Js Tut #4   | Tut#4 Desc        | f         | 2020-01-29 10:45:40.016+07 | 2020-01-29 10:45:40.016+07
  5 | Js Tut #5   | Tut#5 Desc        | f         | 2020-01-29 10:45:44.289+07 | 2020-01-29 10:45:44.289+07
```

- Recuperar todos os tutoriais usando `GET /tutorials` Api

![node-js-postgresql-crud-example-retrieve-all](https://dev-to-uploads.s3.amazonaws.com/i/m9razjm1njgww58er3as.png)

- Recuperar um único tutorial por id usando `GET /tutorials/:id` Api

![node-js-postgresql-crud-example-retrieve-one](https://dev-to-uploads.s3.amazonaws.com/i/0kuojvc596i5u423od2b.png)

- Atualizar um tutorial usando `PUT /tutorials/:id` Api

![node-js-postgresql-crud-example-update](https://dev-to-uploads.s3.amazonaws.com/i/3buqfz0by0lu2z4kf3uq.png)

Verifique `tutorials` tabela depois que algumas linhas foram atualizadas:
```testdb=# select * from tutorials;
 id |     title      |    description    | published |         createdAt          |         updatedAt
----+----------------+-------------------+-----------+----------------------------+----------------------------
  1 | Node Tut #1    | Tut#1 Description | f         | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  3 | Node Tut #3    | Tut#3 Description | f         | 2020-01-29 10:43:48.028+07 | 2020-01-29 10:43:48.028+07
  2 | Node Js Tut #2 | Tut#2 Description | t         | 2020-01-29 10:43:05.131+07 | 2020-01-29 10:51:55.235+07
  4 | Js Tut #4      | Tut#4 Desc        | t         | 2020-01-29 10:45:40.016+07 | 2020-01-29 10:54:17.468+07
  5 | Js Tut #5      | Tut#5 Desc        | t         | 2020-01-29 10:45:44.289+07 | 2020-01-29 10:54:20.544+07
```

- Encontre todos os tutoriais cujo título contém 'js': `GET /tutorials?title=js`

![node-js-postgresql-crud-example-search](https://dev-to-uploads.s3.amazonaws.com/i/u2hbmz5r35o7uo09y3z5.png)

- Encontre todos os tutoriais publicados usando `GET /tutorials/published` Api

![node-js-postgresql-crud-example-search-status](https://dev-to-uploads.s3.amazonaws.com/i/dbo753wfqibt0b93d82d.png)

- Excluir um tutorial usando `DELETE /tutorials/:id` Api

![node-js-postgresql-crud-example-delete-one](https://dev-to-uploads.s3.amazonaws.com/i/pyos3wq4tchb8ixuyj1c.png)

Tutorial with id=4 was removed from `tutorials` table:
```testdb=# select * from tutorials;
 id |     title      |    description    | published |         createdAt          |         updatedAt
----+----------------+-------------------+-----------+----------------------------+----------------------------
  1 | Node Tut #1    | Tut#1 Description | f         | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  3 | Node Tut #3    | Tut#3 Description | f         | 2020-01-29 10:43:48.028+07 | 2020-01-29 10:43:48.028+07
  2 | Node Js Tut #2 | Tut#2 Description | t         | 2020-01-29 10:43:05.131+07 | 2020-01-29 10:51:55.235+07
  5 | Js Tut #5      | Tut#5 Desc        | t         | 2020-01-29 10:45:44.289+07 | 2020-01-29 10:54:20.544+07
```

- Exclua todos os tutoriais usando `DELETE /tutorials` Api

![node-js-postgresql-crud-example-delete-all](https://dev-to-uploads.s3.amazonaws.com/i/ga42747jorssl20ywyug.png)

Agora não há linhas na  `tutorials` table:
```testdb=# select * from tutorials;
 id | title | description | published | createdAt | updatedAt
----+-------+-------------+-----------+-----------+-----------
```

Para mais detalhes, visite [REFERENCIAS]
> [Node.js PostgreSQL CRUD example with Express Rest APIs](https://www.bezkoder.com/node-express-sequelize-postgresql/)

> [Node.js Express Pagination with PostgreSQL example](https://www.bezkoder.com/node-js-pagination-postgresql/)

[Segurança]:
> [Node.js JWT Authentication & Authorization with PostgreSQL example](https://www.bezkoder.com/node-js-jwt-authentication-postgresql/)

[Associações (ORM)]:
> [Sequelize Associations: One-to-Many Relationship example](https://www.bezkoder.com/sequelize-associate-one-to-many/)

> [Sequelize Associations: Many-to-Many Relationship example](https://www.bezkoder.com/sequelize-associate-many-to-many/)

Fullstack:
> [Vue + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/vue-node-express-postgresql/)

> [React + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/react-node-express-postgresql/)

> [Angular 8 + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/angular-node-express-postgresql/)

> [Angular 10 + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/angular-10-node-express-postgresql/)

> [Angular 11 + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/angular-11-node-js-express-postgresql/)

> [Angular 12 + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/angular-12-node-js-express-postgresql/)

> [Angular 13 + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/angular-13-node-js-express-postgresql/)

> [Angular 14 + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/angular-14-node-js-express-postgresql/)

> [Angular 15 + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/angular-15-node-js-express-postgresql/)

> [Angular 16 + Node.js + Express + PostgreSQL example](https://www.bezkoder.com/angular-16-node-js-express-postgresql/)

Integration (executar back-end e front-end no mesmo servidor/porta):
> [Integrate React with Node.js Restful Services](https://www.bezkoder.com/integrate-react-express-same-server-port/)

> [Integrate Angular with Node.js Restful Services](https://www.bezkoder.com/integrate-angular-12-node-js/)

> [Integrate Vue with Node.js Restful Services](https://www.bezkoder.com/serve-vue-app-express/)

## Configuração do projeto
```
npm install
```

### Rodar
```
node server.js
```
