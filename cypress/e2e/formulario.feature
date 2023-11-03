  

Feature: Teste 1 SME

   Testes de um formulario

   Scenario: Preenchimento todos os dados
    Given Logado ao Site
    When Preencho Todos os Dados Nome, Sobrenome e Telefone
    And Clico em Enviar
    Then Deve retornar sucesso no Envio
   
   Scenario: Preenchimento Sem o Nome
    Given Logado ao Site
    When Preenchimento Sobrenome e Telefone
    And Clico em Enviar
    Then Deve retornar sucesso no Envio


   Scenario: Preenchimento Sem o Sobrenome
    Given Logado ao Site
    When Preencho apenas Nome e Telefone
    And Clico em Enviar
    Then Deve retornar sucesso no Envio

   Scenario: Preenchimento Sem o Telefone
    Given Logado ao Site
    When Preencho apenas Nome e Sobrenome
    And Clico em Enviar
    Then Deve retornar sucesso no Envio
   

   Scenario: Enviar Sem Preencher os Dados
    Given Logado ao Site
    When  Nao Preencho os Dados
    And Clico em Enviar
    Then Deve retornar sucesso no Envio
   

    Scenario: Clicar em Saudacao
    Given Logado ao Site
    When  Clico em Saudacao
    Then Deve retornar sucesso Bom dia
   

    Scenario: Selecionar Cor Azul
    Given Logado ao Site
    When  Selecionar a Cor Azul
    Then  Cor de fundo deve se tornar azul


    Scenario: Selecionar Cor Amarelo
    Given Logado ao Site
    When  Selecionar a Cor Amarelo
    Then  Cor de fundo deve se tornar amarelo

    Scenario: Selecionar Cor Vermelho
    Given Logado ao Site
    When  Selecionar a Cor Vermelho
    Then  Cor de fundo deve se tornar vermelho
      