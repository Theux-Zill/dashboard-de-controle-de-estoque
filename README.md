# Dashboard de Controle de Estoque e Validade

Este projeto é um dashboard simples para controle de estoque e monitoramento de datas de validade de produtos. Ele permite adicionar, visualizar, pesquisar e remover produtos, além de indicar o status de validade de cada item.

## Funcionalidades

-   **Adicionar Produtos**: Registre novos produtos com nome, quantidade e data de validade.
-   **Visualizar Produtos**: Exibe uma lista de todos os produtos cadastrados em uma tabela.
-   **Pesquisar Produtos**: Filtra a lista de produtos em tempo real com base no nome do produto.
-   **Remover Produtos**: Exclui produtos individualmente da lista.
-   **Status de Validade**: Classifica os produtos em três categorias visuais:
    -   `Vencido`: Produtos cuja data de validade já passou.
    -   `Próximo`: Produtos que vencem em até 3 dias.
    -   `Ok`: Produtos com validade superior a 3 dias.
-   **Persistência de Dados**: Todos os dados dos produtos são salvos no `localStorage` do navegador, garantindo que as informações não sejam perdidas ao fechar a página.

## Tecnologias Utilizadas

-   **HTML5**: Estrutura da página.
-   **CSS3**: Estilização e layout responsivo.
-   **JavaScript (ES6+)**: Lógica de manipulação de dados, interatividade e persistência.
-   **Font Awesome**: Ícones para ações (ex: remover).

## Como Usar

### Adicionar um Produto
1.  Preencha os campos "Nome do Produto", "Quantidade" e "Data de Validade" na seção "Adicionar Produto".
2.  Clique no botão "Adicionar".

### Pesquisar Produtos
1.  Utilize a barra de pesquisa no topo da página ("Nome do produto ou Código...").
2.  Conforme você digita, a tabela de produtos será filtrada automaticamente.

### Remover um Produto
1.  Na tabela "Produtos Cadastrados", localize o produto que deseja remover.
2.  Clique no ícone de lixeira (🗑️) na coluna de ações.
3.  Confirme a remoção na caixa de diálogo.

### Entender o Status de Validade
A coluna "Status" na tabela indicará a situação da validade do produto com cores distintas:
-   **Vermelho claro**: Produto `Vencido`.
-   **Amarelo claro**: Produto `Próximo` do vencimento.
-   **Verde claro**: Produto `Ok`.

## Instalação e Execução

Este é um projeto front-end puro e não requer um servidor para ser executado.

1.  **Clone o repositório** (ou baixe os arquivos):
    ```bash
    git clone https://github.com/seu-usuario/dashboard-de-controle-de-estoque.git
    ```
2.  **Navegue até o diretório do projeto**:
    ```bash
    cd dashboard-de-controle-de-estoque
    ```
3.  **Abra o arquivo `html/index.html`** em seu navegador web preferido.

## Licença

Este projeto está licenciado sob a licença MIT.