import { Injectable } from '@angular/core';

// Service é nada mais que um Repository, que possui lógica do negócio e acessa a base de dados

@Injectable({
  providedIn: 'root' // Significa que este serviço está diponível em toda aplicação por Injeção de Dependencia
})
export class PensamentoService {

  constructor() { }
}
