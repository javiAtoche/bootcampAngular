import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public query: string;
  public result: string;

  constructor() {
    this.query = '';
    this.result = '';
   }

  ngOnInit() {
  }

  search(){
    this.result = 'Consulta realizada con query \"'+this.query+'\"';
  }

}
