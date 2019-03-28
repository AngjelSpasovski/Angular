import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title = 'My Fancy Grid';
  
  gridConfig: object;
  
  constructor () {
    
    const data = [
      {id: 1,   name: 'Ted',       surname: 'Smith',       company: 'Electrical Systems',  age: 30,   married: false,  country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 2,   name: 'Ed',        surname: 'Johnson',     company: 'Energy and Oil',      age: 35,   married: true,   country: 'Canada',    position: 'C/C++ Data Developer', weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 3,   name: 'Sam',       surname: 'Williams',    company: 'Airbus',              age: 38,   married: true,   country: 'USA',       position: 'Technical Analyst',    weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42     },
      {id: 4,   name: 'Alexander', surname: 'Krstev',      company: 'Renault',             age: 24,   married: false,  country: 'Macedonia', position: 'CSS3/HTML5 Developer', weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 5,   name: 'Nicholas',  surname: 'Miller',      company: 'Adobe',               age: 33,   married: true,   country: 'USA',       position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 6,   name: 'Andrew',    surname: 'Thompson',    company: 'Google',              age: 28,   married: true,   country: 'USA',       position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 7,   name: 'Ryan',      surname: 'Walker',      company: 'Siemens',             age: 39,   married: true,   country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 8,   name: 'John',      surname: 'Scott',       company: 'Cargo',               age: 45,   married: true,   country: 'USA',       position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 9,   name: 'James',     surname: 'Phillips',    company: 'Pro bugs',            age: 30,   married: false,  country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 10,  name: 'Brian',     surname: 'Edwards',     company: 'IT Consultant',       age: 23,   married: true,   country: 'USA',       position: 'Analytic',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 11,  name: 'Georgi',    surname: 'OdKavadarci', company: 'Europe IT',           age: 24,   married: false,  country: 'Macedonia', position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 12,  name: 'Alex',      surname: 'Howard',      company: 'Cisco',               age: 27,   married: true,   country: 'Canada',    position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 13,  name: 'Carlos',    surname: 'Wood',        company: 'HP',                  age: 36,   married: true,   country: 'USA',       position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 14,  name: 'Adrian',    surname: 'Russell',     company: 'Micro Systems',       age: 31,   married: true,   country: 'Macedonia', position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 15,  name: 'Jeremy',    surname: 'Hamilton',    company: 'Big Machines',        age: 30,   married: true,   country: 'USA',       position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 16,  name: 'Ivan',      surname: 'Woods',       company: '',                    age: 24,   married: true,   country: 'USA',       position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 17,  name: 'Peter',     surname: 'West',        company: 'Adobe',               age: 26,   married: true,   country: 'Canada',    position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 18,  name: 'Scott',     surname: 'Simpson',     company: 'IBM',                 age: 29,   married: false,  country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 19,  name: 'Lorenzo',   surname: 'Tucker',      company: 'Intel',               age: 29,   married: false,  country: 'USA',       position: 'Analytic',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 20,  name: 'Randy',     surname: 'Grant',       company: 'Bridges',             age: 30,   married: true,   country: 'USA',       position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 21,  name: 'Arthur',    surname: 'Gardner',     company: 'Google',              age: 31,   married: true,   country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 22,  name: 'Orlando',   surname: 'Ruiz',        company: 'Apple',               age: 32,   married: false,  country: 'Canada',    position: 'Analytic',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 23,  name: 'Goran',     surname: 'Babakov',     company: 'Apple',               age: 36,   married: false,  country: 'Macedonia', position: 'Ruby Developer',       weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42},
      {id: 24,  name: 'Eli',       surname: 'Mihajloska',  company: 'Apple',               age: 37,   married: true,   country: 'Macedonia', position: 'Flex Developer',       weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42}
    ];


    /***** set input type *****/
    // 'rowdrag'
    // 'select'
    // 'number'
    // 'combo'
    // 'range'    ---> min 20, max 30
    // 'checkbox'

    this.gridConfig = {
      theme: 'gray',
      title: 'Row drag',
      width: 1200,
      height: 400,
      data: {
        items: data
      },
      trackOver: true,
      resizable: true,
      // Search Bar
      tbar: [{
        type: 'search',
        width: 350,
        emptyText: 'Search',
        paramsMenu: true,
        paramsText: 'Parameters'
      }],
      defaults: {
        type: 'string',
        width: 100,
        sortable: true,
        resizable: true,
        editable: true,
        ellipsis: true,
        titleEditable: true
      },
      selModel: 'rows',
      // the all row editable 
      rowEdit: true,
      clicksToEdit: 2,
      
      // Bottom Paging 
      //paging: true,

      // Header and Footer Paging
      paging: {
        barType: 'both',
        pageSize: 20,
        pageSizeData: [5, 10, 20, 50]
      },

      columns: [
      // Left counter
      {type: 'order', locked: true}, 
      // Right counter
      {type: 'order', rightLocked: true},
      // Dragable row
      {type: 'rowdrag'},
      
      {
        index: 'id',
        cls: '',
        title: '<img style="height: 30px;" src="https://fancygrid.com/dashboards/column-header-images/images/kia-soul.png">',
        editable: false,
        width: 80,
        type: 'number'

      },{
        index: 'company',
        title: 'Company',
        width: 150,
        filter: {
          header: true,
          emptyText: 'Search'
        }
      },{
        index: 'name',
        title: 'Name',
        filter: {
          header: true,
          emptyText: 'Search'
        }
      },{
        index: 'surname',
        title: 'Sur Name',
        filter: {
          header: true,
          emptyText: 'Search'
        }
      }, {
        index: 'country',
        title: 'Country',
        type: 'combo',
        // data combination for choosing
        data: ['USA', 'Canada', 'England', 'Macedonia'],
        filter: {
          header: true,
          emptyText: 'Search'
        }
      }, {
        index: 'age',
        title: 'Age',
        type: 'number',
        // clickable number field with up and down arrows
        spin: true,
        width: 70,
        // validation type
        vtype: {
          // cannot be 'empty' or 'not a number'
          before: ['notempty', 'notnan'],
          type: 'range',
          min: 20,
          max: 40
        },
        filter: {
          header: true,
          emptyText: 'Search'
        }
      }, {
        index: 'married',
        title: 'Married',
        type: 'checkbox',
        width: 70,
        filter: {
          header: true,
          emptyText: 'Search'
        }
      }, {
        index: 'married',
        title: 'Married',
        type: 'switcher',
        width: 70,
        filter: {
          header: true,
          emptyText: 'Search'
        }
      }, {
        index: 'position',
        title: 'Position',
        // flex column
        flex: 1,
        filter: {
          header: true,
          emptyText: 'Search'
        }
      }]
    };
    
  }
}