# Gravar Compras no Cache

> ## Caso do sucesso
1. Sistema executa o comando "Salvar Compras"
2. Sistema faz um encoding nos dados a serem gravados
3. Sistema cria uma data para ser armazenada no cache
4. Sistema limpa os dados do cache atual
5. Sistema insere os novos dados no cache
6. Sistema não retorna nenhum erro