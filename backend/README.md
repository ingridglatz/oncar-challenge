# Oncar - Backend

## Objetivo

Projeto de teste tecnico para a empresa Oncar, ele tem como objetivo criar uma API RESTful para gerenciar carros e fazer analise de credito.

## Tecnologias

- NestJS
- TypeScript
- Prisma
- PostgreSQL
- Docker

## Como Rodar o Projeto Localmente

1. Clone o repositório do projeto.

```bash
git clone git@github.com:ingridglatz/oncar-challenge.git
cd oncar-challenge/backend
```

2. Instale as dependências do projeto.

```bash
npm install
```

3. Inicie o projeto.

```bash
npm run start:dev
```

4. O Backend estará rodando na porta 4000.

```bash
http://localhost:4000
```

## Variáveis de ambiente

No arquivo `.env.example` você pode encontrar o exemplo das variáveis de ambiente utilizadas no projeto.

## Endpoints

### Carros

- `GET /cars` - Retorna todos os carros
- `GET /cars/:id` - Retorna um carro pelo id
- `POST /cars` - Cria um carro
- `PUT /cars/:id` - Atualiza um carro
- `DELETE /cars/:id` - Deleta um carro

### Analise de credito

- `POST ` - Faz uma analise de credito

## Estrutura do projeto

```bash
src
├── cars
│ ├── car.controller.ts
│ ├── car.entity.ts
│ ├── car.module.ts
│ ├── car.service.ts
│ └── dto
│ ├── create-car.dto.ts
│ └── update-car.dto.ts
├── credit-analysis
│ ├── credit-analysis.controller.ts
│ ├── credit-analysis.module.ts
│ └── credit-analysis.service.ts
├── database
│ ├── database.module.ts
│ └── database.providers.ts
├── app.module.ts
└── main.ts
```
