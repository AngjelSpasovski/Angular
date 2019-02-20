import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'src/app/star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  
  characters = [];                    // declaration of the empty Array
  activatedRoute: ActivatedRoute;     // asccess to the routs
  swService: StarWarsService;         // access to the service
  loadSide = 'all';                   // store the side of character
  subscription : any;
 
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
    
    // this function is executed whenever the parameter is changed
    this.subscription =  this.swService.characterChanged.subscribe(  () => {
        this.characters = this.swService.getCharacters(this.loadSide);
      }
    );
  }

  // is called when component is destroied
  ngOnDestroy(){
    // remove subscription from memmory
    this.subscription.unsubscribe();
  }
}
