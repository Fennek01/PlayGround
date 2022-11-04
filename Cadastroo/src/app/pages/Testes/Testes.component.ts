import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './Testes.component.html',
  styleUrls: ['./Testes.component.css']
})
export class TestesComponent {

    nome: string;
    nomes: string[] = ['KRISS Vector','FN SCAR','Barrett M82','Franchi SPAS-12','Koch MP7']

    appValor = 'aa';

    fotos: {id: number, arquivo: File}[] = [];

    adicionarFotos(): void {
        this.fotos.push({id:this.fotos.length + 1, arquivo: undefined})
    }

    mostrarFotos() {
        console.log(this.fotos)
    }

    isVector(): boolean    {
            return  this.nome === 'KRISS Vector';
    }

    isScar(): boolean    {
            return this.nome === 'FN SCAR'; 
    }

    isBarret(): boolean    {
        return this.nome === 'Barrett M82'; 
    }

    isSpas(): boolean    {
        return this.nome === 'Franchi SPAS-12'; 
    }

    isKoch(): boolean    {
        return this.nome === 'Koch MP7'; 
    }
    
    escolherCor():string {
        if (this.isVector()){
            return 'red'
        } else if (this.isBarret()) {
            return 'blue'
        } else if (this.isSpas()) {
            return 'green'
        } else if (this.isScar()) {
            return 'yellow'
        } else if (this.isKoch()) {
            return 'orange'
        } 
    }

}