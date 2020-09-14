import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products;
  product;

  constructor(
    protected http: HttpClient
  ) {}

  getProducts(){
    const url = '/api/catalog_system/pub/products/search/notebook';
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.products = this.http.get( url, {headers});
    return this.products;
  }

  searchProducts(brandName: string){
    let searchArray: any[] = [];

    this.getProducts().subscribe(data => {
      this.products = data;
      this.products.filter(product => {
        if (product.brand.toLowerCase() === brandName.toLowerCase()) {
          searchArray.push(product);
        }
      });
    });

    return searchArray;
  }

}
