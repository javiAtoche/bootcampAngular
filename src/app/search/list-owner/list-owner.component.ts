import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Owner } from 'src/app/models/owner';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.scss']
})
export class ListOwnerComponent implements OnInit {
   
  public owners: Array<Owner>;
  // public msgEventOwner:string;

  constructor(private ownerService: OwnerService, private router: Router) { }

  ngOnInit() {
    // debugger
    this.ownerService.getOwners().subscribe(
      data => {this.owners = data; }
    )
  }

  // onSelect(owner: Owner){
  //   this.router.navigate(['/list-owner',owner.id]);
  // }

  

  // ownerSearch(event){
  //   this.msgEventOwner = event.query + ' => ' + event.resultado;
  // }
}
