# Carregar Compras do Cache

> ## Caso do sucesso
1. Sistema executa o comando "Carregar Compras"
2. Sistema carrega os dados do cache
3. Sistema valida se o cache tem menos de 3 dias
4. Sistema cria uma lista de compras a partir dos dados do Cache
5. Sistema retorna a lista de compras

> ## Execução - Cache expirado
1. Sistema limpa o Cache
2. Sistema retorna erro

> ## Execução - Cache vazio
1. Sistema retorna erro
