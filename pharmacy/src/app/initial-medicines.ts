export class Init {
    load() {
      if (localStorage.getItem('medicines') === null || localStorage.getItem('medicines') == undefined) {
        console.log("Creating the initial set of medicines ...");
        var medicines = [
            {
                medicineId: 1,
                name: "Mixin",
                manufacturer: "Naidu's lab",
                batchNo: "MM2253",
                expirationDate: "1/1/2022",
                price: 10,
                type: "Capsule"
      
            },
            {
                medicineId: 2,
                name: "Cold 24",
                manufacturer: "Tipla",
                batchNo: "HH2253",
                expirationDate: "1/1/2022",
                price: 35,
                type: "Syrup"
      
            },
            {
                medicineId: 3,
                name: "Gascure",
                manufacturer: "Srini Pharma",
                batchNo: "CD2253",
                expirationDate: "1/1/2022",
                price: 5,
                type: "Tablet"
      
            },
            {
                medicineId: 4,
                name: "Bolo 720",
                manufacturer: "Moon Pharma",
                batchNo: "BI2253",
                expirationDate: "1/1/2022",
                price: 2,
                type: "Tablet"
      
            },
            {
                medicineId: 5,
                name: "Ponobet",
                manufacturer: "Nivas Healthcare",
                batchNo: "PR2253",
                expirationDate: "1/1/2022",
                price: 30,
                type: "Gel"
      
            }
        ];
        localStorage.setItem('medicines', JSON.stringify(medicines));
      }
      else {
        console.log("Loaded the medicines from local storage ...");
      }
    }
  }
  