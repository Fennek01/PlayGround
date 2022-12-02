import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: "Custom",
  templateUrl: './conteudo-customizado.component.html',
  styleUrls: ['./conteudo-customizado.component.css']
  
})
export class ConteudoCustomizadoComponent {

  modalPrin = 0;

  abrirPrin() {
    if (this.modalPrin == 1) {
      this.modalPrin = 0;
      return this.modalPrin;
    } else if (this.modalPrin == 0) {
      this.modalPrin = 1;
      return this.modalPrin;
    }
  }

  verificar() {
    if (this.modalPrin == 0) {
      this.modalPrin = 0;
      return this.modalPrin;
    } else if (this.modalPrin == 1) {
      this.modalPrin = 1;
      return this.modalPrin;
    }
  }

  fechar() {
      this.modalPrin = 0;
      return this.modalPrin;
  }

}