# 📦 Dashboard de Controle de Estoque

Um dashboard web moderno e responsivo para gerenciamento de estoque e monitoramento de datas de validade de produtos. Desenvolvido com HTML5, CSS3 e JavaScript vanilla, oferecendo uma solução simples, rápida e sem dependências externas.

## ✨ Funcionalidades

- ✅ **Adicionar Produtos** - Registre produtos com nome, quantidade e data de validade
- 🔍 **Busca em Tempo Real** - Filtre produtos instantaneamente pelo nome
- 📊 **Status de Validade** - Classificação automática (Vencido, Próximo, Ok)
- 🗑️ **Gerenciamento** - Remova produtos individualmente com confirmação
- 💾 **Persistência Local** - Dados salvos no localStorage do navegador
- 📱 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Modo Escuro** - Suporte automático a preferências do sistema
- ♿ **Acessibilidade** - Respeita preferências de redução de movimento

## 🛠️ Tecnologias

| Tecnologia | Descrição |
|-----------|-----------|
| HTML5 | Estrutura semântica |
| CSS3 | Grid, Flexbox, Media Queries, Custom Properties |
| JavaScript (ES6+) | Lógica modular e funcional |
| Font Awesome | Ícones vetoriais |
| Firebase | (Opcional) Para sincronização em nuvem |

## 📋 Status de Validade

O sistema classifica produtos em três categorias com feedback visual:

| Status | Condição | Cor |
|--------|----------|-----|
| 🟢 **Ok** | Validade > 7 dias | Verde |
| 🟡 **Próximo** | 3-7 dias para vencer | Amarelo |
| 🔴 **Vencido** | Data de validade expirada | Vermelho |

## 🚀 Começar Rápido

### Sem Instalação
1. Clone ou baixe o repositório
2. Abra `index.html` diretamente no navegador
3. Comece a usar!

### Com npm (Opcional - Futuro suporte a Firebase)
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dashboard-de-controle-de-estoque.git
cd dashboard-de-controle-de-estoque

# Instale dependências (opcional)
npm install firebase

# Abra em seu navegador
open index.html
```

## 📖 Como Usar

### ➕ Adicionar Produto
1. Preencha os campos na seção "Adicionar Produto"
2. Nome, Quantidade e Data de Validade são obrigatórios
3. Clique em "Adicionar"

### 🔎 Pesquisar Produto
- Digite o nome do produto na barra de pesquisa
- A tabela é filtrada automaticamente enquanto você digita
- Deixe em branco para ver todos os produtos

### 🗑️ Remover Produto
1. Localize o produto na tabela "Produtos Cadastrados"
2. Clique no ícone de lixeira (🗑️)
3. Confirme a remoção na caixa de diálogo

## 🗂️ Estrutura do Projeto

```
dashboard-de-controle-de-estoque/
├── index.html           # Estrutura HTML
├── README.md           # Este arquivo
├── css/
│   ├── reset.css       # Normalização de estilos
│   ├── grid.css        # Sistema de grid
│   ├── global.css      # Variáveis globais
│   ├── responsive.css  # Media queries
│   └── style.css       # Estilos principais
└── js/
    ├── api.js          # Integrações externas
    └── script.js       # Lógica da aplicação
```

## 🔧 Características Técnicas

### JavaScript Modular
- Funções puras e sem efeitos colaterais
- Separação clara de responsabilidades
- Tratamento robusto de erros
- Proteção contra XSS

### Performance
- Renderização eficiente com DocumentFragment
- Sem frameworks pesados
- Carregamento instantâneo

### Armazenamento
- localStorage para persistência local
- Suporte futuro para sincronização com Firebase

## 📱 Navegadores Suportados

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 🎯 Próximas Melhorias

- [ ] Integração com Firebase para sincronização em nuvem
- [ ] Autenticação de usuários
- [ ] Importação/Exportação de dados (CSV, JSON)
- [ ] Gráficos de análise de estoque
- [ ] Notificações de vencimento
- [ ] Relatórios em PDF

## 📄 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 Autor

Desenvolvido com ❤️ para gerenciamento eficiente de estoque.