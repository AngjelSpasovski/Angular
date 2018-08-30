import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    {
      name: 'Luke Skywalker',
      side: ''
    },
    {
      name: 'Dart Vader',
      side: ''
    },
    {
      name: 'Anakin Skywalker',
      side: ''
    },
    {
      name: 'Yoda',
      side: ''
    },
    {
      name: 'Rey',
      side: ''
    },
    {
      name: 'Supreme Leader Snoke',
      side: ''},
    {
      name: 'Sheev Palpatine',
      side: ''
    },
    {
      name: 'General Hux',
      side: ''
    },
    {
      name: 'Qui-Gon Jinn',
      side: ''
    }

   ];

  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    if ( this.chosenList === 'all' ) {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
     return char.side === this.chosenList;
    });
  }

  onSideChosen(charInfo){
    const pos = this.characters.findIndex((char)  => {
      return char.name === charInfo.name;
    })

    this.characters[pos].side = charInfo.side;
  }

}
