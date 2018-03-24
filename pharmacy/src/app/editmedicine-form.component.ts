import { Component } from '@angular/core'
import { Router, Params, ActivatedRoute } from '@angular/router';

import { MedicineService } from './medicines.service';

@Component({
    templateUrl: './editmedicine-form.component.html'
})
export class EditMedicineFormComponent{
    types: string[] =["Capsule", "Tablet", "Syrup", "Gel"];

    constructor(private _medicineService: MedicineService, private router: Router, private route: ActivatedRoute) { }
    medicineId: any;
    medicine: any;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.medicineId = +params['medicineId'];
        });
        this.medicine = this._medicineService.getMedicine(this.medicineId);
    }

    onUpdate(formValue: any){
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        let updateMedicine = {
            medicineId: this.medicine.id,
            name: formValue.name,
            manufacturer: formValue.manufacturer,
            batchNo: formValue.batchNo,
            expirationDate: formValue.expirationDate,
            price: formValue.price,
            type: formValue.type
        };
        this._medicineService.updateMedicine(updateMedicine);
        this.router.navigate(['']);
    }


}