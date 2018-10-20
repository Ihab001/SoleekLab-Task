import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: AngularFireList<any>;
  

  constructor(private firebase:AngularFireDatabase) { }

  getProducts(){
   return this.products= this.firebase.list('products');
   

  }
  addProduct(product){
    return this.firebase.list('products').push(product);
  }
  updateProduct(product,key)
  {
    return this.firebase.list('products').update(key,product);
  }
  deleteProduct(key)
  {
    this.firebase.list('products').remove(key);
  }
}
