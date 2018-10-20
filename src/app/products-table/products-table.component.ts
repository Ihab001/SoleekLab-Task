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


  selectedUser: any;
  
 
  productData: Observable<any[]>;
  constructor(private prodServ:ProductsService,private  router :Router) { 
this.selectedUser = 
{ sku:'0' , name:'0' , image:'0' , category:'0' , price:'0',date:'0' };

  }

addProduct(product)
{
this.prodServ.addProduct(product);

}

RowSelected(u,x)
{
  this.selectedUser=u;
}

editProduct(formEdit,key)
{
this.prodServ.updateProduct(formEdit,key);



}

delete(key)
{ 
  if(confirm("Are you sure to delete this product ? ")) {
    this.prodServ.deleteProduct(key);
  }
    
 

 }

  ngOnInit() {

  this.productData = this.prodServ.getProducts().snapshotChanges().pipe(map(changes => {
  return changes.map(c => ({ key: c.payload.key, ...c.payload.val() 
}));
}));

  }
 
}
