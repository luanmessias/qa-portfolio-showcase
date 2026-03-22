# Casos de Teste (BDD) - Gestão de Carrinho e Frescos

**Epic:** [Epic] Gestão de Carrinho e Produtos Frescos (Web)

---

## História 1: Buscar e adicionar produto padrão ao carrinho (SCRUM-6)
**COMO** cliente do Continente Online
**QUERO** buscar por um produto específico e adicioná-lo ao meu carrinho
**PARA QUE** eu possa comprá-lo posteriormente.

### Cenário 1: Adicionar produto com sucesso a partir da busca (Automatizado via Playwright)
**DADO** que estou na página inicial do Continente e aceito os cookies
**QUANDO** eu pesquiso por "Arroz Agulha"
**E** clico no botão "Adicionar" no primeiro resultado
**ENTÃO** devo ver uma mensagem de sucesso
**E** o contador do meu carrinho no topo deve alterar para "1"

---

## História 2: Adicionar produto fresco (Vendido ao Peso/Unidade) (SCRUM-7)
**COMO** cliente do Continente Online
**QUERO** adicionar produtos frescos escolhendo a medida (Kg ou Unidade)
**PARA QUE** eu possa comprar a quantidade exata que necessito.

### Cenário 1: Adicionar produto fresco escolhendo o peso (Kg) (Teste Exploratório)
**DADO** que estou na página de detalhe de um produto fresco (ex: Frango)
**QUANDO** eu seleciono a opção de medida "Kg"
**E** defino a quantidade validando os steppers do sistema
**E** clico em "Adicionar"
**ENTÃO** o botão deve bloquear adequadamente a injeção de caracteres inválidos.

### Cenário 2: Tentativa de adicionar produto acima do limite de stock (Cenário de Exceção / Edge Case)
**DADO** que estou na página de produto de um artigo com baixo stock (ex: Promoção Fim de Semana)
**QUANDO** eu insiro manualmente uma quantidade superior ao stock disponível (ex: 999)
**E** clico fora do input ou no botão "Adicionar"
**ENTÃO** o sistema deve ajustar automaticamente a quantidade para o limite máximo permitido
**OU** exibir uma mensagem de erro clara indicando indisponibilidade dessa quantidade.