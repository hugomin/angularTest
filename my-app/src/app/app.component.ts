import { Component ,  OnInit } from '@angular/core';
import {UserService} from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'my-app';
    constructor(private userService:UserService) { }

  ngOnInit() {
  	const a = this.userService.getStatus();
  	console.log(a);
  }
  public setNum($event){
  	this.title = $event;
  }
}
