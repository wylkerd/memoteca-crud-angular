import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o Componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input() Minha propriedade é decorada com @Input() Minha propriedade é decorada com @Input() Minha propriedade é decorada com @Input() Minha propriedade é decorada com @Input() Minha propriedade é decorada com @Input() Minha propriedade é decorada com @Input()',
      autoria: 'Componente grande',
      modelo: 'modelo1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

// Diretivas de componentes: usado com um modelo. Esse tipo de diretiva é a mais comum.

// Ex: <app-listarPensamentos>.

// Diretivas estruturais: altera o layout do DOM adicionando e removendo elementos DOM.

// Ex: NgIf, NgFor. NgSwitch.

// Diretivas de atributos: altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.

// Ex: NgClass, NgStyle.
