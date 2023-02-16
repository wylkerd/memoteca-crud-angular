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
