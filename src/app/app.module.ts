import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  { path: 'products', component:ProductsTableComponent },
  { path: 'home', component:HomeComponent },
  {path:'' , component:HomeComponent}
];
@NgModule({
  
  declarations: [
    AppComponent,
    ProductsTableComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [NgbAlertConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
