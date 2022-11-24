import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllPatientsComponent } from './view-all-patients/view-all-patients.component';

const myRoute:Routes=[
     {
      path : "",
      component : PatientEntryComponent
     },
     {
      path : "Search",
      component : PatientSearchComponent
     },
     {
     path :"delete",
     component : PatientDeleteComponent
     },
     {
      path :"View",
      component : ViewAllPatientsComponent
      }

]

@NgModule({
  declarations: [
    AppComponent,
    PatientEntryComponent,
    PatientSearchComponent,
    PatientDeleteComponent,
    ViewAllPatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
