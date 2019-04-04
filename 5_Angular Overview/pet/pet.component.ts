import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  ngOnInit() {
  }

  petName = 'fucking cat';
  petImage = 'https://i.pinimg.com/originals/75/d5/ce/75d5ce8642d9ff29a00e809f613a9308.jpg';
  constructor() { }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

}
