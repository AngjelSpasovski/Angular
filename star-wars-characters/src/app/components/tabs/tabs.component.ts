import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [StarWarsService]
})
export class TabsComponent implements OnInit {

  characters = [];

  chosenList = 'all';
  swService: StarWarsService;

  constructor(swService: StarWarsService) { 
    this.swService = swService;
  }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  // Fatch the caracters trough access to the service
  getCharacters(){
    
    this. characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }




}
