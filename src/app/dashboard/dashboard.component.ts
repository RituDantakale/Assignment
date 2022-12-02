import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
 counter=1;
 counter1=1;
 counter2=1;
  values: any = [];

 

 
  constructor() { 
    
  }

  ngOnInit(): void {
   this.values =[];

     
  }

  onRemove(){
    if(this.counter===1){}else{
    this.counter--
  }
  }
  onRemove1(){
    if(this.counter1===1){}else{
    this.counter1--
  }
  }
  onRemove2(){
    if(this.counter2===1){}else{
    this.counter2--
  }
  }
  onAdd(){
    this.counter++
  }
  onAdd1(){
    this.counter1++
  }
  onAdd2(){
    this.counter2++
  }
  
onAddBag(a:any,b:any,c:any){

  this.values.push({
    ProductName:a.innerHTML,
    Quantity: b,
    PriceDetails:c.innerHTML,

  }); 




}

onAddBag1(a1:any,b1:any,c1:any){



  this.values.push({
    ProductName:a1.innerHTML,
    Quantity: b1,
    PriceDetails:c1.innerHTML,

  }); 
}

onAddBag2(a2:any,b2:any,c2:any){

  

  this.values.push({
    ProductName:a2.innerHTML,
    Quantity: b2,
    PriceDetails:c2.innerHTML

  }); 

 
  
}


}
