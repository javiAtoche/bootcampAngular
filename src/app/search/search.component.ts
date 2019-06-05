import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public query: string;
  public result: string;
  public inputContenido: string;
 

  @Input() botonValue:string;
  @Input() placeholder:string;
  @Output() searchEvent = new EventEmitter();

  constructor() {
    this.query = '';
    this.result = '';
   }

  ngOnInit() {
  }

  search(){
    this.result = 'Consulta realizada con query \"'+this.query+'\"';
    this.searchEvent.emit({query: this.query,resultado:this.result});
  }

}
