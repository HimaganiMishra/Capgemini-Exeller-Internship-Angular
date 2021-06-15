import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input()  childName:string = '';

  @Output() price = new EventEmitter<number>(); // actual property to be passed to parent-component
  

  constructor() { }

  ngOnInit(): void {
  }


  changePrice(inputPrice:string)
  {
     let newPrice:number  = parseInt(inputPrice);
     console.log(" Inside child component :- "+newPrice);
     
     this.price.emit(newPrice);

  }

}