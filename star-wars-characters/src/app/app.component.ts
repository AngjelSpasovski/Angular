import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { random } from 'lodash';
import { StarWarsService } from './star-wars.service';

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  swService: StarWarsService;

  constructor(swService: StarWarsService){
    this.swService = swService;
  }

  ngOnInit(){
        // fetch the data
        this.swService.fetchCharacters();
  }
}
