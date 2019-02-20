import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject, pipe } from 'rxjs';

// map operator
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import { LogService } from './log.service';


@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Dart Vader', side: '' },
    { name: 'Anakin Skywalker', side: '' },
    { name: 'Yoda', side: '' },
    { name: 'Rey', side: '' }
  ];

  private logService: LogService;

  public characterChanged = new Subject<void>();
  public http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }


  fetchCharacters (){
    this.http.get('https://swapi.co/api/people/')
    .map((response: Response) => {
      const data = response.json();
      const extractedCharts = data.results;
      const chars = extractedCharts.map((char) => {
        return {name: char.name, side: ''}
      });
      return chars;
    })
    .subscribe(
      (data : any) => {
        console.log(data);
        this.characters = data;
        this.characterChanged.next();
      }
    );
  }

  // Filtered list of characters of witch side are thay chosen to serve
  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      this.logService.MESSAGE_LOG("The data for '" + chosenList + "' is loaded from the service!", "success");
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      this.logService.MESSAGE_LOG("The data for '" + chosenList + "' is loaded from the service!", "success");
      return char.side === chosenList;
    });
  }


  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })

    this.characters[pos].side = charInfo.side;
    this.characterChanged.next();
    this.logService.MESSAGE_LOG("Changed side for " + charInfo.name + ", new side: " + charInfo.side, "info");
  }

  addCharacter(name, side) {

    const pos = this.characters.findIndex((char) => {
      this.logService.MESSAGE_LOG("Character name: '" + name + "' ", "warning");
      return char.name === name;
    });

    if (pos !== -1) {
      this.logService.MESSAGE_LOG("Character name '" + name + "' already exists!", "error");
      return;
    }

    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
