# Amor em Cena

Amor em Cena é uma aplicação web, em desenvolvimento, destinada à indexação, consulta e apresentação de um conjunto estruturado de dados sobre filmes românticos lançados nos anos 2000. A aplicação opera inteiramente no lado do cliente, realizando carregamento assíncrono de dados, filtragem em tempo real e renderização dinâmica de componentes de interface.

O projeto teve sua base inicial desenvolvida durante o curso **Imersão Dev com Google Gemini 10ª edição**, da **Alura**, e posteriormente passou a ser evoluído de forma independente, com foco em aprofundamento técnico, organização de código e consolidação de fundamentos de desenvolvimento web.

---

## Estado atual do projeto

Em desenvolvimento ativo, a arquitetura e as funcionalidades estão sendo gradualmente refinadas, com previsões de refatoração e expansão do escopo funcional.

### URL da aplicação

https://amandansz.github.io/2000s-romance-movies/

---

## Escopo e responsabilidades da aplicação

A aplicação é responsável por:

- Carregar uma base de dados local em formato JSON
- Normalizar e armazenar os dados em memória no runtime do navegador
- Executar filtragem textual baseada em entrada do usuário
- Renderizar dinamicamente os resultados em componentes de interface
- Garantir responsividade e consistência visual em diferentes resoluções

A aplicação encontra-se atualmente implementada apenas no lado do cliente. Está prevista a implementação de um backend responsável pela persistência de dados, exposição de APIs e integração com serviços externos.

---

## Arquitetura da aplicação

Trata-se de uma aplicação **client-side**, sem uso de frameworks ou bibliotecas externas, estruturada da seguinte forma:

- **Camada de apresentação**  
  HTML semântico responsável pela estrutura base da aplicação

- **Camada de estilo**  
  CSS modularizado em um único arquivo, utilizando variáveis CSS para padronização de cores, tipografia e espaçamentos, além de media queries para responsividade

- **Camada de lógica**  
  JavaScript responsável pelo carregamento assíncrono dos dados, manipulação do DOM, filtragem dos resultados e controle do estado da interface

- **Camada de dados**  
  Arquivo JSON local contendo os registros dos filmes, com campos normalizados para nome, descrição, ano, tags e links externos

---

## Funcionalidades implementadas

- Carregamento assíncrono de dados via `fetch`
- Armazenamento dos dados carregados em memória para evitar múltiplas requisições
- Filtro textual em tempo real baseado em:
  - Título do filme
  - Descrição do filme
- Renderização dinâmica de cards utilizando manipulação direta do DOM
- Exibição de metadados (ano, descrição, tags)
- Navegação externa para páginas oficiais de referência
- Layout responsivo com adaptação para desktop, tablet e dispositivos móveis

---

## Tecnologias e padrões adotados

### HTML5
- Uso de elementos semânticos (`header`, `main`, `section`, `article`, `footer`)
- Estrutura orientada à acessibilidade e organização do conteúdo

### CSS3
- Variáveis CSS para controle centralizado de identidade visual
- Layout responsivo baseado em Flexbox e Grid
- Media queries para múltiplos breakpoints
- Animações e transições com foco em feedback visual não intrusivo

### JavaScript (Vanilla)
- Programação assíncrona com `async/await`
- Manipulação direta do DOM sem abstrações externas
- Separação clara entre lógica de busca e lógica de renderização
- Estrutura procedural organizada, com funções de responsabilidade única

### JSON
- Estruturação dos dados de forma desacoplada da lógica da aplicação
- Facilidade de manutenção, expansão e futura integração com APIs externas

---



