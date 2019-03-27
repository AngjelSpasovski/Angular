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
      {name: 'Ted',       surname: 'Smith',       company: 'Electrical Systems',  age: 30,   married: false,  country: 'England',   position: 'Project Manager'},
      {name: 'Ed',        surname: 'Johnson',     company: 'Energy and Oil',      age: 35,   married: true,   country: 'Canada',    position: 'C/C++ Data Developer'},
      {name: 'Sam',       surname: 'Williams',    company: 'Airbus',              age: 38,   married: true,   country: 'USA',       position: 'Technical Analyst'},
      {name: 'Alexander', surname: 'Krstev',      company: 'Renault',             age: 24,   married: false,  country: 'Macedonia', position: 'CSS3/HTML5 Developer'},
      {name: 'Nicholas',  surname: 'Miller',      company: 'Adobe',               age: 33,   married: true,   country: 'USA',       position: 'Designer'},
      {name: 'Andrew',    surname: 'Thompson',    company: 'Google',              age: 28,   married: true,   country: 'USA',       position: 'Project Manager'},
      {name: 'Ryan',      surname: 'Walker',      company: 'Siemens',             age: 39,   married: true,   country: 'England',   position: 'Project Manager'},
      {name: 'John',      surname: 'Scott',       company: 'Cargo',               age: 45,   married: true,   country: 'USA',       position: 'Designer'},
      {name: 'James',     surname: 'Phillips',    company: 'Pro bugs',            age: 30,   married: false,  country: 'England',   position: 'Project Manager'},
      {name: 'Brian',     surname: 'Edwards',     company: 'IT Consultant',       age: 23,   married: true,   country: 'USA',       position: 'Analytic'},
      {name: 'Georgi',    surname: 'OdKavadarci', company: 'Europe IT',           age: 24,   married: false,  country: 'Macedonia', position: 'Designer'},
      {name: 'Alex',      surname: 'Howard',      company: 'Cisco',               age: 27,   married: true,   country: 'Canada',    position: 'Project Manager'},
      {name: 'Carlos',    surname: 'Wood',        company: 'HP',                  age: 36,   married: true,   country: 'USA',       position: 'Designer'},
      {name: 'Adrian',    surname: 'Russell',     company: 'Micro Systems',       age: 31,   married: true,   country: 'Macedonia', position: 'Project Manager'},
      {name: 'Jeremy',    surname: 'Hamilton',    company: 'Big Machines',        age: 30,   married: true,   country: 'USA',       position: 'Project Manager'},
      {name: 'Ivan',      surname: 'Woods',       company: '',                    age: 24,   married: true,   country: 'USA',       position: 'Project Manager'},
      {name: 'Peter',     surname: 'West',        company: 'Adobe',               age: 26,   married: true,   country: 'Canada',    position: 'Designer'},
      {name: 'Scott',     surname: 'Simpson',     company: 'IBM',                 age: 29,   married: false,  country: 'England',   position: 'Project Manager'},
      {name: 'Lorenzo',   surname: 'Tucker',      company: 'Intel',               age: 29,   married: false,  country: 'USA',       position: 'Analytic'},
      {name: 'Randy',     surname: 'Grant',       company: 'Bridges',             age: 30,   married: true,   country: 'USA',       position: 'Project Manager'},
      {name: 'Arthur',    surname: 'Gardner',     company: 'Google',              age: 31,   married: true,   country: 'England',   position: 'Project Manager'},
      {name: 'Orlando',   surname: 'Ruiz',        company: 'Apple',               age: 32,   married: false,  country: 'Canada',    position: 'Analytic'},
      {name: 'Goran',     surname: 'Babakov',     company: 'Apple',               age: 36,   married: false,  country: 'Macedonia', position: 'Ruby Developer'},
      {name: 'Eli',       surname: 'Mihajloska',  company: 'Apple',               age: 37,   married: true,   country: 'Macedonia', position: 'Flex Developer'}
    ];

    const data2 = [
      {car: 'Kia Sportage', info: 'The Kia Sportage is a compact crossover SUV (compact SUV until 2005) built by the South Korean manufacturer Kia since 1993.'},
      {car: 'Kia Sorento',  info: 'The Kia Sorento is a mid-size crossover SUV (compact SUV until 2009) produced since 2002 by South Korean manufacturer Kia Motors.'}, 
      {car: 'Kia Rio',      info: `The Kia Rio is a subcompact car produced by the South Korean manufacturer Kia since August 2000 and now in its fourth generation.<br> 
                                    Body styles have included a three and five-door hatchback and four-door sedan, equipped with inline-four gasoline and diesel engines, 
                                    and front-wheel drive.<br>The Rio replaced the first-generation Pride—a rebadged version of the Ford Festiva—and the Avella, 
                                    a subcompact sold as a Ford in some markets.<br> A second generation was introduced in 2005 in Europe and 2006 in North America, 
                                    sharing its platform with the Hyundai Accent, a subcompact manufactured by its sister Hyundai Motor Company in South Korea.`}, 
      {car: 'Kia Soul',     info: `The Kia Soul is a front-engine, front-wheel-drive, five-door subcompact crossover SUC (Mini MPV) manufactured and marketed worldwide 
                                    by Kia and now in its second generation.<br>Designed at Kia\'s design center in California, the Soul debuted at the 2008 Paris Motor 
                                    Show and is manufactured in South Korea.<br> Since 2014, Kia has marketed an electric variant as the Soul EV in North and Central America 
                                    as well as Europe.`
      }
    ]

    this.gridConfig = {
      theme: 'gray',
      title: 'Row drag',
      width: 1200,
      height: 400,
      data: data,


      trackOver: true,
      resizable: true,

      defaults: {
        type: 'string',
        width: 100,

        sortable: true,
        resizable: true,
        editable: true,
        ellipsis: true
      },
      
      selModel: 'rows',

      // the all row editable 
      rowEdit: true,
      // clicks on row to make it editable
      clicksToEdit: 2,


      columns: [{
        // Generating id row
        index: 'id',
        title: 'ID',
        
        // editable field true / false
        editable: false,
        
        // field width
        width: 40,
        
        /***** set input type *****/
        // 'rowdrag'
        // 'select'
        // 'number'
        // 'combo'
        // 'range'    ---> min 20, max 30
        // 'checkbox'
        type: 'number'
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
      },{
        index: 'country',
        title: 'Country',
        type: 'combo',
        // data combination for choosing
        data: ['USA', 'Canada', 'England', 'Macedonia']
      }, {
        index: 'age',
        title: 'Age',
        type: 'number',
        // clickable number field with up and down arrows
        spin: true,
        width: 60,
        // validation type
        vtype: {
          // cannot be 'empty' or 'not a number'
          before: ['notempty', 'notnan'],
          type: 'range',
          min: 20,
          max: 40
        }
      }, {
        index: 'married',
        title: 'Married',
        type: 'checkbox',
        width: 60
      },{
        index: 'married',
        title: 'Married',
        type: 'switcher',
        width: 60
      }, {
        index: 'position',
        title: 'Position'
      }]
    };
  }
}