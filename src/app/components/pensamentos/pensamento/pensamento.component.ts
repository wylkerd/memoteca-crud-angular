import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  // Atributo da Classe
  // Este Decorator indica que esta váriavel pode receber os dados como parâmetro da Classe, através do atributo [pensamento]
  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Wyl',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }

}
