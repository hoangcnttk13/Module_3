import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	name: string;
	age: number;
	sex: string;
	email: number;
	output: [string,number,string,number];

	show(){
		return this.output = [this.name, this.age, this.sex, this.email]; 

	}
}
