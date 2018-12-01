import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor() { }

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
  }
}
