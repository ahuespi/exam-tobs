import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchPageComponent } from './components/search-page/search-page.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  { path: 'product/:productId', component: ProductDetailComponent },
  { path: 'search/:termId', component: SearchPageComponent },
  { path: '**', pathMatch:'full', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
