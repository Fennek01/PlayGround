import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'JogoVelha',
  templateUrl: './JogoVelha.component.html',
  styleUrls: ['./JogoVelha.component.css']
})
export class JogoVelhaComponent  {
  
  origin = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEUtMULJYM9nAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==";
  orange = "https://i.pinimg.com/originals/6a/f9/5b/6af95b7b055d530b5413dbb91bb15cf3.png";
  cyan = "https://i.pinimg.com/originals/c7/8f/9c/c78f9c888554a3633e0fcba4f8201027.png";

  imagens :Object[] = ["","","","","","","","",""];
  valor = 0;

  

  line1() {
    for(let i = 0; i < this.imagens.length; i++) {
    if (this.imagens[i] == this.cyan || this.imagens[i] == this.orange) {
      
    } else if (this.valor % 2 == 0) {
      this.imagens[i] = this.orange
        this.valor++;
    } else {
      this.imagens[i] = this.cyan
      this.valor++;
      }
    }
  }

}
