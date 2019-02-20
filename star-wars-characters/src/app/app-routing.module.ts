import { NgModule} from '@angular/core';
import { RouterModule, Route } from '@angular/router' // Router

import { TabsComponent } from './components/tabs/tabs.component';
import { ListComponent } from './components/list/list.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';

// Routes are Array of JavaScript Objects
const routes = [
    { path:'characters', component: TabsComponent, children: [
        { path:'', redirectTo: 'all', pathMatch: 'full' },
        { path: ':side', component: ListComponent }
      ] 
    },
    { path:'new-character', component: CreateCharacterComponent },
    { path: '**', redirectTo: '/characters' }
  ];


@NgModule ({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}