import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-store';

  items = ['Daniel','Pedro','Juan'];

  //Objeto : tipado tipo array de Product
  products: Product[] = [
    {
      id: 'A0000001',
      title: 'Producto No1',
      price: 8000,
      description: 'Description product',
      img: 'img url',
    }
  ];
  
  addItem() {
    this.items.push('nuevo item')
  }

  deleteItem(index:number){
    this.items.splice(index, 1);
  }

  clickProduct(id: number){
    console.log('Product id:',id);
  }
}
