import { Component, OnInit, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

ngOnInit(): void {

}

products: WritableSignal<Product[]> = signal ([])
cargando =signal(false);

async getProducts(){

  this.cargando = signal(true);
  const res = await fetch();
  const resJson = await res.json();
  this.products.set(resJson);
  this.cargando = signal(false);
}

interface Product{
pepe: string;
name:string;

}



}
