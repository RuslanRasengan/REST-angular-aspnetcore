import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TableComponent } from './components/table/table.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UpdateEmployeeComponent,
    HomePageComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
