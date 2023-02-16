import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Service é nada mais que um Repository, que possui lógica do negócio e acessa a base de dados

@Injectable({
  providedIn: 'root' // Significa que este serviço está diponível em toda aplicação por Injeção de Dependencia
})
export class PensamentoService {

  // Injetando HttpClient, e determinado  http como atributo desta Classe
  constructor(private http: HttpClient) { }

}

/*
  - O Objetivo de um serviço é organizar e compartilhar 
  regras de negócios, dados e métodos para diferentes 
  componentes de uma aplicação por meio da injeção de dependência.

  - De forma mais técnica, dependências são serviços, objetos, funções ou até mesmo um 
  valor que uma classe necessita para desempenhar sua função. No nosso exemplo, 
  a classe A pode ela mesma ser responsável por criar uma instância da classe B, ou então, 
  essa dependência pode ser passada para ela, ou melhor dizendo, ser injetada nela. 
  Esse processo recebe o nome de injeção de dependência.

  De acordo com a documentação do Angular, injeção de dependência é um padrão de projeto 
  no qual uma classe solicita dependências de fontes externas ao invés de criá-las.
*/
