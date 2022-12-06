Feature: Gravar Compras no Cache

Scenario: Obter dados da API

1. Sistema executa o comando "Salvar Compras"
2. Sistema cria uma data para ser armazenada no cache
3. Sistema  apaga os dados do cache atual
5. Sistema insere os novos dados no cache
6. Sistema não retorna nenhum erro

Scenario: Exceção - Erro ao apagar dados do cache
1. Sistema retorna erro

Scenario: Exceção - Erro ao gravar dados do cache
1. Sistema retorna erro