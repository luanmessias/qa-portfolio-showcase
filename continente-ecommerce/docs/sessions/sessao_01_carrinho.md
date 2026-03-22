# Sessão de Teste Exploratório: Adição ao Carrinho

**Data:** Fevereiro 2026
**Testador:** Luan
**Duração (Timebox):** 30 minutos

## Missão (Charter)
Explorar o comportamento do botão "Adicionar" nos *cards* de produtos e na página de detalhes, focando na resiliência do sistema perante interações atípicas do utilizador e condições de rede adversas.

## Técnicas Utilizadas
- **Simulação de Rede (Network Throttling):** Uso do Chrome DevTools para simular conexões *Slow 3G*.
- **Stress UI (Race Conditions):** Cliques múltiplos e rápidos antes da resolução das *Promises* da API.
- **Análise de Tráfego:** Monitorização dos *endpoints* `/cart/add` para verificar duplicação de *payloads*.

## Notas de Execução
- A interface principal responde bem em conexões rápidas.
- O *stepper* de produtos vendidos ao peso (ex: Frango) está bem bloqueado contra injeção de texto (Boa prevenção de erros).
- **Vulnerabilidade encontrada:** O botão "Adicionar" de produtos normais não entra em estado *disabled* durante o trânsito da requisição. Em conexões lentas, o utilizador consegue disparar vários POSTs indesejados.

## Defeitos Encontrados
- **[SCRUM-8]** - Botão "Adicionar" permite múltiplos cliques rápidos gerando itens duplicados no carrinho. *(Ver pasta de Bugs para mais detalhes).*