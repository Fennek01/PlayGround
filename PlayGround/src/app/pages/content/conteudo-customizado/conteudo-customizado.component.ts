import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: "Custom",
  templateUrl: './conteudo-customizado.component.html',
  styleUrls: ['./conteudo-customizado.component.css']
  
})
export class ConteudoCustomizadoComponent {

  valor = 0;

  abrir() {
    if (this.valor == 0) {
      this.valor = 1;
      return this.valor;
    } else  {
      this.valor = 0;
      return this.valor;
    }
  }

  fechar() {
      this.valor = 1;
      return this.valor;
  }

}