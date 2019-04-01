import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title = 'My Fancy Grid';
  
  gridConfig: object;
  gridGrouping: object;
  gridTree: object;
  gridTreeFolder: object;
  
  constructor () {
    
    let data = [
      {id: 1,   name: 'Ted',       surname: 'Smith',       company: 'Electrical Systems',  age: 30,   married: false,  country: 'England',   position: 'Project Manager',      weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42, image: "https://fancygrid.com/images/staff/boy-4.png"},
      {id: 2,   name: 'Ed',        surname: 'Johnson',     company: 'Energy and Oil',      age: 35,   married: true,   country: 'Canada',    position: 'C/C++ Data Developer', weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42, image: "https://fancygrid.com/images/staff/girl.png"},
      {id: 3,   name: 'Sam',       surname: 'Williams',    company: 'Airbus',              age: 38,   married: true,   country: 'USA',       position: 'Technical Analyst',    weekWorkHours: [6, 8, 3, 4, 3, 1, 0], src: "http://fancygrid.com/img/samples/nusha.png",    total: 42, image: "https://fancygrid.com/images/staff/girl-1.png"},
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
      
      {name: 'North America',type: 'Territory',expanded: true,  
        child: [
          {name: 'USA',type: 'Country',population: 325365189,child: [
            {type: 'City',name: 'New York',population: 8175133,leaf: true}, 
            {type: 'City',name: 'Washington',population: 681170,leaf: true}
        ]}, 
        {name: 'Canada',type: 'Country',population: 35151728,
          child: [
            {type: 'City',name: 'Ottawa',population: 934243,leaf: true}, 
            {type: 'City',name: 'Toronto',population: 2731571,leaf: true}
          ]
        }, 
        {name: 'Mexico',type: 'Country',population: 123675325,
          child: [
            {type: 'City',population: 8918653,leaf: true,name: 'Mexico'}
          ]
      }]
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
          {name: 'Sedan', type: 'type', expanded: true,
            child: [
              {name: 'Smart Compact Morning', img: 'imgs/new-morning.png',  leaf: true, price: 9890},
              {name: 'New Ray',               img: 'imgs/ray.png',          leaf: true, price: 11150},
              {name: 'K3',  leaf: true, img: 'imgs/k3.png', price: 14250},
              {name: 'K5',  leaf: true, img: 'imgs/newk5.png',  price: 20900},
              {name: 'K7',  leaf: true, img: 'imgs/k7.png', price: 28600},
              {name: 'Stinger', leaf: true, img: 'imgs/stinger.png',  price: 32300},
              {name: 'K9',  leaf: true, img: 'imgs/k9.png', price: 47000}
            ]
        },
        {name: 'ECO', type: 'type',
          child: [
            {name: 'Niro',  leaf: true, img: 'imgs/niro.png', price: 21700},
            {name: 'Niro Phev', leaf: true, img: 'imgs/niro-phev.png',  price: 30500},
            {name: 'Soul Ev', leaf: true, img: 'imgs/soul_ev.png',  price: 39400},
            {name: 'K5 plug-in Hybrid', leaf: true, img: 'imgs/k5_hybrid.png',  price: 36500},
            {name: 'K5 Hybrid', leaf: true, img: 'imgs/k5phev.png', price: 26500},
            {name: 'K7 Hybrid', leaf: true, img: 'imgs/k7_hybrid.png',  price: 33000}
          ]
        },
        {name: 'SUV', type: 'type',
          child: [
            {name: 'Stonic',  leaf: true, img: 'imgs/stonic.png', price: 16000},
            {name: 'Niro',  leaf: true, img: 'imgs/niro-phev.png',  price: 21700},
            {name: 'New Soul',  leaf: true, img: 'imgs/soul.png', price: 16100},
            {name: 'New Carens',  leaf: true, img: 'imgs/new_carens.png', price: 18500},
            {name: 'Sportage',  leaf: true, img: 'imgs/sportageql.png', price: 19500},
            {name: 'New Sorento', leaf: true, img: 'imgs/sorento.png',  price: 25700},
            {name: 'Mohave',  leaf: true, img: 'imgs/mohave.png', price: 37900},
            {name: 'Carnival',  leaf: true, img: 'imgs/new_carnival.png', price: 25400},
            {name: 'Carnival HI-LIMOUSINE', leaf: true, img: 'imgs/carnival_hi_limousine.png',  price: 39300},
            {name: 'Carnival OUTDOOR',  leaf: true, img: 'imgs/carnival_outdoor.png', price: 35900}
          ]
        },
        {name: 'Commercial',  type: 'type',
          child: [
            {name: 'K5 Taxi', leaf: true, img: 'imgs/newk5_taxi.png', price: 15300},
            {name: 'K7 Taxi', leaf: true, img: 'imgs/k7_taxi.png',    price: 23000},
            {name: 'New GrandBird', leaf: true, img: 'imgs/new_granbird.png', price: 145000},
            {name: 'Bongo 3', leaf: true, img: 'imgs/truck.png',  price: 14000},
            {name: 'Bongo 3 FrozenTapcha',  leaf: true, img: 'imgs/top_car.png',  price: 18300},
            {name: 'Bongo 3 GeneralTruck',  leaf: true, img: 'imgs/construct_sung.png', price: 18900},
            {name: 'Bongo 3 PowerGate',     leaf: true, img: 'imgs/construc.png',   price: 16900},
            {name: 'Bongo 3 Homelori',  leaf: true, img: 'imgs/transport.png',  price: 28000}
          ]
        }]
      }];

 

    /***** set input type *****/
    // 'rowdrag'
    // 'select'
    // 'number'
    // 'combo'
    // 'range'    ---> min 20, max 30
    // 'checkbox'

    this.gridConfig = {
      theme: 'gray',
      title: 'My Fancy Grid',
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
      },
      {
        text: 'Add',
        action: 'add'
      }, {
        text: 'Remove',
        action: 'remove'
      }],

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
        type: 'image',
        index: 'image',
        title: 'Photo',
        cls: 'image-staff',
        width: 100
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
      width: 600,
      height: 600,
      data: {
        items: dataTree,
        fields: ['name', 'type', 'population']
      },
      selModel: 'rows',
      trackOver: true,
      theme: 'gray',
      defaults: {
        type: 'string',
        sortable: true,
        resizable: true
      },
      columns: [{
        type: 'tree',
        title: 'Name',
        width: 200,
        index: 'name'
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
      }]

    }

    this.gridTreeFolder = {
      title: 'Tree Grid Folder',
      width: 600,
        height: 600,
        columnLines: false,
        theme: 'gray',
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
        columns: [{
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
  }
}