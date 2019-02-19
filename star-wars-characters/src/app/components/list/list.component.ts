import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'src/app/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // declaration of the empty Array
  characters = [];
  // asccess to the routs
  activatedRoute: ActivatedRoute;
  // access to the service
  swService: StarWarsService;
  // store the side of character
  loadSide = 'all';

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) { 
    // asign the parameters
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    // this function is executed whenever the parameter is changed
    this.activatedRoute.params.subscribe( (params) => {
      // load data
      this.characters = this.swService.getCharacters(params.side);
      this.loadSide = params.side;
    });
    
    this.swService.characterChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadSide);
      }
    );
  }
}
