import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  result: string;
  @Input() butonLabel: string;
  @Input() placeHold: string;
  @Output() resultado = new EventEmitter();

  constructor() { 

    this.query = '';

  }

  ngOnInit() {
  }

  search(){

    this.result = 'Consulta realizada con query ' + this.query;
    this.resultado.emit(this.result);

  }

}
