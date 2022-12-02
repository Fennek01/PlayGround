import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  ngOnInit(): void {
  }

  Enviar() {
    console.log(this.meuParagrafo)
    console.log(this.feedback)
    this.meuParagrafo.nativeElement.style.backgroundColor = this.cor.nativeElement.value
  }

  nome: string;
  img: string;

  cotacao1: Object[] = [];

  @ViewChild('texto')
  meuParagrafo: ElementRef<HTMLParagraphElement>;
  @ViewChild('color')
  cor: ElementRef<HTMLInputElement>;
  @ViewChild('range')
  feedback: ElementRef<HTMLInputElement>;

  constructor(appService: AppService) {
    appService.getOlaMundo().subscribe((cotacao) => {
      this.cotacao1 = cotacao.data;
    })
  }

  analise() {
    this.cotacao1.forEach(carta => {
      console.log(this.nome)
      if (this.nome == carta) {
        this.img = carta["card_images"]["0"]["image_url"]
        console.log(this.img)
      } 
    });
  }

}
