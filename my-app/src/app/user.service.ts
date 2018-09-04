import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public getStatus(){
  	return new Date().getTime();
  }
}
