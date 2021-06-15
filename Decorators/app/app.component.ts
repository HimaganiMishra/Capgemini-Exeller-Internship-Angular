import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  packagename : string = 'Goa';
  outputPrice:number = 0;


  doClick(packagename:string)
  {
    this.packagename = packagename;
    console.log(" do click called , change the packagename "+this.packagename);
  }


  getPriceFromChild(eventEmitterValue:number)
  {
    this.outputPrice = eventEmitterValue;
  }
}