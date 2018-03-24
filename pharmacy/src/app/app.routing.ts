import { RouterModule, Routes } from '@angular/router';

import { AddMedicineFormComponent } from './addmedicine-form.component';
import { MedicinesComponent } from './medicines.component';
import { EditMedicineFormComponent } from './editmedicine-form.component'

const appRoutes: Routes = [
    { path: '', component: MedicinesComponent },
   // { path: 'employees', component: EmployeesComponent },
   // { path: 'employees/:id', component: EmployeeComponent },
    { path: 'addMedicine', component: AddMedicineFormComponent},
    { path: 'editMedicine/:medicineId', component: EditMedicineFormComponent}
  ];
  
  export const routing = RouterModule.forRoot(appRoutes);