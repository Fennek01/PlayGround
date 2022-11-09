import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  valor = '';

  @Output()
  valorChange = new EventEmitter();

  fuiAlterado() {
    console.log(this.valor)
    this.valorChange.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
