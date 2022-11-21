import { Component, OnInit, VERSION } from '@angular/core';
import { product } from './../../models/product.model';
import { GeneralService } from './../../service/general.service';
@Component({
  selector: 'my-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'prod_name',
    'prod_desc',
    'prod_price',
    'updated_at',
  ];
  dataSource: product[] = [];

  constructor(private generalService: GeneralService) {}

  getProducts() {
    this.generalService.getListProducts().subscribe((data: product[]) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  ngOnInit() {
    this.getProducts();
  }
}
