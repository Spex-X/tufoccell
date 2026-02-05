# Tufocell

Site de celulares desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Descrição

A Tufocell é uma plataforma online para venda de smartphones, oferecendo os melhores celulares com preços competitivos. O site apresenta um design moderno e responsivo com:

- Catálogo de produtos
- Sistema de busca e filtros
- Interface responsiva
- Design moderno com Tailwind CSS

## Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilização
- **React** - Biblioteca de UI

## Getting Started

Primeiro, instale as dependências:

```bash
npm install
```

Depois, rode o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `src/app/page.tsx`. A página atualiza automaticamente conforme você edita o arquivo.

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout principal
│   └── globals.css       # Estilos globais
└── components/           # Componentes reutilizáveis
```

## Deploy

A forma mais fácil de fazer deploy do seu app Next.js é usar a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
