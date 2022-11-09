import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestesComponent} from './Testes.component';

@NgModule({
 imports: [
    FormsModule,
    CommonModule
  ],

  declarations: [
    TestesComponent
  ],

  exports: [
    TestesComponent
  ]
})
export class TestesModule {
    
}