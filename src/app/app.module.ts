import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import { MatCardModule, MatFormFieldModule, MatButtonModule, 
  MatDividerModule, MatListModule, MatIconModule,MatToolbarModule,
MatSelectModule, MatOptionModule, MatDatepickerModule, MatTableModule,
MatInputModule,MatNativeDateModule,MatGridListModule} from '@angular/material';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './manager/dashboard/dashboard.component';
import { AddDestinationComponent } from './manager/add-destination/add-destination.component';
import { WelcomeComponent } from './user/welcome/welcome.component';
import {NavbarComponent} from './user/navbar/navbar.component';
import {ListDestinationComponent} from './user/listDestination/list-destination.component'
import { EditDestinationComponent } from './manager/edit-destination/edit-destination.component';
import { ViewClientsComponent } from './manager/view-clients/view-clients.component';
import {ContactUsComponent} from './user/ContactUs/contact-us.component';
import {AboutComponent} from './user/about/about.component'
import {RegisterComponent} from './user/register/register.component'
import { ClientsComponent } from './manager/clients/clients.component';




const appRoutes: Routes=[
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'edit-destination', component: EditDestinationComponent},
  {path: 'view-clients', component: ViewClientsComponent},
  {path: 'clients', component:ClientsComponent},
  {path: 'navbar', component: NavbarComponent, children: [
           { path: '', redirectTo: 'welcome', pathMatch: 'full' },
           {path: 'welcome', component: WelcomeComponent},
           {path:'listDestination', component:ListDestinationComponent},
           {path:'contact-us',component:ContactUsComponent},
           {path:'about',component:AboutComponent},
           {path:'register', component:RegisterComponent},
     
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
    ListDestinationComponent,
     EditDestinationComponent,
    ViewClientsComponent,
    ContactUsComponent,
    AboutComponent,
    RegisterComponent,
    ClientsComponent
  ],

  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,BrowserAnimationsModule,FormsModule, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatButtonModule, 
    MatDividerModule,MatListModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatOptionModule, MatDatepickerModule, MatTableModule,MatInputModule,
    MatNativeDateModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
