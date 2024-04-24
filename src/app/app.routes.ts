import { Routes } from '@angular/router';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { ProductListaComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListaComponent },
  { path: 'aa', component: ProductListaComponent },
  { path: 'products/:id', component: ProductDetailComponent }

];
