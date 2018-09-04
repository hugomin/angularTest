import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
    providers: [UserService]
})
export class IndexComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  	const a = this.userService.getStatus();
  	console.log(a)
  }

}

