import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    // Ao renderizar o componente pela 1º vez
    //Subscrible() para o Observable identificar todas as mudanças, é como um then()
    this.service.listar().subscribe((listasPensamentos) => {
      this.listaPensamentos = listasPensamentos
    })
  }

}

// Diretivas de componentes: usado com um modelo. Esse tipo de diretiva é a mais comum.

// Ex: <app-listarPensamentos>.

// Diretivas estruturais: altera o layout do DOM adicionando e removendo elementos DOM.

// Ex: NgIf, NgFor. NgSwitch.

// Diretivas de atributos: altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.

// Ex: NgClass, NgStyle.
