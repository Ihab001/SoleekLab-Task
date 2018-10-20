import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: AngularFireList<any>;
  //this service is used to be the layer between the firebase and the componant 

  constructor(private firebase:AngularFireDatabase) { }
//this function used to get all the products from firebase
  getProducts(){
   return this.products= this.firebase.list('products');
  }
//this function for adding new product into firebase node called products

  addProduct(product){
    return this.firebase.list('products').push(product);
  }

  //this function to update already added product into firebase 
  updateProduct(product,key)
  {
    return this.firebase.list('products').update(key,product);
  }
//this function takes key as an argument and deletes this product
  deleteProduct(key)
  {
    this.firebase.list('products').remove(key);
  }

}
