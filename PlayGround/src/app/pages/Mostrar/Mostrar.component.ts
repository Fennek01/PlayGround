import { templateJitUrl } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'Mostrar',
  templateUrl: './Mostrar.component.html',
  styleUrls: ['./Mostrar.component.css']
})
export class MostrarComponent  {

    email: string;
    senha: string;
    nome: string;
    cidade: string;
    estado : string;
    bairro: string;
    genero: string;
    idade: string;
    imagem: string;

    craftingTable(){
      const pessoas: Object[] = JSON.parse(localStorage.getItem('pessoas')) || []
      pessoas.push({
        email: this.email,
        senha: this.senha,
        nome: this.nome,
        cidade: this.cidade,
        estado: this.estado,
        bairro: this.bairro,
        genero: this.genero,
        idade: this.idade,
        imagem: this.imagem
      })
      localStorage.setItem('pessoas', JSON.stringify(pessoas))
    }
}
