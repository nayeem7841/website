import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   products=[
    {id:1,name:'iphone',price:190000,color:'black',avaliable:'Avaliable',image:"/assets/iphone.jpg"},
    {id:2,name:'LG',price:100000,color:'white',avaliable:'Avaliable',image:"/assets/LG.webp"},
    {id:3,name:'MI',price:18000,color:'black',avaliable:'Avaliable',image:"/assets/mi.jpg"},
    {id:4,name:'Panasonic',price:2000,color:'black',avaliable:'Avaliable',image:"/assets/Panasonic.webp"},
    {id:5,name:'Headphone',price:1000,color:'black',avaliable:'Avaliable',image:"/assets/Headphone.jpg"},
    {id:6,name:'Headphone',price:1000,color:'black',avaliable:'Unavaliable',image:"/assets/headphone2.webp"}
   ];
   searchText:string='';
   onSearchTextEntered(event:any)
   {
      this.searchText=event;
      console.log(event);
   }
}
