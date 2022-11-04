import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  urlImagem = 'https://cookie-clicker--jacobmcpherson1.repl.co/cookie.png';

  contador = 0;
  style = "style";
  
  click() {
  
    this.contador++;
  
    if (this.contador < 10) {
      this.style="style";
    } else if (this.contador > 9) {
      this.style="style2";
    }
  
     if (this.contador >= 10) {
       this.contador += 10;
      }

      if (this.contador >= 100) {
        this.contador = 0;
      }

    }
}
