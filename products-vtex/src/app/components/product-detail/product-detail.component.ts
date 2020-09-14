import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: string;
  products: any[] = [];
  productInfo: any = {};

  constructor(
    protected productsService: ProductsService,
    private route: ActivatedRoute
    ) {
      this.route.params.subscribe(params => {
        this.id = params.productId;
        this.productsService.getProducts().subscribe(
          (data: any[]) => {
            this.products = data;
            this.getProduct(this.id);
          }
          );
        });
      }

      ngOnInit(): void {
      }

      getProduct(idx: string){
        this.products.filter(res => {
          if (res.productId === idx){
            this.productInfo = res;
          }
        });
  }

}
