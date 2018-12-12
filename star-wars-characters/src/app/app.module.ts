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

// Routes are Array of JavaScript Objects
const routes = [
  { path:'', component: TabsComponent },
  { path:'new-character', component: CreateCharacterComponent }
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
    RouterModule.forRoot(routes)
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
