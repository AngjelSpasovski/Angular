import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() characters;
  @Output() sideAssigned = new EventEmitter<{
    name: string,
    side: string
  }>();

  constructor() { }

  ngOnInit() {
  }

  onSideAssigned(charInfo){
    this.sideAssigned.emit(charInfo);
  }

}
