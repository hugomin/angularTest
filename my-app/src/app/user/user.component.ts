import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public number:string;
  @Output()  public setNumber = new EventEmitter<string>();
  constructor() { 
  	
  }

  ngOnInit() {
  }

public getNumber() :void{
  	this.setNumber.emit("12")
  }
}
