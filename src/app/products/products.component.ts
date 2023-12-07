import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // products: any[] = [];

  // constructor(private productService: ProductService) { }

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe(
  //     (data) => {
  //       this.products = data;
  //       console.log('Products:', this.products); // Log the products to the console
  //     },
  //     (error) => {
  //       console.error('Error fetching products:', error); // Log any errors to the console
  //     }
  //   );
  // }
}

