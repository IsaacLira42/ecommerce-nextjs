# E-commerce Next.js

Aplicação web simples de e-commerce construída com **Next.js (App Router)** e **PostgreSQL**, como parte de um desafio técnico. O projeto permite listar produtos, adicionar/remover itens do carrinho e persistir o estado do carrinho no banco usando **Prisma ORM**.

---

## Visão geral

- **Listagem de produtos** na página principal, consumindo a API `GET /api/products`.
- **Carrinho de compras** com:
  - adicionar produto ao carrinho;
  - remover produto do carrinho;
  - limpar carrinho;
  - exibição de subtotal e total.
- **Persistência do carrinho** no PostgreSQL, com `cartId` armazenado no `localStorage` e sincronização automática via API (`/api/cart`).

---

## Tecnologias utilizadas

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Prisma ORM** + **PostgreSQL**
- **Tailwind CSS**
- **Radix UI / shadcn-like components** (botões, cards, etc.)
- **Zod** para validação de schemas da API

---

## Modelagem do banco de dados

Banco configurado em `prisma/schema.prisma` usando PostgreSQL:

- **products** (`Product`)
  - `id` (Int, PK, autoincrement)
  - `name` (String)
  - `price` (Float)
  - `imageUrl` (String)

- **cart** (`Cart`)
  - `id` (Int, PK, autoincrement)
  - `subtotal` (Float, default 0)
  - `total` (Float, default 0)

- **cart_items** (`CartItem`)
  - `id` (Int, PK, autoincrement)
  - `quantity` (Int, default 1)
  - `cartId` (FK para `Cart.id`)
  - `productId` (FK para `Product.id`)
  - `@@unique([cartId, productId])` para garantir um produto único por carrinho.

---

## Decisões de arquitetura

- **Camada de repositórios** (`src/repository`)
  - `ProductRepository`: acesso direto ao Prisma para CRUD de produtos.
  - `CartRepository`: leitura/criação/atualização/remoção de carrinhos e itens.

- **Camada de serviços** (`src/services`)
  - `ProductService`: orquestra regras de listagem e criação de produtos, retornando DTOs prontos para a API.
  - `CartService`: centraliza a lógica de montagem do carrinho e transformação para DTO de resposta.

- **DTOs e validação com Zod** (`src/types`)
  - Schemas Zod (`cart.schema.ts`, `product.schema.ts`) garantem a forma dos payloads.
  - Tipos `CreateCartDto`, `UpdateCartDto`, `ResponseCartDto`, `ResponseProductDto` são inferidos dos schemas.

- **Camada de API com App Router** (`src/app/api`)
  - Endpoints implementados como route handlers (`route.ts`) que chamam a camada de serviços.

- **Gerenciamento de estado do carrinho no frontend**
  - `CartProvider` (`src/components/cart/CartProvider.tsx`) expõe contexto com itens, subtotal, total e ações (`addItem`, `removeItem`, `clearCart`).
  - Sincronização automática com a API: ao alterar itens, o provider faz `POST` ou `PUT` em `/api/cart` e armazena o `cartId` no `localStorage`.

---

## Pré-requisitos

- **Node.js** >= 18
- **npm** (ou outro gerenciador de pacotes compatível)
- **PostgreSQL** rodando localmente ou em algum serviço (RDS, Supabase, etc.)

---

## Configuração do ambiente

1. **Clonar o repositório**

```bash
git clone https://github.com/SEU_USUARIO/ecommerce-nextjs.git
cd ecommerce-nextjs
```

2. **Instalar dependências**

```bash
npm install
```

3. **Configurar variáveis de ambiente**

Copie o arquivo `.env.example` para `.env` e ajuste a `DATABASE_URL` de acordo com o seu PostgreSQL:

```bash
cp .env.example .env
```

Exemplo de valor em `.env`:

```env
DATABASE_URL="postgres://postgres:SENHA@localhost:5432/NOME_DO_BANCO_DE_DADOS"
```

4. **Rodar migrações do Prisma**

Aplicar o schema no banco de dados:

```bash
npx prisma migrate dev --name init
```

5. **Popular o banco com dados de exemplo (seed)**

O projeto possui um script de seed configurado em `prisma/seed.js`:

```bash
npm run db:seed
```

6. **Executar o servidor de desenvolvimento**

```bash
npm run dev
```

O projeto ficará disponível em: [http://localhost:3000](http://localhost:3000).

---

## Endpoints da API

### Produtos

- **GET `/api/products`**
  - **Descrição:** lista todos os produtos cadastrados.
  - **Resposta 200:**
    - Array de objetos no formato:
      - `id`: number
      - `name`: string
      - `price`: number
      - `imageUrl`: string

### Carrinho

- **POST `/api/cart`**
  - **Descrição:** cria um novo carrinho com itens e totais.
  - **Body (JSON):**
    - `items`: `[{ productId: number, quantity: number }]`
    - `subtotal`: number
    - `total`: number
  - **Resposta 201:** objeto do carrinho criado com itens e produtos aninhados.

- **PUT `/api/cart`**
  - **Descrição:** atualiza um carrinho existente.
  - **Body (JSON):**
    - `id`: number (id do carrinho)
    - `items`: `[{ productId: number, quantity: number }]`
    - `subtotal`: number
    - `total`: number
  - **Resposta 200:** carrinho atualizado.

- **GET `/api/cart/:id`**
  - **Descrição:** busca um carrinho pelo seu `id`.
  - **Parâmetros de rota:**
    - `id`: number
  - **Respostas:**
    - `200`: carrinho encontrado com itens e produtos.
    - `404`: quando o carrinho não é encontrado.

- **DELETE `/api/cart/:id`**
  - **Descrição:** remove um carrinho e seus itens.
  - **Parâmetros de rota:**
    - `id`: number
  - **Respostas:**
    - `200`: carrinho removido.
    - `404`: quando o carrinho não é encontrado.

---

## Interface e fluxo do usuário

- Página inicial lista produtos e permite **adicionar ao carrinho**.
- Página de **carrinho** (`/cart`) exibe:
  - itens com nome, quantidade, preço unitário e total por item;
  - **subtotal** e **total** do carrinho;
  - ações de **remover item**, **limpar carrinho** e botão de **finalizar compra** (fluxo de checkout pode ser evoluído).

---

## Build e produção

Para gerar uma build de produção:

```bash
npm run build
npm start
```

Em produção, é necessário configurar a variável `DATABASE_URL` no provedor de deploy (Vercel, Render, etc.) apontando para o banco PostgreSQL acessível pelo ambiente.

> **Obs.:** Preencha aqui, no README do repositório público, a URL do domínio em produção quando o deploy estiver pronto.

