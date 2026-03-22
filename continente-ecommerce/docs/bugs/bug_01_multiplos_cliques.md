# Bug Report: Botão "Adicionar" permite requisições duplicadas

**ID do Jira:** SCRUM-8
**Tipo:** UI / Network
**Severidade:** Medium
**Ambiente:** Produção (Windows 11, Chrome v120)

## Descrição
Durante a adição de um produto a partir da busca, o botão "Adicionar" não apresenta um estado de *loading* (desabilitado) enquanto aguarda a resposta da API. Em conexões lentas (3G), isso permite duplo/triplo clique acidental pelo utilizador.

## Pré-condições
- O utilizador deve estar com uma rede simulada lenta (Slow 3G).
- O carrinho de compras deve preferencialmente estar vazio ou com contagem conhecida.

## Passos para Reproduzir
1. Aceder a continente.pt e pesquisar por qualquer produto (ex: "Arroz").
2. No DevTools (Network), simular "Slow 3G".
3. No primeiro resultado, clicar no botão "Adicionar" 3 vezes rapidamente.
4. Observar o comportamento do botão e o contador do carrinho no header.

## Resultado Atual
O botão aceita múltiplos cliques sem *feedback* visual de bloqueio. O contador do carrinho passa para "3". Ao inspecionar a aba Network, vemos 3 requisições POST sucessivas para o endpoint do carrinho.

## Resultado Esperado
No primeiro clique, o botão deve entrar em estado `disabled` (idealmente exibindo um *spinner*) até que a *Promise* da API retorne `200 OK`, prevenindo itens duplicados indesejados.

## Rastreabilidade
- **Bloqueia:** SCRUM-6 (Buscar e adicionar produto padrão ao carrinho)