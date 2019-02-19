// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Two Way Data Binding module
import { RouterModule, Route } from '@angular/router' // Router

// Components
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { HeaderComponent } from './components/header/header.component';

// Services
import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { HttpModule } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
