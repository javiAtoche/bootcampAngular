import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OwnerService {


  // {"id":1,"firstName":"George","lastName":"Franklin","address":"110 W. Liberty St.","city":"Madison","telephone":"6085551023","pets":[{"id":1,"name":"Leo","birthDate":"2010/09/07","type":{"id":1,"name":"cat"},"owner":1,"visits":[]}]}
  // public owners:any[];
  // public id:Number;
  // public firstName:String;
  // public lastName:String;
  // public address:String;
  // public city:String;
  // public telephone:String;
  // public pets:any[];

  constructor(private httpClient: HttpClient) { }

  getOwners(){
    return this.httpClient.get('http://10.125.124.71:9966/petclinic/api/owners');
  }

}

