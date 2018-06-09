import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { MatCardModule, MatFormFieldModule, MatButtonModule, 
  MatDividerModule, } from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './manager/dashboard/dashboard.component';
import { AddDestinationComponent } from './manager/add-destination/add-destination.component';


const appRoutes: Routes=[
  {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'login', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddDestinationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,BrowserAnimationsModule,MatCardModule, MatFormFieldModule, MatButtonModule, 
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
