import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from 'src/app/search/owner.service';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.scss']
})
export class FormOwnerComponent implements OnInit {

  owner:Owner;
  
  errorMessage: string;

  constructor(private ownerService: OwnerService) {
    this.owner = {} as Owner;
   }

  ngOnInit() {
  }

  onSubmit(owner: Owner){
    owner.id = null;
    this.ownerService.addOwner(owner).subscribe(
      new_owner => {
        this.owner = new_owner;
        alert('Se ha insertado el Owner correctamente');
      },
      error => this.errorMessage = <any>error
    );
  }
}
