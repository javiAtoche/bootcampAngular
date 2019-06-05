import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit {
   
  public owners;
  public msgEventOwner:string;

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    // debugger
    this.ownerService.getOwners().subscribe(
      data => {this.owners = data; }
    )
  }

  ownerSearch(event){
    this.msgEventOwner = event.query + ' => ' + event.resultado;
  }
}
