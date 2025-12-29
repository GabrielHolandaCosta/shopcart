# ShopCart - Mini E-commerce

Um mini e-commerce moderno e responsivo construído com React, TypeScript e Vite.

## 🚀 Funcionalidades

- ✅ **Seletor de idioma** (Português, Inglês, Espanhol)
- ✅ **Lista de produtos** com busca
- ✅ **Carrinho de compras** com sidebar
- ✅ **Persistência** no localStorage
- ✅ **Design responsivo** (mobile + desktop)
- ✅ **Tratamento de erros e loading**

## 📋 Requisitos Atendidos

### Tela de Produtos (Home)
- [x] Seletor de idioma (PT, EN, ES)
- [x] Lista de produtos com imagem, nome, preço
- [x] Botão "Adicionar ao carrinho"
- [x] Campo de busca por nome
- [x] Responsividade completa

### Carrinho
- [x] Mostrar itens com imagem, nome, preço, quantidade
- [x] Subtotal por item
- [x] Total geral
- [x] Botão remover item
- [x] Botões +/- para quantidade
- [x] Empty state quando vazio

### Persistência
- [x] Carrinho salvo no localStorage
- [x] Idioma salvo no localStorage

### Regras de Negócio
- [x] Não duplicar itens (aumenta quantidade)
- [x] Quantidade mínima 1
- [x] Remover item completamente
- [x] Total atualizado automaticamente
- [x] Empty state quando carrinho vazio

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **CSS Modules** - Estilização
- **Context API** - Gerenciamento de estado

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Estrutura do Projeto

```
shopcart/
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.tsx
│   │   ├── ProductList.tsx
│   │   ├── ProductCard.tsx
│   │   └── Cart.tsx
│   ├── contexts/        # Context API
│   │   ├── CartContext.tsx
│   │   └── LanguageContext.tsx
│   ├── i18n/           # Internacionalização
│   │   ├── locales/
│   │   │   ├── pt.json
│   │   │   ├── en.json
│   │   │   └── es.json
│   │   └── index.ts
│   ├── types/          # Tipos TypeScript
│   │   └── index.ts
│   ├── data/          # Dados mockados
│   │   └── products.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## ✨ Destaques

- **TypeScript** para type safety
- **Alias configurado** (@/ para src/)
- **i18n completo** com arquivos JSON separados (PT, EN, ES)
- **Formatação de preços** usando Intl.NumberFormat (EUR em todos os idiomas)
- **Carrinho 100% funcional** com validações e regras de negócio
- **Persistência** no localStorage (carrinho + idioma)
- **Tratamento de erros** e estados de loading
- **Validação de quantidade** (mínimo 1, botão desabilitado quando necessário)
- **Acessibilidade** com aria-labels
- **Performance** com lazy loading de imagens
- **Animações suaves** para melhor UX
- **Busca funcional** com mensagens traduzidas

## 🐛 Problemas Comuns Resolvidos

- ✅ Alias do Vite configurado corretamente
- ✅ Dependências no package.json
- ✅ Componentes exportados corretamente
- ✅ Tratamento de loading e erros
- ✅ Sem variáveis não usadas
- ✅ Build otimizado para produção

## 📱 Responsividade

O projeto é totalmente responsivo e funciona perfeitamente em:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🎯 Próximos Passos (Opcional)

- [ ] Integração com API real
- [ ] Autenticação de usuários
- [ ] Checkout e pagamento
- [ ] Histórico de pedidos
- [ ] Avaliações de produtos

---

Desenvolvido com ❤️ usando React + TypeScript + Vite

