import { Component } from '@angular/core';
import * as $ from 'jquery';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title = 'My Fancy Grid';
  
  gridConfig_Light: object;
  gridConfig_Dark: object;
  gridGrouping: object;
  gridTree: object;
  gridTreeFolder: object;
  gridGroupingColapse: object;
  gridHBar: object;
  gridHbarStacked: object;
  gridTrackOverSelection: object;
  gridFooter: object;
  
  constructor () {
    
    let data = [
      {id: 1,   name: 'Ted',       surname: 'Smith',       company: 'Electrical Systems',  age: 30,   married: false,  country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/UK.png',        online: 17.9,   birthday: "1967.09.17"},
      {id: 2,   name: 'Ed',        surname: 'Johnson',     company: 'Energy and Oil',      age: 35,   married: true,   country: 'Canada',    position: 'C/C++ Data Developer', weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Canada.png',    online: 17.5,   birthday: "1967.09.17"},
      {id: 3,   name: 'Sam',       surname: 'Williams',    company: 'Airbus',              age: 38,   married: true,   country: 'USA',       position: 'Technical Analyst',    weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/USA.png',       online: 17.9,   birthday: "1967.09.17"},
      {id: 4,   name: 'Alexander', surname: 'Krstev',      company: 'Renault',             age: 24,   married: false,  country: 'Macedonia', position: 'CSS3/HTML5 Developer', weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Colombia.png',  online: 12.9,   birthday: "1967.09.17"},
      {id: 5,   name: 'Nicholas',  surname: 'Miller',      company: 'Adobe',               age: 33,   married: true,   country: 'USA',       position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/USA.png',       online: 11.9,   birthday: "1967.09.17"},
      {id: 6,   name: 'Andrew',    surname: 'Thompson',    company: 'Google',              age: 28,   married: true,   country: 'USA',       position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/USA.png',       online: 15.9,   birthday: "1967.09.17"},
      {id: 7,   name: 'Ryan',      surname: 'Walker',      company: 'Siemens',             age: 39,   married: true,   country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/UK.png',        online: 12.9,   birthday: "1967.09.17"},
      {id: 8,   name: 'John',      surname: 'Scott',       company: 'Cargo',               age: 45,   married: true,   country: 'USA',       position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/USA.png',       online: 11.9,   birthday: "1967.09.17"},
      {id: 9,   name: 'James',     surname: 'Phillips',    company: 'Pro bugs',            age: 30,   married: false,  country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/UK.png',        online: 3.9,    birthday: "1967.09.17"},
      {id: 10,  name: 'Brian',     surname: 'Edwards',     company: 'IT Consultant',       age: 23,   married: true,   country: 'USA',       position: 'Analytic',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',     online: 6.9,    birthday: "1967.09.17"},
      {id: 11,  name: 'Georgi',    surname: 'OdKavadarci', company: 'Europe IT',           age: 24,   married: false,  country: 'Macedonia', position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Colombia.png',  online: 0.9,    birthday: "1967.09.17"},
      {id: 12,  name: 'Alex',      surname: 'Howard',      company: 'Cisco',               age: 27,   married: true,   country: 'Canada',    position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',     online: 9.9,    birthday: "1967.09.17"},
      {id: 13,  name: 'Carlos',    surname: 'Wood',        company: 'HP',                  age: 36,   married: true,   country: 'USA',       position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Colombia.png',  online: 1.9,    birthday: "1967.09.17"},
      {id: 14,  name: 'Adrian',    surname: 'Russell',     company: 'Micro Systems',       age: 31,   married: true,   country: 'Macedonia', position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',     online: 5.9,    birthday: "1967.09.17"},
      {id: 15,  name: 'Jeremy',    surname: 'Hamilton',    company: 'Big Machines',        age: 30,   married: true,   country: 'USA',       position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',     online: 9.9,    birthday: "1967.09.17"},
      {id: 16,  name: 'Ivan',      surname: 'Woods',       company: '',                    age: 24,   married: true,   country: 'USA',       position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Sweden.png',    online: 2.9,    birthday: "1967.09.17"},
      {id: 17,  name: 'Peter',     surname: 'West',        company: 'Adobe',               age: 26,   married: true,   country: 'Canada',    position: 'Designer',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',     online: 8.9,    birthday: "1967.09.17"},
      {id: 18,  name: 'Scott',     surname: 'Simpson',     company: 'IBM',                 age: 29,   married: false,  country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',     online: 6.9,    birthday: "1967.09.17"},
      {id: 19,  name: 'Lorenzo',   surname: 'Tucker',      company: 'Intel',               age: 29,   married: false,  country: 'USA',       position: 'Analytic',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Canada.png',    online: 6.9,    birthday: "1967.09.17"},
      {id: 20,  name: 'Randy',     surname: 'Grant',       company: 'Bridges',             age: 30,   married: true,   country: 'USA',       position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',     online: 1.9,    birthday: "1967.09.17"},
      {id: 19,  name: 'Lorenzo',   surname: 'Tucker',      company: 'Intel',               age: 29,   married: false,  country: 'USA',       position: 'Analytic',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Canada.png',    online: 6.9,    birthday: "1967.09.17"},
      {id: 21,  name: 'Arthur',    surname: 'Gardner',     company: 'Google',              age: 31,   married: true,   country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',     online: 6.9,    birthday: "1967.09.17"},
      {id: 22,  name: 'Orlando',   surname: 'Ruiz',        company: 'Apple',               age: 32,   married: false,  country: 'Canada',    position: 'Analytic',             weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',     online: 0.9,    birthday: "1967.09.17"},
      {id: 23,  name: 'Goran',     surname: 'Babakov',     company: 'Apple',               age: 36,   married: false,  country: 'Macedonia', position: 'Ruby Developer',       weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Australia.png', online: 3.9,    birthday: "1967.09.17"},
      {id: 24,  name: 'Eli',       surname: 'Mihajloska',  company: 'Apple',               age: 37,   married: true,   country: 'Macedonia', position: 'Flex Developer',       weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42,   flag: 'http://fancygrid.com/dashboards/iots/img/Australia.png', online: 4.9,    birthday: "1967.09.17"}
    ];

    let dataGrouping = [
      {model: 'Sorento Prime',  fullName: 'KIA Sorento Prime Prestige 2.2 L 6AT', color: '#4d382d',   colorName: '(MY3) Imperial Bronze',   price: 37500, count: 1}, 
      {model: 'Picanto',        fullName: 'KIA Picanto 1.2 L 4AT',                color: '#860b0b',   colorName: '(BEG) Signal Red',        price: 13000, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Classic 1.4 L 6MT",          color: '#393D43',   colorName: '(E5B) Dark Gun Metal',    price: 12500, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Classic 1.4 L 6MT",          color: 'white',     colorName: '(HW2) Deluxe White',      price: 12500, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Classic 1.6 L 6MT",          color: '#D9D9D9',   colorName: '(9S) Machine Silver',     price: 13400, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Classic 1.6 L 6MT",          color: '#B4B6A6',   colorName: '(AA3) Sirius Silver',     price: 13400, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Classic 1.6 L 6MT",          color: '#393D43',   colorName: '(E5B) Dark Gun Metal',    price: 13700, count: 1},  
      
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6MT',               color: '#9d927e',   colorName: 'Sirius Silver (AA3)',     price: 19000, count: 1}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6MT',               color: '#e0e0e0',   colorName: 'Deluxe White (HW2)',      price: 19000, count: 3}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6MT',               color: '#726157',   colorName: 'Sand Track (D5U)',        price: 19000, count: 1}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6AT',               color: '#9d927e',   colorName: 'Sirius Silver (AA3)',     price: 19000, count: 1}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6AT',               color: '#e0e0e0',   colorName: 'Deluxe White (HW2)',      price: 19000, count: 2}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6AT',               color: '#e0e0e0',   colorName: 'Deluxe White (HW2)',      price: 20000, count: 1}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6AT',               color: '#d4d4d4',   colorName: 'Casa White (WD)',         price: 20000, count: 2}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6AT',               color: '#9d927e',   colorName: 'Sirius Silver (AA3)',     price: 20000, count: 1}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6AT',               color: '#e0e0e0',   colorName: 'Deluxe White (HW2)',      price: 21000, count: 6}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6AT',               color: '#d4d4d4',   colorName: 'Casa White (WD)',         price: 21000, count: 1},
  
      {model: 'Sorento',        fullName: 'KIA Sorento 2.4 L 6AT',                color: '#e1e1e1',   colorName: '(SWP) Snow Pearl White',  price: 28000, count: 2}, 
      {model: 'Sorento',        fullName: 'KIA Sorento 2.2 L 6AT',                color: '#e1e1e1',   colorName: '(SWP) Snow Pearl White',  price: 29000, count: 1},
  
      {model: 'Sorento Prime',  fullName: 'KIA Sorento Prime Prestige 2.2 L 6AT', color: '#474a52',   colorName: '(ABT) Platinum Graphite', price: 37500, count: 1},
  
      {model: 'Picanto',        fullName: 'KIA Picanto 1.2 L 4AT',                color: '#ffffff',   colorName: '(UD) Clear White',        price: 12200, count: 1}, 
      
      {model: "cee'd",          fullName: "KIA cee'd Classic 1.6 L 6MT",          color: '#B4B6A6',   colorName: '(AA3) Sirius Silver',     price: 13700, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Comfort 1.6 L 6AT",          color: '#D9D9D9',   colorName: '(9S) Machine Silver',     price: 14400, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Comfort 1.6 L 6AT",          color: '#393D43',   colorName: '(E5B) Dark Gun Metal',    price: 14400, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Comfort 1.6 L 6AT",          color: 'white',     colorName: '(HW2) Deluxe White',      price: 14400, count: 3}, 
      {model: "cee'd",          fullName: "KIA cee'd Comfort 1.6 L 6AT",          color: '#B4B6A6',   colorName: '(AA3) Sirius Silver',     price: 14400, count: 2}, 
      {model: "cee'd",          fullName: "KIA cee'd Luxe 1.6 L 6AT",             color: '#D9D9D9',   colorName: '(9S) Machine Silver',     price: 15000, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Luxe 1.6 L 6AT",             color: '#D9D9D9',   colorName: '(9S) Machine Silver',     price: 15000, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Luxe 1.6 L 6AT",             color: 'white',     colorName: '(HW2) Deluxe White',      price: 15000, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Luxe 1.6 L 6AT",             color: '#B4B6A6',   colorName: '(AA3) Sirius Silver',     price: 15000, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Luxe 1.6 L 6AT",             color: '#686156',   colorName: '(D5U) Sand Track',        price: 15000, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Prestige 1.6 L 6AT",         color: 'white',     colorName: '(HW2) Deluxe White',      price: 17000, count: 1}
  ];

    let dataTree = [
      
      {name: 'North America', type: 'Territory',  expanded: true,  
        child: [
          {name: 'USA', type: 'Country',    population: 325365189,  
            child: [
              {type: 'City',  name: 'New York',   population: 8175133,  leaf: true}, 
              {type: 'City',  name: 'Washington', population: 681170,   leaf: true}
            ]
          }, 
          {name: 'Canada',  type: 'Country',  population: 35151728,
            child: [
              {type: 'City',  name: 'Ottawa',   population: 934243,   leaf: true}, 
              {type: 'City',  name: 'Toronto',  population: 2731571,  leaf: true}
            ]
          }, 
          {name: 'Mexico',  type: 'Country',  population: 123675325,
            child: [
              {type: 'City',population: 8918653,leaf: true,name: 'Mexico'}
            ]
          }
        ]
      },

      {name: 'South America', type: 'Territory',  expanded: true,
        child: [
          {name: 'Brazil',  type: 'Country',  population: 208385000,
            child: [
              {name: 'Brasilia',  type: 'City', population: 2977216,  leaf: true}, 
              {name: 'Sao Paulo', type: 'City', population: 12038175, leaf: true}
            ]
          }, 
          {name: 'Argentina', type: 'Country', population: 43847430,
            child: [
              {name: 'Buenos Aires',type: 'City',population: 2890151, leaf: true}
            ]
          }, 
          {name: 'Chile', type: 'Country',  population: 18006407,
            child: [
              {name: 'Santiago',  type: 'City', population: 7314176,  leaf: true}
            ]
          }
        ]
      }, 
      
      {name: 'Europe',  type: 'Territory',  expanded: true,
        child: [
          {name: 'UK',  population: 65648000, type: 'Country',
            child: [
              {type: 'City',  leaf: true, population: 8787892,  name: 'London'}
            ]
          }, 
          {name: 'Germany', population: 82349400, type: 'Country',
            child: [
              {name: 'Berlin',  population: 3671000,  type: 'City', leaf: true}
            ]
          }, 
          {name: 'France',population: 67158000,type: 'Country',
            child: [
              {name: 'Paris', population: 2229621,  type: 'City', leaf: true}
            ]
          }, 
          {name: 'Spain', population: 46354321, type: 'Country',
            child: [
              {name: 'Madrid',  population: 3141991,  type: 'City', leaf: true}
            ]
          }
        ]
      }
    ];

    let dataTreeFolder = [
      {name: 'KIA', type: 'root', expanded: true,
        child: [
          {name: 'Sedan',    type: 'type', expanded: true,
            child: [
              {name: 'Smart Compact Morning', leaf: true,   img: 'imgs/new-morning.png',            price: 9890},
              {name: 'New Ray',               leaf: true,   img: 'imgs/ray.png',                    price: 11150},
              {name: 'K3',                    leaf: true,   img: 'imgs/k3.png',                     price: 14250},
              {name: 'K5',                    leaf: true,   img: 'imgs/newk5.png',                  price: 20900},
              {name: 'K7',                    leaf: true,   img: 'imgs/k7.png',                     price: 28600},
              {name: 'Stinger',               leaf: true,   img: 'imgs/stinger.png',                price: 32300},
              {name: 'K9',                    leaf: true,   img: 'imgs/k9.png',                     price: 47000}
            ]
          },

          {name: 'ECO',         type: 'type',
            child: [
              {name: 'Niro',                    leaf: true,   img: 'imgs/niro.png',                  price: 21700},
              {name: 'Niro Phev',               leaf: true,   img: 'imgs/niro-phev.png',             price: 30500},
              {name: 'Soul Ev',                 leaf: true,   img: 'imgs/soul_ev.png',               price: 39400},
              {name: 'K5 plug-in Hybrid',       leaf: true,   img: 'imgs/k5_hybrid.png',             price: 36500},
              {name: 'K5 Hybrid',               leaf: true,   img: 'imgs/k5phev.png',                price: 26500},
              {name: 'K7 Hybrid',               leaf: true,   img: 'imgs/k7_hybrid.png',             price: 33000}
            ]
          },

          {name: 'SUV',         type: 'type',
            child: [
              {name: 'Stonic',                  leaf: true,   img: 'imgs/stonic.png',                 price: 16000},
              {name: 'Niro',                    leaf: true,   img: 'imgs/niro-phev.png',              price: 21700},
              {name: 'New Soul',                leaf: true,   img: 'imgs/soul.png',                   price: 16100},
              {name: 'New Carens',              leaf: true,   img: 'imgs/new_carens.png',             price: 18500},
              {name: 'Sportage',                leaf: true,   img: 'imgs/sportageql.png',             price: 19500},
              {name: 'New Sorento',             leaf: true,   img: 'imgs/sorento.png',                price: 25700},
              {name: 'Mohave',                  leaf: true,   img: 'imgs/mohave.png',                 price: 37900},
              {name: 'Carnival',                leaf: true,   img: 'imgs/new_carnival.png',           price: 25400},
              {name: 'Carnival HI-LIMOUSINE',   leaf: true,   img: 'imgs/carnival_hi_limousine.png',  price: 39300},
              {name: 'Carnival OUTDOOR',        leaf: true,   img: 'imgs/carnival_outdoor.png',       price: 35900}
            ]
          },
          {name: 'Commercial',  type: 'type',
            child: [
              {name: 'K5 Taxi',                 leaf: true,   img: 'imgs/newk5_taxi.png',             price: 15300},
              {name: 'K7 Taxi',                 leaf: true,   img: 'imgs/k7_taxi.png',                price: 23000},
              {name: 'New GrandBird',           leaf: true,   img: 'imgs/new_granbird.png',           price: 145000},
              {name: 'Bongo 3',                 leaf: true,   img: 'imgs/truck.png',                  price: 14000},
              {name: 'Bongo 3 FrozenTapcha',    leaf: true,   img: 'imgs/top_car.png',                price: 18300},
              {name: 'Bongo 3 GeneralTruck',    leaf: true,   img: 'imgs/construct_sung.png',         price: 18900},
              {name: 'Bongo 3 PowerGate',       leaf: true,   img: 'imgs/construc.png',               price: 16900},
              {name: 'Bongo 3 Homelori',        leaf: true,   img: 'imgs/transport.png',              price: 28000}
            ]
          }
        ]
      }
    ];

    let dataGroupingColapse = [
      {model: 'Sorento Prime',  fullName: 'KIA Sorento Prime Prestige 2.2 L 6AT', color: '#4d382d', colorName: '(MY3) Imperial Bronze',   price: 37500, count: 1}, 
      {model: 'Picanto',        fullName: 'KIA Picanto 1.2 L 4AT',                color: '#860b0b', colorName: '(BEG) Signal Red',        price: 13000, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Classic 1.4 L 6MT",          color: '#393D43', colorName: '(E5B) Dark Gun Metal',    price: 12500, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Classic 1.4 L 6MT",          color: 'white',   colorName: '(HW2) Deluxe White',      price: 12500, count: 1}, 
    
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6MT',               color: '#9d927e', colorName: 'Sirius Silver (AA3)',     price: 19000, count: 1}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6MT',               color: '#e0e0e0', colorName: 'Deluxe White (HW2)',      price: 19000, count: 3}, 
      {model: 'Sportage',       fullName: 'KIA Sportage 2.0 L 6MT',               color: '#726157', colorName: 'Sand Track (D5U)',        price: 19000, count: 1}, 
    
      {model: 'Sorento',        fullName: 'KIA Sorento 2.4 L 6AT',                color: '#e1e1e1', colorName: '(SWP) Snow Pearl White',  price: 28000, count: 2}, 
      {model: 'Sorento',        fullName: 'KIA Sorento 2.2 L 6AT',                color: '#e1e1e1', colorName: '(SWP) Snow Pearl White',  price: 29000, count: 1},
    
      {model: 'Sorento Prime',  fullName: 'KIA Sorento Prime Prestige 2.2 L 6AT', color: '#474a52', colorName: '(ABT) Platinum Graphite', price: 37500, count: 1},
    
      {model: 'Picanto',        fullName: 'KIA Picanto 1.2 L 4AT',                color: '#ffffff', colorName: '(UD) Clear White',        price: 12200, count: 1}, 
      
      {model: "cee'd",          fullName: "KIA cee'd Classic 1.6 L 6MT",          color: '#B4B6A6', colorName: '(AA3) Sirius Silver',     price: 13700, count: 1}, 
      {model: "cee'd",          fullName: "KIA cee'd Comfort 1.6 L 6AT",          color: 'white',   colorName: '(HW2) Deluxe White',      price: 14400, count: 3}, 
      {model: "cee'd",          fullName: "KIA cee'd Comfort 1.6 L 6AT",          color: '#B4B6A6', colorName: '(AA3) Sirius Silver',     price: 14400, count: 2}
    ]

    let dataHBar = [
      {year: 2006,  toyota: 6800228,  gm: 5779719,  vw: 5429896,  ford: 3956708,  hyundai: 2003608}, 
      {year: 2007,  toyota: 7211474,  gm: 6259520,  vw: 5964004,  ford: 3565626,  hyundai: 2292075}, 
      {year: 2008,  toyota: 7768633,  gm: 6015257,  vw: 6110115,  ford: 3346561,  hyundai: 2435471}, 
      {year: 2009,  toyota: 6148794,  gm: 4997824,  vw: 5902583,  ford: 2952026,  hyundai: 4222532}, 
      {year: 2010,  toyota: 7267535,  gm: 6266959,  vw: 7120532,  ford: 2958507,  hyundai: 5247339}, 
      {year: 2011,  toyota: 6793714,  gm: 6494385,  vw: 8157058,  ford: 3093893,  hyundai: 6118221}, 
      {year: 2012,  toyota: 8381968,  gm: 6608567,  vw: 8576964,  ford: 3123340,  hyundai: 6761074}, 
      {year: 2013,  toyota: 8565176,  gm: 6733192,  vw: 9259506,  ford: 3317048,  hyundai: 6909194}, 
      {year: 2014,  toyota: 10230000, gm: 9920000,  vw: 10140000, ford: 6320000,  hyundai: 7710000}
    ];

    let dataHbarStacked = [
      {country: 'Venezuela',    0: 28,  1: 100,  2: 100},
      {country: 'Turkey',       0: 78,  1: 80,   2: 61},
      {country: 'Ukraine',      0: 70,  1: 0,    2: 100},
      {country: 'Indonesia',    0: 65,  1: 67,   2: 28},
      {country: 'Algeria',      0: 72,  1: 65,   2: 0},
      {country: 'Mexico',       0: 60,  1: 46,   2: 27},
      {country: 'Colombia',     0: 75,  1: 38,   2: 21},
      {country: 'Peru',         0: 70,  1: 50,   2: 6},
      {country: 'Brazil',       0: 69,  1: 40,   2: 13},
      {country: 'Russia',       0: 35,  1: 65,   2: 16},
      {country: 'Argentina',    0: 54,  1: 20,   2: 41},
      {country: 'South Africa', 0: 77,  1: 0,    2: 26},
      {country: 'Romania',      0: 52,  1: 0,    2: 43},
      {country: 'Chile',        0: 56,  1: 17,   2: 23},
      {country: 'Poland',       0: 56,  1: 1,    2: 38},
      {country: 'Egypt',        0: 54,  1: 0,    2: 32},
      {country: 'Philippines',  0: 28,  1: 48,   2: 9},
      {country: 'Pakistan',     0: 56,  1: 0,    2: 27},
      {country: 'Malaysia',     0: 27,  1: 25,   2: 25},
      {country: 'Thailand',     0: 31,  1: 28,   2: 17},
      {country: 'China',        0: 40,  1: 30,   2: 4},
      {country: 'India',        0: 57,  1: 2,    2: 15},
      {country: 'Hungary',      0: 29,  1: 0,    2: 40},
      {country: 'Bangladesh',   0: 50,  1: 0,    2: 5},
      {country: 'Vietnam',      0: 23,  1: 0,    2: 18}
    ];
    
    let dataTrackOverSelection = [
      {
        id: 1,
        name: 'Ted',
        surname: 'Smith',
        position: 'Java Developer',
        email: 'ted.smith@gmail.com',
        company: 'Electrical Systems',
        age: 30,
        knownledge: 'Java, Ruby'
      }, {
        id: 2,
        name: 'Ed',
        surname: 'Johnson',
        position: 'C/C++ Market Data Developer',
        email: 'ed.johnson@gmail.com',
        company: 'Energy and Oil',
        age: 35,
        knownledge: 'C++'
      }, {
        id: 3,
        name: 'Sam',
        surname: 'Williams',
        position: 'Technical Analyst',
        email: 'sam.williams@gmail.com',
        company: 'Airbus',
        age: 38,
        knownledge: ''
      }, {
        id: 4,
        name: 'Alexander',
        surname: 'Brown',
        position: 'Project Manager',
        email: 'alexander.brown@gmail.com',
        company: 'Renault',
        age: 24,
        knownledge: ''
      }, {
        id: 5,
        name: 'Nicholas',
        surname: 'Miller',
        position: 'Senior Software Engineer',
        email: 'nicholas.miller@gmail.com',
        company: 'Adobe',
        age: 33,
        knownledge: 'Unix, C/C++'
      }, {
        id: 6,
        name: 'Andrew',
        surname: 'Thompson',
        position: 'Agile Project Manager',
        email: 'andrew.thompson@gmail.com',
        company: 'Google',
        age: 28,
        knownledge: ''
      }, {
        id: 7,
        name: 'Ryan',
        surname: 'Walker',
        position: 'Application Support Engineer',
        email: 'ryan.walker@gmail.com',
        company: 'Siemens',
        age: 39,
        knownledge: 'ActionScript'
      }, {
        id: 8,
        name: 'John',
        surname: 'Scott',
        position: 'Flex Developer',
        email: 'john.scott@gmail.com',
        company: 'Cargo',
        age: 45,
        knownledge: 'Flex'
      }, {
        id: 9,
        name: 'James',
        surname: 'Phillips',
        position: 'Senior C++/C# Developer',
        email: 'james.phillips@gmail.com',
        company: 'Pro bugs',
        age: 30,
        knownledge: 'C/C++, Unix'
      }, {
        id: 10,
        name: 'Brian',
        surname: 'Edwards',
        position: 'UNIX/C++ Developer',
        email: 'brian.edwards@gmail.com',
        company: 'IT Consultant',
        age: 23,
        knownledge: 'C/C++ Unix'
      }, {
        id: 11,
        name: 'Jack',
        surname: 'Richardson',
        position: 'Ruby Developer',
        email: 'jack.richardson@gmail.com',
        company: 'Europe IT',
        age: 24,
        knownledge: 'Ruby'
      }, {
        id: 12,
        name: 'Alex',
        surname: 'Howard',
        position: 'CSS3/HTML5 Developer',
        email: 'alex.howard@gmail.com',
        company: 'Cisco',
        age: 27,
        knownledge: 'CSS3/HTML5'
      }, {
        id: 13,
        name: 'Carlos',
        surname: 'Wood',
        position: 'Node.js Developer',
        email: 'carlos.wood@gmail.com',
        company: 'HP',
        age: 36,
        knownledge: 'Node.js'
      }, {
        id: 14,
        name: 'Adrian',
        surname: 'Russell',
        position: 'Frontend Developer',
        email: 'adrian.russell@gmail.com',
        company: 'Micro Systems',
        age: 31,
        knownledge: 'HTML, JavaScript'
      }, {
        id: 15,
        name: 'Jeremy',
        surname: 'Hamilton',
        position: 'Scala Developer',
        email: 'jeremy.hamilton@gmail.com',
        company: 'Big Machines',
        age: 30,
        knownledge: 'Scala'
      }, {
        id: 16,
        name: 'Ivan',
        surname: 'Woods',
        position: 'Objective C Developer',
        email: 'ivan.woods@gmail.com',
        company: '',
        age: 24,
        knownledge: 'Objective C'
      }, {
        id: 17,
        name: 'Peter',
        surname: 'West',
        position: 'PHP/HTML Developer',
        email: 'peters.west@gmail.com',
        company: 'Adobe',
        age: 26,
        knownledge: 'PHP/HTML'
      }, {
        id: 18,
        name: 'Scott',
        surname: 'Simpson',
        position: 'Designer',
        email: 'scott.simpson@gmail.com',
        company: 'IBM',
        age: 29,
        knownledge: 'Adobe PhotoShop'
      }, {
        id: 19,
        name: 'Lorenzo',
        surname: 'Tucker',
        position: 'Architect',
        email: 'lorenzo.tucker@gmail.com',
        company: 'Intel',
        age: 29,
        knownledge: ''
      }, {
        id: 20,
        name: 'Randy',
        surname: 'Grant',
        position: 'Engineer',
        email: 'randy.grant@gmail.com',
        company: 'Bridges',
        age: 30,
        knownledge: ''
      }, {
        id: 21,
        name: 'Arthur',
        surname: 'Gardner',
        position: 'Analytic',
        email: 'arthur.gardner@gmail.com',
        company: 'Google',
        age: 31,
        knownledge: ''
      }, {
        id: 22,
        name: 'Orlando',
        surname: 'Ruiz',
        position: 'Unit Testing Developer',
        email: 'orlando.ruiz@gmail.com',
        company: 'Apple',
        age: 32,
        knownledge: ''
      }
    ]

    let dataFooter = [
      {rank: 1,   flag: 'http://fancygrid.com/dashboards/iots/img/SouthKorea.png',  country: 'South Korea',     online: 37.9}, 
      {rank: 2,   flag: 'http://fancygrid.com/dashboards/iots/img/Denmark.png',     country: 'Denmark',         online: 32.7}, 
      {rank: 3,   flag: 'http://fancygrid.com/dashboards/iots/img/Switzerland.png', country: 'Switzerland',     online: 29.0}, 
      {rank: 4,   flag: 'http://fancygrid.com/dashboards/iots/img/USA.png',         country: 'United States',   online: 24.9}, 
      {rank: 5,   flag: 'http://fancygrid.com/dashboards/iots/img/Netherlands.png', country: 'Netherlands',     online: 24.7}, 
      {rank: 6,   flag: 'http://fancygrid.com/dashboards/iots/img/Germany.png',     country: 'Germany',         online: 22.4}, 
      {rank: 7,   flag: 'http://fancygrid.com/dashboards/iots/img/Sweden.png',      country: 'Sweden',          online: 21.9}, 
      {rank: 8,   flag: 'http://fancygrid.com/dashboards/iots/img/Spain.png',       country: 'Spain',           online: 19.9}, 
      {rank: 9,   flag: 'http://fancygrid.com/dashboards/iots/img/France.png',      country: 'France',          online: 17.6}, 
      {rank: 10,  flag: 'http://fancygrid.com/dashboards/iots/img/Portugal.png',    country: 'Portugal',        online: 16.2}, 
      {rank: 11,  flag: 'http://fancygrid.com/dashboards/iots/img/Belgium.png',     country: 'Belgium',         online: 15.6}, 
      {rank: 12,  flag: 'http://fancygrid.com/dashboards/iots/img/UK.png',          country: 'United Kingdom',  online: 13.0}, 
      {rank: 13,  flag: 'http://fancygrid.com/dashboards/iots/img/Canada.png',      country: 'Canada',          online: 11.6}, 
      {rank: 14,  flag: 'http://fancygrid.com/dashboards/iots/img/Italy.png',       country: 'Italy',           online: 10.2}, 
      {rank: 15,  flag: 'http://fancygrid.com/dashboards/iots/img/Brazil.png',      country: 'Brazil',          online: 9.2}, 
      {rank: 16,  flag: 'http://fancygrid.com/dashboards/iots/img/Japan.png',       country: 'Japan',           online: 8.2}, 
      {rank: 17,  flag: 'http://fancygrid.com/dashboards/iots/img/Australia.png',   country: 'Australia',       online: 7.9}, 
      {rank: 18,  flag: 'http://fancygrid.com/dashboards/iots/img/Mexico.png',      country: 'Mexico',          online: 6.8}, 
      {rank: 19,  flag: 'http://fancygrid.com/dashboards/iots/img/Poland.png',      country: 'Poland',          online: 6.3}, 
      {rank: 20,  flag: 'http://fancygrid.com/dashboards/iots/img/Colombia.png',    country: 'Colombia',        online: 6.1}, 
      {rank: 21,  flag: 'http://fancygrid.com/dashboards/iots/img/Russia.png',      country: 'Russia',          online: 4.9}, 
      {rank: 22,  flag: 'http://fancygrid.com/dashboards/iots/img/Turkey.png',      country: 'Turkey',          online: 2.3}, 
      {rank: 23,  flag: 'http://fancygrid.com/dashboards/iots/img/India.png',       country: 'India',           online: 0.6}
    ];

    
    /***** set input type *****/
    // 'rowdrag'
    // 'select'
    // 'number'
    // 'combo'
    // 'range'    ---> min 20, max 30
    // 'checkbox'

    this.gridConfig_Light = {

      theme: 'gray',            // grid theme
      width: 1200,
      height: 600,
      resizable: true,          // resizable grid
      multiSort: true,          // multiple sorting columnns
      selModel: 'rows',         // 
      clicksToEdit: 2,          // double click for editing
      columnLines: false,       // 
      columnClickData: true,    // 
      trackOver: true,          //  
      //rowEdit: true,          // the all row editable

      defaults: {
        type: 'string',
        width: 100,
        sortable: true,     // sortable columns
        resizable: true,
        editable: true,
        ellipsis: true,
        titleEditable: true
      },


      data: {
        items: data
      },

      title: {
        text: 'My Fancy Grid Light',
        style: {
          'text-align': 'center'
        }
      },
      subTitle: {
        text: 'Sub Title Light',
        style: {
          'text-align': 'left'
        }
      },

      // Search Bar
      tbar: [{
        type: 'search',
        width: 350,
        emptyText: 'Search',
        paramsMenu: true,
        paramsText: 'Parameters'
      }],

      footer: {
        status: `<span style="position: relative;top: 3px;">
                 - Creater by Angjel Spasovski &#174;, April 2019
                 </span> `,
        source: {
          text: 'Some_text_link',
          link: 'google.com'
        }
      },

      // Header and Footer Paging
      paging: {                 
        //barType: 'both',
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
          cls: 'column-cls-kia-model-name',   // class name
          editable: false,                    // not editable
          title: `<img 
                    style="height: 30px;" 
                    src="https://fancygrid.com/dashboards/column-header-images/images/kia-soul.png">`,
          width: 80,
          type: 'number',
          menu: 'columns'
        },
        
        {
          index: 'flag',
          title: 'Flag',
          cls: 'flag',
          width: 40,
          type: 'image',
          editable: false,
        },
        
        {
          index: 'company',
          title: 'Company',
          width: 120,
          filter: {
            header: true,
            emptyText: 'Search'
          }
        },
        
        {
          index: 'name',
          title: 'Name',
          filter: {
            header: true,
            emptyText: 'Search'
          }
        },
        
        {
          title: 'Birthday',
          index: 'birthday',
          type: 'date',
          width: 90,
          format: {
            read: 'Y.m.d',
            write: 'm/d/Y',
            edit: 'm/d/Y'
          }
        },
        
        {
          index: 'country',
          title: 'Country',
          type: 'combo',
          // data combination for choosing
          data: ['USA', 'Canada', 'England', 'Macedonia'],
          filter: {
            header: true,
            emptyText: 'Search'
          }
        }, 
        
        {
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
        }, 
        
        {
          text: 'Marrige Group',
          columns: [
            
            {
              index: 'married',
              title: 'Married',
              type: 'checkbox',
              width: 70,
              filter: {
                header: true,
                emptyText: 'Search'
              }
            }, 

            {
              index: 'married',
              title: 'Married',
              type: 'switcher',
              width: 70,
              filter: {
                header: true,
                emptyText: 'Search'
              }
            }

          ]
        },
        
        {
          index: 'position',
          title: 'Position',
          filter: {
            header: true,
            emptyText: 'Search'
          }
        },

        {
          index: 'online',
          title: 'Online *',
          type: 'number',
          width: 55,
        }, 
        
        {
          index: 'online',
          type: 'progressbar',
          width: 50,
          title: 'Relative size',
          // flex column
          flex: 1,
          sparkConfig: {
            percents: false
          }
        }
        
      ]
    };

    this.gridConfig_Dark = {
      theme: 'dark',
      title: {
        text: 'My Fancy Grid Dark',
        style: {
          'text-align': 'center'
        }
      }, 
      subTitle: {
        text: 'Sub Title Dark',
        style: {
          'text-align': 'left'
        }
      },
      width: 1200,
      height: 600,
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

      footer: {
        status: '<span style="position: relative;top: 3px;">*</span> - Creater by Angjel Spasovski &#174;, April 2019',
        source: {
          text: 'Some_text_link',
          link: 'google.com'
        }
      },

      multiSort: true,         // multiple sorting columnns

      defaults: {
        type: 'string',
        width: 100,
        //sortable: true,     // sortable columns
        resizable: true,
        editable: true,
        ellipsis: true,
        titleEditable: true
      },

      selModel: 'rows',
      rowEdit: true,            // the all row editable 
      clicksToEdit: 2,          // double click for editing
      columnLines: false,       //
      columnClickData: true,    // 
      
      //paging: true,           // Bottom Paging 

     
      paging: {                  // Header and Footer Paging
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
        index: 'flag',
        title: 'Flag',
        width: 40,
        type: 'image',
        cls: 'flag'
      },{
        index: 'company',
        title: 'Company',
        width: 120,
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
        title: 'Birthday',
        index: 'birthday',
        type: 'date',
        width: 90,
        format: {
          read: 'Y.m.d',
          write: 'm/d/Y',
          edit: 'm/d/Y'
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
        filter: {
          header: true,
          emptyText: 'Search'
        }
      },{
        index: 'online',
        title: 'Online *',
        type: 'number',
        width: 55,
      }, {
        index: 'online',
        type: 'progressbar',
        width: 50,
        title: 'Relative size',
        // flex column
        flex: 1,
        sparkConfig: {
          percents: false
        }
      }]
    };

    this.gridGrouping = {
    //   width: 550,
    //   height: 450,
    //   trackOver: true,
    //   selModel: 'row',
    //   textSelection: true,
    //   data: {
    //     items: data
    //   },
    //   defaults: {
    //     type: 'string',
    //     width: 75,
    //     resizable: true,
    //     sortable: true
    //   },
    //   clicksToEdit: 1,
    //   columnLines: false,
    //   columnClickData: true,
    //   grouping: {
    //     by: 'model'
    //   },
    //   columns: [{
    //     title: 'Full Name',
    //     index: 'fullName',
    //     width: 160
    //   }, {
    //     title: 'Color',
    //     index: 'color',
    //     type: 'color',
    //     cls: 'color-column',
    //     sortable: false,
    //     width: 60
    //   }, {
    //     title: 'Color Name',
    //     index: 'colorName',
    //     width: 140
    //   }, {
    //     title: 'Price',
    //     index: 'price',
    //     format: 'number',
    //     type: 'number'
    //   }, {
    //     title: 'Count',
    //     index: 'count',
    //     type: 'number',
    //     width: 60
    //   }]  
      
    }

    this.gridTree = {
      title: 'Tree Grid',
      theme: 'gray',
      selModel: 'rows',
      trackOver: true,
      width: 600,
      height: 600,

      data: {
        items: dataTree,
        fields: ['name', 'type', 'population']
      },

      defaults: {
        type: 'string',
        sortable: true,
        resizable: true
      },

      columns: [{
        index: 'name',
        type: 'tree',
        title: 'Name',
        width: 200
        
      }, {
        index: 'type',
        title: 'Territory',
        width: 100
      }, {
        index: 'population',
        title: 'Population(mlns)',
        format: 'number',
        type: 'number',
        width: 120
      }
    ]}

    this.gridTreeFolder = {
      title: 'Tree Grid Folder',
      theme: 'gray',
      width: 600,
      height: 600,
      columnLines: false,
      trackOver: true,
      selModel: 'row',

      data: {
        items: dataTreeFolder,
        fields: ['name', 'type', 'price', 'img']
        },

      defaults: {
        type: 'string',
        draggable: true,
        sortable: true,
        resizable: true
      },

      columns: [
        {
          type: 'tree',
          folder: true,
          title: 'Name',
          width: 240,
          index: 'name'
        },{
          index: 'name',
          title: 'Name',
          width: 140
        },{
          index: 'price',
          title: 'Start Price',
          type: 'currency',
          width: 80
        }]
    }

    this.gridGroupingColapse = {
      width: 600,
      height: 600,
      trackOver: true,
      selModel: 'row',
      textSelection: true,
      clicksToEdit: 1,
      columnLines: false,
      columnClickData: true,

      data: {
        items: dataGroupingColapse
      },
      defaults: {
        type: 'string',
        width: 75,
        resizable: true,
        sortable: true
      },


      grouping: {
        by: 'model'
      },

      columns: [
        {
          title: 'Full Name',
          index: 'fullName',
          width: 160
        },
        
        {
          title: 'Color',
          index: 'color',
          type: 'color',
          cls: 'color-column',
          sortable: false,
          width: 60
        }, 
        
        {
          title: 'Color Name',
          index: 'colorName',
          width: 140
        }, 
        
        {
          title: 'Price',
          index: 'price',
          format: 'number',
          type: 'number',
          render: function(o: any) {
            o.value = '$' + o.value;
    
            return o;
          }
        }, 
        
        {
          title: 'Count',
          index: 'count',
          type: 'number',
          width: 60
        }
    
      ]
    }

    this.gridTrackOverSelection = {
      title: 'TrackOver',
      width: 600,
      height: 600,
      data: dataTrackOverSelection,
      trackOver: true,
      tbar: [{
        type: 'segbutton',
        multiToggle: true,
        items: [{
          text: 'Cell',
          enableToggle: true,
          handler: function(b) {
            
          }
        }, {
          text: 'Column',
          enableToggle: true,
          handler: function(b) {
            
          }
        }, {
          text: 'Row',
          enableToggle: true,
          pressed: true,
          handler: function(b) {
            
          }
        }]
      }],
      defaults: {
        type: 'string',
        width: 100,
        sortable: true,
        resizable: true,
        ellipsis: true
      },
      columns: [{
        index: 'id',
        title: 'Id',
        width: 50,
        type: 'number'
      }, {
        index: 'company',
        title: 'Company',
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
      }, {
        index: 'knownledge',
        title: 'Knownledge'
      }, {
        index: 'position',
        title: 'Position'
      }]
  }

    this.gridHBar = {


        title: {
          text: 'Car production by largest manufacturers',
          style: {
            'text-align': 'center'
          }
        },
        width: 600,
        height: 600,
        cellHeight: 33,
        data: dataHBar,
        trackOver: true,
        selModel: 'row',
        defaults: {
          width: 100,
          resizable: true
        },
        columns: [{
          title: 'Year',
          index: 'year',
          width: 55
        }, {
          width: 550,
          type: 'hbar',
          index: ['toyota', 'gm', 'vw', 'ford', 'hyundai'],
          sparkConfig: {
            tipFormat: function(o) {
              return o.title + ' in ' + o.data.year + ':' + o.percents.toPrecision(4) + '%';
            },
            title: ['Toyota', 'GM', 'Volkswagen', 'Ford', 'Hyundai'],
            legend: {
              type: 'bbar',
              style: {
                'margin-left': '100px'
              }
            }
          }
        }]

    }

    this.gridHbarStacked = {
      title: 'Measuring emerging-market vulnerability',
      subTitle: {
        text: 'Emerging-market vulnerability to a sudden stop in capital inflows',
        style: {
          color: '#6A7989',
          'font-size': '11px',
          'font-weight': '400'
        }
      },
      width: 600,
      height: 600,
      data: dataHbarStacked,
      trackOver: true,
      selModel: 'row',
      cellHeight: 28,
      footer: {
        status: '   ',
        source: {
          sourceText: 'Inspired by',
          text: 'Economist Daily Chart',
          link: 'http://www.economist.com/blogs/graphicdetail/2015/09/capital-freeze-index'
        }
      },
      defaults: {    
        width: 100,
        sortable: true,
        resizable: true
      },
      columns: [{
        index: 'country',
        type: 'string',
        width: 80,
        cellAlign: 'right',
        title: 'Countries'
      },{
        index: ['0','1','2'],
        type: 'hbar',
        width: 400,
        sortable: false,
        title: '',
        sparkConfig: {
          tipTpl: '{value}',
          stacked: true,
          tipFormat: function(o){
            var data = o.data;
            
            return [
              'Overall ranking: ' + (data[0] + data[1] + data[2]) + '<br>',
              'Current-account balance: ' + data[0]+ '<br>',
              'Private-sector credit: ' + data[1]+ '<br>',
              'Foreign debt: ' + data[2]
            ].join("");
          },
          title: ['Balance', 'Credit', 'Foreign debt'],
          legend: {
            type: 'tbar',        
            style: {}
          }
        }
      }]
    }
    

  }
}