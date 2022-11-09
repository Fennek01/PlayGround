import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { divisorComponent } from './divisor.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    divisorComponent
  ],
  exports: [
    divisorComponent
  ]
})
export class DivisorModule { }