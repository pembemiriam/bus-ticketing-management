import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { MatCardModule, MatFormFieldModule, MatButtonModule, 
  MatDividerModule, MatToolbarModule,MatListModule} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './manager/dashboard/dashboard.component';
import { AddDestinationComponent } from './manager/add-destination/add-destination.component';
import { WelcomeComponent } from './user/welcome/welcome.component';
import {NavbarComponent} from './user/navbar/navbar.component';
import {ListDestinationComponent} from './user/listDestination/list-destination.component'




const appRoutes: Routes=[
  {path: 'navbar', component: NavbarComponent, children: [
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
           {path: 'welcome', component: WelcomeComponent},
           {path:'listDestination', component:ListDestinationComponent}
]}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddDestinationComponent,
    WelcomeComponent,
    NavbarComponent,
    ListDestinationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,BrowserAnimationsModule,MatCardModule, MatFormFieldModule, MatButtonModule, 
    MatDividerModule,MatToolbarModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
