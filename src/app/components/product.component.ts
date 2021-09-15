import { Component } from '@angular/core';

//Models
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    
    product: Product = {
        id: 'A0000001',
        title: 'Producto No1',
        price: 8000,
        description: 'Description product',
        img: 'img url',
      }
}