import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../products.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ProductsService]
})
export class HeaderComponent implements OnInit {

  products;
  constructor(
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  searchProduct(product: string){
    this.router.navigate(['/search/', product]);
    this.products = this.productService.searchProducts(product);
  }
}
