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
      side: 'light'
    },
    {
      name: 'Dart Vader',
      side: 'dark'
    },
    {
      name: 'Anakin Skywalker',
      side: 'light'
    },
    {
      name: 'Yoda',
      side: 'light'
    },
    {
      name: 'Rey',
      side: 'light'
    },
    {
      name: 'Supreme Leader Snoke',
      side: 'dark'},
    {
      name: 'Sheev Palpatine',
      side: 'dark'
    },
    {
      name: 'General Hux',
      side: 'dark'
    },
    {
      name: 'Qui-Gon Jinn',
      side: 'light'
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

}
