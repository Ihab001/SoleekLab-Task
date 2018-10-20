import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Output } from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

//getting started with variables that will be used 
  selectedProduct: any;
  productData: Observable<any[]>;

//intializing services that will be used in our project
  constructor(private prodServ:ProductsService,private  router :Router) { 
   this.selectedProduct = 
{ sku:'0' , name:'0' , image:'0' , category:'0' , price:'0',date:'0' };

}

//this call the add function from our service
addProduct(product)
{
this.prodServ.addProduct(product);
}

//this to get selected product 
productSelected(Tableproduct,x)
{
  this.selectedProduct=Tableproduct;
}

//this function send new data edited of product and it's key to be sent to firebase 
editProduct(formEdit,key)
{
this.prodServ.updateProduct(formEdit,key);
}

//delete function takes key of product and confirm delete and then deletes
delete(key)
{ 
  if(confirm("Are you sure to delete this product ? ")) {
    this.prodServ.deleteProduct(key);
  }
    
 }
//this is to initialize products table with products once the application is started 
  ngOnInit() {

  this.productData = this.prodServ.getProducts().snapshotChanges().pipe(map(changes => {
  return changes.map(c => ({ key: c.payload.key, ...c.payload.val() 
}));
}));

  }
 
}
