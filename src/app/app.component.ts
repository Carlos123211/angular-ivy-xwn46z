import { Component, OnInit, VERSION } from '@angular/core';
import { product } from './models/product.model';
import { GeneralService } from './service/general.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'prod_name',
    'prod_desc',
    'prod_price',
    'updated_at',
  ];
  dataSource: product[] = [];

  productName: string = '';
  description: string = '';
  price: number = null;

  constructor(private generalService: GeneralService) {}

  getProducts() {
    this.generalService.getListProducts().subscribe((data: product[]) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  addProduct() {
    let body: product = {
      prod_name: this.productName,
      prod_desc: this.description,
      prod_price: +this.price,
      updated_at: '',
    };

    this.generalService.createProducts(body).subscribe((data) => {
      if(data){
        this.getProducts()
      }
    });
  }

  ngOnInit() {
    this.getProducts();
  }
}
