import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

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
