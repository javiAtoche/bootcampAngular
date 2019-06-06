import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../owner.service';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  
  // @Input() private firstName:string;
  // @Input() private lastName:string;
  // @Input() private city:string;
  // @Output() private ownerEvent = new EventEmitter();

   owner:Owner;
   errorMessage:string;


  constructor(private route: ActivatedRoute,private router: Router,private ownerService: OwnerService) { 
    this.owner = <Owner>{};
  }

  ngOnInit() {
    const ownerId = this.route.snapshot.params['id'];
    this.ownerService.getOwnerById(ownerId).subscribe(
      owner => this.owner = owner,
      error => this.errorMessage = <any> error
    );
  }

  // ownerSearch(){
    
  //   this.ownerEvent.emit({firstName: this.firstName,
  //     lastName: this.lastName,
  //     city: this.city});
  // }

}
