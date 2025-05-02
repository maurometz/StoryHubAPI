# StoryHub API

StoryHub é uma API RESTful desenvolvida com Node.js, TypeScript e Fastify, que permite gerenciar histórias e comentários. A API utiliza MySQL como banco de dados e TypeORM para mapeamento objeto-relacional.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Fastify
- TypeORM
- MySQL
- Swagger (Documentação da API)

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- Yarn
- MySQL (versão 8.0 ou superior)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/storyhub-api.git
cd storyhub-api
```

2. Instale as dependências:
```bash
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações do banco de dados.

4. Execute as migrações do banco de dados:
```bash
yarn typeorm migration:run
```

5. Inicie o servidor em modo desenvolvimento:
```bash
yarn dev
```

O servidor estará rodando em `http://localhost:3000`

## 📚 Documentação da API

A documentação completa da API está disponível através do Swagger UI em:
```
http://localhost:3000/documentation
```

## 🛣️ Principais Rotas

### Histórias

#### Listar todas as histórias
```http
GET /api/stories
```

#### Obter uma história específica
```http
GET /api/stories/:id
```

#### Criar uma nova história
```http
POST /api/stories
```
Corpo da requisição:
```json
{
  "title": "Título da História",
  "content": "Conteúdo da história...",
  "author": "Nome do Autor"
}
```

#### Atualizar uma história
```http
PUT /api/stories/:id
```
Corpo da requisição:
```json
{
  "title": "Novo Título",
  "content": "Novo conteúdo..."
}
```

#### Deletar uma história
```http
DELETE /api/stories/:id
```

### Comentários

#### Listar comentários de uma história
```http
GET /api/stories/:storyId/comments
```

#### Adicionar um comentário
```http
POST /api/stories/:storyId/comments
```
Corpo da requisição:
```json
{
  "content": "Conteúdo do comentário",
  "author": "Nome do Autor"
}
```

## 🧪 Testes

Para executar os testes:
```bash
yarn test
```

## 📝 Scripts Disponíveis

- `yarn dev`: Inicia o servidor em modo desenvolvimento
- `yarn build`: Compila o projeto
- `yarn start`: Inicia o servidor em modo produção
- `yarn test`: Executa os testes
- `yarn typeorm`: Executa comandos do TypeORM
- `yarn lint`: Executa o linter
- `yarn format`: Formata o código

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Agradecimentos

- [Fastify](https://www.fastify.io/)
- [TypeORM](https://typeorm.io/)
- [Swagger](https://swagger.io/)
