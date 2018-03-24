import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { MedicinesComponent } from './medicines.component';
import { AddMedicineFormComponent } from './addmedicine-form.component';
import { EditMedicineFormComponent } from './editmedicine-form.component';
import { MedicineService } from './medicines.service';


@NgModule({
  declarations: [
    AppComponent, MedicinesComponent, AddMedicineFormComponent, EditMedicineFormComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [MedicineService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
