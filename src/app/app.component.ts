import { Component } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Slaughter BootCamp';
  resulprueba: string;

  resultado(event){

    this.resulprueba = event;

  }

}
