import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  
  @Input() firstName:string;
  @Input() lastName:string;
  @Input() city:string;
  @Output() ownerEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  
  }

  ownerSearch(){
    
    this.ownerEvent.emit({firstName: this.firstName,
      lastName: this.lastName,
      city: this.city});
  }

}
