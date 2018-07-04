import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import { MatCardModule, MatFormFieldModule, MatButtonModule, 
  MatDividerModule, MatListModule, MatIconModule,MatToolbarModule,
MatSelectModule, MatOptionModule, MatDatepickerModule, MatTableModule} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './manager/dashboard/dashboard.component';
import { AddDestinationComponent } from './manager/add-destination/add-destination.component';
import { EditDestinationComponent } from './manager/edit-destination/edit-destination.component';
import { SearchClientsComponent } from './manager/search-clients/search-clients.component';
import { ViewClientsComponent } from './manager/view-clients/view-clients.component';


const appRoutes: Routes=[
  {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'edit-destination', component: EditDestinationComponent},
    {path: 'search-clients', component: SearchClientsComponent},
    {path: 'view-clients', component: ViewClientsComponent},
   
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddDestinationComponent,
    EditDestinationComponent,
    SearchClientsComponent,
    ViewClientsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,BrowserAnimationsModule,FormsModule, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatButtonModule, 
    MatDividerModule,MatListModule, MatIconModule, MatToolbarModule,
    MatSelectModule, MatOptionModule, MatDatepickerModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
