import { Component, OnInit } from '@angular/core';
// Arquivo denomidado Component (Classe Typescript), onde terá a lógica/comportamento/funcionalidades
@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  // Atributos da Classe do Componente
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
