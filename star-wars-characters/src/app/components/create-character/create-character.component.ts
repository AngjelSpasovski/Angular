import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    { display: "None",    value: ""},
    { display: "Light",   value: "light"},
    { display: "Dark",    value: "dark"}

  ];

  constructor() { }

  ngOnInit() {
  }

  // Submitting the form
  onSubmit(submittedForm){
    console.log(submittedForm);
  }

}
