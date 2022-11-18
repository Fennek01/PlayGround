import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  @ViewChild('texto')
  meuParagrafo: ElementRef<HTMLParagraphElement>;
  @ViewChild('color')
  cor: ElementRef<HTMLInputElement>;
  @ViewChild('range')
  feedback: ElementRef<HTMLInputElement>;

}
