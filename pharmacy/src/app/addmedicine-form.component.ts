import { Component } from '@angular/core';
import { MedicineService } from './medicines.service';
import { Router } from '@angular/router';

@Component({
    selector: 'addmedicine-form',
    templateUrl: './addmedicine-form.component.html'
})
export class AddMedicineFormComponent {
    types: string[] =["Capsule", "Tablet", "Syrup", "Gel"];

    constructor(private _medicineService: MedicineService, private router: Router) { }

    onSave(formValue: any){
      //console.log("Form Value = " + JSON.stringify(formValue, null, 4));
      let medicinesCount = this._medicineService.getMedicineCount();
      let newMedicine = {
            medicineId: medicinesCount + 1,
            name: formValue.name,
            manufacturer: formValue.manufacturer,
            batchNo: formValue.batchNo,
            expirationDate: formValue.expirationDate,
            price: formValue.price,
            type: formValue.type
          };
      this._medicineService.addMedicine(newMedicine);
      this.router.navigate(['']);
    }
}