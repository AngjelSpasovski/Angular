import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'My App';
  gridConfig: object;
  constructor () {
    const data = [
      {name: 'Ted',       surname: 'Smith',       company: 'Electrical Systems',      age: 30},
      {name: 'Ed',        surname: 'Johnson',     company: 'Energy and Oil',          age: 35},
      {name: 'Sam',       surname: 'Williams',    company: 'Airbus',                  age: 38},
      {name: 'Alexander', surname: 'Brown',       company: 'Renault',                 age: 24},
      {name: 'Nicholas',  surname: 'Miller',      company: 'Adobe',                   age: 33},
      {name: 'Andrew',    surname: 'Thompson',    company: 'Google',                  age: 28},
      {name: 'Ryan',      surname: 'Walker',      company: 'Siemens',                 age: 39},
      {name: 'John',      surname: 'Scott',       company: 'Cargo',                   age: 45},
      {name: 'James',     surname: 'Phillips',    company: 'Pro bugs',                age: 30},
      {name: 'Brian',     surname: 'Edwards',     company: 'IT Consultant',           age: 23},
      {name: 'Jack',      surname: 'Richardson',  company: 'Europe IT',               age: 24},
      {name: 'Alex',      surname: 'Howard',      company: 'Cisco',                   age: 27},
      {name: 'Carlos',    surname: 'Wood',        company: 'HP',                      age: 36},
      {name: 'Adrian',    surname: 'Russell',     company: 'Micro Systems',           age: 31},
      {name: 'Jeremy',    surname: 'Hamilton',    company: 'Big Machines',            age: 30},
      {name: 'Ivan',      surname: 'Woods',       company: '',                        age: 24},
      {name: 'Peter',     surname: 'West',        company: 'Adobe',                   age: 26},
      {name: 'Scott',     surname: 'Simpson',     company: 'IBM',                     age: 29},
      {name: 'Lorenzo',   surname: 'Tucker',      company: 'Intel',                   age: 29},
      {name: 'Randy',     surname: 'Grant',       company: 'Bridges',                 age: 30},
      {name: 'Arthur',    surname: 'Gardner',     company: 'Google',                  age: 31},
      {name: 'Orlando',   surname: 'Ruiz',        company: 'Apple',                   age: 32}
    ];

    this.gridConfig = {
      width: 450,
      height: 400,
      selModel: 'rows',
      trackOver: true,
      theme: 'gray',
      data: data,
      defaults: {
        type: 'string',
        sortable: true,
        resizable: true,
        width: 100
      },
      columns: [{
        type: 'select'
      },{
        index: 'company',
        title: 'Company'
      }, {
        index: 'name',
        title: 'Name'
      }, {
        index: 'surname',
        title: 'Sur Name'
      }, {
        index: 'age',
        title: 'Age',
        width: 50,
        type: 'number'
      }]
    };
  }
}