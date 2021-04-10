
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product;

  subscription: Subscription 

  constructor(
    categoryService: CategoryService, 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories()

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) 
      this.productService.get(id).valueChanges().subscribe(p => {
      this.product = p;
    })
   }

  ngOnInit(): void {
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
