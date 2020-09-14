import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products;

  constructor(protected productsService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data) => {
        this.products = data;
      }
    );
  }

}
