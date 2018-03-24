import { Component, OnInit } from '@angular/core';
import { MedicineService } from './medicines.service'

@Component({
    selector: 'app-medicines',
    templateUrl: './medicines.component.html'
})
export class MedicinesComponent implements OnInit {
    title = 'Pharmacy app';

    medicines: any[];
    constructor(private _medicineService: MedicineService){}

    ngOnInit(){
        this.medicines = this._medicineService.getMedicines();
        console.log(this.medicines);
    }

    deleteMedicine(id: any){
        this._medicineService.deleteMedicine(id);
        this.medicines = this._medicineService.getMedicines();
    }

}