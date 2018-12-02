import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
 
  private characters = [
    { name: 'Luke Skywalker',       side: ''  },
    { name: 'Dart Vader',           side: ''  },
    { name: 'Anakin Skywalker',     side: ''  },
    { name: 'Yoda',                 side: ''  },
    { name: 'Rey',                  side: ''  },
    { name: 'Supreme Leader Snoke', side: ''  },
    { name: 'Sheev Palpatine',      side: ''  },
    { name: 'General Hux',          side: ''  },
    { name: 'Qui-Gon Jinn',         side: ''  }
   ];

  private logService: LogService;
  
  constructor(logService: LogService) { 
    this.logService = logService;
  }



  // Filtered list of characters of witch side are thay chosen to serve
  getCharacters(chosenList) {
    if ( chosenList === 'all' ) {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
     return char.side === chosenList;
    });
  }

  
  onSideChosen(charInfo){
    const pos = this.characters.findIndex((char)  => {
      return char.name === charInfo.name;
    })

    this.characters[pos].side = charInfo.side;
    this.logService.writeLog("Changed side of " + charInfo.name + ", new side: " + charInfo.side);
  }

  addCharacter(name, side){
    const newChar = {name: name, side: side};

    this.characters.push(newChar);
  }
}
