import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error
      );
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  public onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
