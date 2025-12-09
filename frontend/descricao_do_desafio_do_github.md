## Objetivo

Construir uma aplicação web simples de e-commerce com Next.js e PostgreSQL, que permita gerenciar produtos e adicionar/remover itens em um carrinho de compras.

## Requisitos Técnicos

 1. **Frontend:**

  - Usar Next.js (App Router);
  - Listar produtos disponíveis em uma página inicial;
  - Permitir adicionar e remover produtos do carrinho;
  - Exibir o resumo do carrinho: (lista de produtos, quantidade, subtotal, total).

2. **Backend:**

  - Criar API's usando Next.js API routes
  - Endpoints mínimos:
    - GET /products → listar produtos
    - POST /cart → adicionar item ao carrinho
    - DELETE /cart/:id → remover item do carrinho
    - GET /cart → consultar carrinho atual

3. **Banco de Dados:**

  - Usar PostgreSQL;
  - Criar tabelas:
    - products (id, name, price, image_url)
    - cart (id, subtotal, total)
    - cart_items (id, cart_id, product_id, quantity)
  - Usar Prisma ORM ou query builder à sua escolha.

4. **Git:**

  - Subir o projeto em um repositório público no GitHub;
  - Usar commits descritivos e padronizados;
  - Criar um README.md explicando como rodar o projeto localmente (instruções de setup, migrations e execução);

5. **Deploy:**

  - Deploy em algum PaaS (Vercel, Render ...).

## Considerações

  - O objetivo desse desafio é entender até onde vai o seu nível técnico, você não conseguir cumprir determinados requisitos não significa necessariamente a sua desclassificação na candidatura. A sua organização e compromisso com o desenvolvimento serão levados em consideração;
  - A sua criatividade também será levada em consideração, por esse motivo, os requisitos estão bem genéricos;
  - Caso seu desafio seja aceito, durante a entrevista será feita perguntas relacionadas ao projeto para avaliar o seu nível.

## Diferenciais (não obrigatórios, mas serão considerados para avaliar seu nível)

  - Criatividade para construção do design;
  - Atenção à performance e segurança;
  - Testes unitários e de integração.

## Entrega

1. Criar um repositório público no GitHub;
2. Adicionar no README:

  - Instruções para rodar o projeto;
  - Decisões de arquitetura (se houver);
3. Enviar o link para o repositório junto com a URL do domínio em produção para o e-mail saphirasolucoes@gmail.com;