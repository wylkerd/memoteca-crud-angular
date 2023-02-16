import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
// Arquivo denomidado Component (Classe Typescript), onde terá a lógica/comportamento/funcionalidades
@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {

  // Atributos da Classe do Componente
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('Novo Pensamento criado!')
  }

  cancelarPensamento() {
    alert('Pensamento cancelado!')
  }

}
