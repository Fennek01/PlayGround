import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataBindingComponent } from './data-binding.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassAndStyleBindingComponent } from './class-and-style-binding/class-and-style-binding.component';
import { FormsModule } from '@angular/forms';
import { divisorComponent } from './divisor/divisor.component';
import { DivisorModule } from './divisor/divisor.module';

@NgModule({
  imports: [
    FormsModule,
    DivisorModule,
    CommonModule
  ],
  declarations: [
    DataBindingComponent,
    InterpolacaoComponent,
    PropertyBindingComponent,
    ClassAndStyleBindingComponent
  ]
})
export class DataBindingModule { }
