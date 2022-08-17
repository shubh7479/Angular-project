import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar' ;
import{MatSidenavModule} from '@angular/material/sidenav';
import{ MatIconModule} from '@angular/material/icon';
import{ MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    EmployeeDashboardComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
