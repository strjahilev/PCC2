import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getDataProduct();
    this.httpService.getDataCompany();
    // this.httpService.getCompanyById();
  }
  onSubmit(productForm: NgForm) {
    this.httpService.postProduct();
    //   console.log(this.httpService.product);
  }

  // onSubmit(productForm: NgForm) {
  //   this.httpService.postProduct();
//     console.log(this.httpService.product);
//   }



// this.httpService.companies.id = {{c.?id}}
//     }
//   onSubmit(productForm: NgForm) {
//    this.httpService.postProduct();
//     console.log(this.httpService.products);
//   }
}
