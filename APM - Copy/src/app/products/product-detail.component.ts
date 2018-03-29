import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .subscribe(data => {
        this.pageTitle += `: ${id}`;
        this.product = data;
      },
        error => console.log(error)
      );
  }

  public onBack(): void {
    this._router.navigate(['/products']);
  }

}
