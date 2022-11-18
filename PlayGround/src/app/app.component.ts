import { Component, Input } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  title = '';
  appValor = '';

  constructor(appService: AppService) {
    appService.getOlaMundo().subscribe((cotacao) => {
      console.log(cotacao)
    })
  }

}
