# Home Component

## Descrição

Esse componente é responsável por exibir uma lista de personagens e fornecer funcionalidades de pesquisa, ordenação e paginação.

## Funcionalidades

Exibição de uma lista de personagens
Busca de personagens por nome
Ordenação de personagens por nome (A-Z ou Z-A)
Paginação de resultados

## Uso

Importação
JavaScript
import Home from './Home';
Use code with caution. Learn more
Renderização
JavaScript
<Home />
Use code with caution. Learn more

## Propriedades

Não há propriedades específicas para o componente Home.

## Estados

characters: Array de objetos contendo os dados dos personagens.
searchInput: Valor da caixa de pesquisa.
search: Objeto contendo os critérios de pesquisa.
currentPage: Número da página atual (usado para paginação).
itemsPerPage: Quantidade de itens a serem exibidos por página.

## Métodos

carregarPersonagens: Busca os personagens da API e atualiza o estado characters.
handleSearchInputChange: Atualiza o estado searchInput com base na entrada do usuário na caixa de pesquisa.
handleSearch: Realiza a busca de personagens usando os critérios da pesquisa e atualiza o estado characters.
inverterCards: Inverte a ordem dos personagens na lista.

## Dependências

api: Serviço para fazer chamadas à API de personagens.
CharacterCard: Componente responsável por renderizar um card de personagem individual.
SearchBar: Componente responsável por fornecer a caixa de pesquisa.

## Observações

O componente Home utiliza a API de personagens para buscar os dados dos personagens.
A ordenação de personagens é implementada através da inversão do array characters.
A paginação é implementada utilizando os estados currentPage e itemsPerPage.
