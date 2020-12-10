# DesafioTecnico-Compasso
No diretório backend, descompactar o arquivo node-modules.rar

Sistema de votação em Cooperativa
Tabelas:
-pauta
#id
#descricao
#data_criacao

-associado
#id
#cpf
#nome_associado
#ativo

-sessao_votacao
#id
#id_pauta
#ativo
#data_sessao
#duracao

-votos
#id
#id_sessao
#voto
#id_associado

Comandos para inicializar o servidor no backend e inicializar o sistema no frontend:
-Backend: no terminal acessar o diretório backend e executar o seguinte comando: npm start

-Frontend: abrir outro terminal e acessar o diretório frontend e executar o seguinte comando: npm start

