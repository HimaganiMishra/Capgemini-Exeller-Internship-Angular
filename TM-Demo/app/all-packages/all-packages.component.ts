import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit {
  cart:any =[];
  packages: any;
  constructor() { 
    this.packages = [{
      name: 'Goa Package', cost:7000, rating:4,description:'Goa Package', imagePath: 'assets/Gia.jpg'}
      ,
     { name: 'Shimla Package', cost:9000, rating:4,description:'Shimla Package', imagePath: 'assets/Shimla.jpg'
    },{name: 'Darjeeling Package', cost:10000, rating:4,description:'Darjeeling Package' ,imagePath: 'assets/Darjeeling.jpg'
   },{ name: 'Kashmir Package', cost:20000, rating:4,description:'Kashmir Package' ,imagePath: 'assets/Kashmir.jpg'
   },{ name: 'Ooty Package', cost:8000, rating:4,description:'Ooty Package' ,imagePath: 'assets/Ooty.jpg'
   }]
    
  }

  ngOnInit(): void {
  }
  addToCart(packages:any){
    this.cart.push(packages);
    console.log(this.cart);
  }
  share(name:string){
    console.log(name+"shared");
  }
}

