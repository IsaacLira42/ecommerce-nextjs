# 🚀 E-commerce Nextjs

<div align="center">

🌐 **DEPLOY ATUAL:** **[https://ecommerce-nextjs-mu-silk.vercel.app/](https://ecommerce-nextjs-mu-silk.vercel.app/)**

[![Vercel](https://img.shields.io/badge/🌐_Visitar_Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ecommerce-nextjs-mu-silk.vercel.app/)

</div>

Aplicação web de e-commerce construída com **Next.js (App Router)**, **Prisma ORM** e **PostgreSQL**, permitindo listar produtos, adicionar itens ao carrinho e persistir o estado no banco.
Ideal como base para estudos, desafios técnicos e evolução para projetos maiores.

---

## 📌 Visão Geral

* Página inicial com **listagem de produtos** via `GET /api/products`.
* **Carrinho persistente**:

  * adiciona, remove e limpa itens;
  * subtotal e total calculados automaticamente;
  * sincronização completa com o banco via API.
* Armazenamento do `cartId` no **localStorage**.
* Backend implementado com **route handlers** do App Router.

---

# 🧩 Tecnologias Utilizadas

### **Frontend & Framework**

<div>
<img src="https://skillicons.dev/icons?i=nextjs" height="48" alt="nextjs logo" /> 
<img src="https://skillicons.dev/icons?i=react" height="48" alt="react logo" /> 
<img src="https://skillicons.dev/icons?i=ts" height="48" alt="ts logo" /> 
<img src="https://skillicons.dev/icons?i=tailwind" height="48" alt="tailwind logo" /> 
</div>

### **Backend & ORM**

<div>
<img src="https://skillicons.dev/icons?i=prisma" height="48" alt="prisma logo" /> 
<img src="https://skillicons.dev/icons?i=postgres" height="48" alt="postgres logo" />
</div>

### **Deploy**
<div>
<img src="./public/favicon-neon.png" height="48" alt="node logo" /> 
<img src="https://skillicons.dev/icons?i=vercel" height="48" alt="vercel logo" />
</div>

---

# 🗂 Modelagem do Banco

Estrutura definida em `prisma/schema.prisma`:

### **Product**

* `id` *(Int, PK, autoincrement)*
* `name` *(String)*
* `price` *(Float)*
* `imageUrl` *(String)*

### **Cart**

* `id` *(Int, PK, autoincrement)*
* `subtotal` *(Float)*
* `total` *(Float)*

### **CartItem**

* `id` *(Int, PK, autoincrement)*
* `quantity` *(Int, default 1)*
* `cartId` *(FK → Cart)*
* `productId` *(FK → Product)*
* `@@unique([cartId, productId])`

---

# 🏗 Arquitetura do Projeto

### **🔹 Repositórios (`src/repository`)**

Responsáveis por acesso ao banco via Prisma:

* `ProductRepository`
* `CartRepository`

### **🔹 Serviços (`src/services`)**

Orquestram regras de negócio:

* `ProductService`
* `CartService`

### **🔹 DTOs & Validação (`src/types`)**

* Schemas com **Zod**
* DTOs inferidos dos schemas

### **🔹 API (`src/app/api`)**

* Route handlers com App Router
* Métodos GET / POST / PUT / DELETE para produtos e carrinho

### **🔹 Gerenciamento de Estado**

* `CartProvider` controla estado global do carrinho
* Persistência do `cartId` + sincronização com backend

---

# 🛠 Pré-requisitos

* Node 18+
* PostgreSQL (local ou remoto)
* Gerenciador de pacotes (npm, pnpm ou yarn)

---

# ⚙️ Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone https://github.com/IsaacLira42/ecommerce-nextjs.git
```
```bash
cd ecommerce-nextjs
```

### 2. Use Node.js 20

#### **Para NVM:**
```bash
nvm install 20
nvm use 20
```

#### **Para FNM:**
```bash
fnm install 20
fnm use 20
```

### 3. Instale dependências

```bash
npm install
```

### 4. Configure o `.env`

```bash
cp .env.example .env
```

### 5. Aplique as migrações

```bash
npx prisma migrate dev --name init
```

### 6. Popule o banco (seed)

```bash
npm run db:seed
```

### 7. Rode o servidor

```bash
npm run dev
```

App disponível em:
➡️ [http://localhost:3000](http://localhost:3000)

---

# 📡 Endpoints da API

### **Produtos**

* **GET `/api/products`** — lista produtos

### **Carrinho**

* **POST `/api/cart`** — cria um carrinho
* **PUT `/api/cart`** — atualiza um carrinho
* **GET `/api/cart/:id`** — recupera carrinho
* **DELETE `/api/cart/:id`** — remove carrinho

---

# 🛒 Interface & Fluxo do Usuário

* Lista produtos na home.
* Botão “Adicionar ao carrinho”.
* Página `/cart` com:

  * lista de itens;
  * quantidade;
  * subtotal e total;
  * limpar carrinho;
  * remover produto.
* Todo estado sincronizado com a API e banco.
