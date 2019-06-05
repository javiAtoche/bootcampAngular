import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  public owners;
  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    // debugger
    this.ownerService.getOwners().subscribe(
      data => {this.owners = data; }
    )
  }

}
