Feature: Teste 1 SME

   Testes de um formulario

   Scenario: Sucesso no preenchimento dos dados
    Given Logado ao Site
    When Preencho Todos os Dados
    And Clico em Enviar
    Then Deve retornar sucesso no Envio
   
#    Scenario: Preenchimento Sem o Nome
#     Given Logado ao Site
#     When Preencho apenas Sobrenome e Telefone
#     And Clico em Enviar
#     Then Deve retornar erro no Envio3


#    Scenario: Preenchimento Sem o Sobrenome
#     Given Logado ao Site
#     When Preencho apenas Nome e Telefone
#     And Clico em Enviar
#     Then Deve retornar erro no Envio

#    Scenario: Preenchimento Sem o Telefone
#     Given Logado ao Site
#     When Preencho apenas Nome e Sobrenome
#     And Clico em Enviar
#     Then Deve retornar erro no Envio
   

#    Scenario: Enviar Sem Preencher os Dados
#     Given Logado ao Site
#     When  Nao Preencho os Dados
#     And Clico em Enviar
#     Then Deve retornar erro no Envio
   
   
      