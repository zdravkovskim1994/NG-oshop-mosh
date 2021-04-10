import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productsArray = [];

  constructor(private productService: ProductService) {
    this.productService.getAll().snapshotChanges().subscribe(
      list => {
        this.productsArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.exportVal()
          };
        })
      }
    );
   }

  ngOnInit(): void {
  }

}
