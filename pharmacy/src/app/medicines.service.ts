import { Injectable } from '@angular/core';
import { Init } from './initial-medicines';
import { JsonPipe } from '@angular/common';

@Injectable()
export class MedicineService extends Init{
    constructor(){
        super();
        console.log("Initializing Medicine Service........");
        this.load();
    }

    getMedicineCount(){
        let medicines = JSON.parse(localStorage.getItem('medicines'));
        return medicines.length;
    }

    getMedicines(){
        let medicines = JSON.parse(localStorage.getItem('medicines'));
        return medicines;
    }

    getMedicine(id:any){
        let medicines = JSON.parse(localStorage.getItem('medicines'));
        let medicine:any = null;
        for (let i=0; i<medicines.length; i++){
            if(medicines[i].medicineId==id){
                medicine=medicines[i];
                break;
            }
        }
        return medicine;
    } 

    addMedicine(newMedicine: any) {
        let medicines = JSON.parse(localStorage.getItem('medicines'));
        medicines.push(newMedicine);
        localStorage.setItem('medicines', JSON.stringify(medicines));
      }
    
      updateMedicine(updatedMedicine: any) {
        let medicines = JSON.parse(localStorage.getItem('medicines'));
        for (let i = 0; i < medicines.length; i++) {
          if (medicines[i].medicineId == updatedMedicine.medicineId) {
            medicines[i] = updatedMedicine;
          }
        }
        localStorage.setItem('medicines', JSON.stringify(medicines));
      }
    
      deleteMedicine(medId: any) {
        let medicines = JSON.parse(localStorage.getItem('medicines'));
        for (let i = 0; i < medicines.length; i++) {
          if (medicines[i].medicineId == medId) {
            medicines.splice(i, 1);
          }
        }
        localStorage.setItem('medicines', JSON.stringify(medicines));
      }
}