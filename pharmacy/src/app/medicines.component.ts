import { Component, OnInit } from '@angular/core';
import { MedicineService } from './medicines.service'

@Component({
    selector: 'app-medicines',
    templateUrl: './medicines.component.html'
})
export class MedicinesComponent implements OnInit {
    title = 'Pharmacy app';
    //show=false;
    mfg = true;
    batch = true;
    exp = true;
    price = true;
    type = true;

    medicines: any[];
    //delArray: any[];
    delArray: Medicine[]=[];
  
    
    constructor(private _medicineService: MedicineService){}

    ngOnInit(){
        this.medicines = this._medicineService.getMedicines();
        //console.log(this.medicines);
        
    }

    deleteMedicine(id: any){
        if(!confirm('Are you sure you want to delete this medicine?')) return;
        
        this._medicineService.deleteMedicine(id);
        this.medicines = this._medicineService.getMedicines();
    }

    onChkChange(medicine: Medicine){
        
        if(this.delArray.find(med => med==medicine)){
            this.delArray.splice(this.delArray.indexOf(medicine), 1);
            //console.log("test if");
        }
        else{
           this.delArray.push(medicine);
           //console.log("test else");
        }
    }

    deleteMultipleMedicines()
    {
        if(!confirm('Are you sure you want to delete all the selected medicines?')) return;
        
        this._medicineService.deleteMultipleMedicines(this.delArray);
        this.medicines = this._medicineService.getMedicines();
    }

}

class Medicine{
    medicineId: number;
    name: string;
    manufacturer: string;
    batchNo: string;
    expirationDate: string;
    price: number;
    type: string;
}