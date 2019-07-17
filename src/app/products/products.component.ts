import {Component, Directive, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../service';
import {NgForm} from '@angular/forms';
import {Company} from '../models/modelcompany';
import {Product} from '../models/modelproduct';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
// selected: boolean = false;
// wselected: boolean = false;


   constructor(private httpService: HttpService) {
  }
  ngOnInit() {
    this.httpService.getDataProduct();
    this.httpService.getDataCompany();
    // this.httpService.getCompanyById();
  }

  onSubmit(productForm: NgForm) {
    if (productForm.value.id == null) {
//       if (productForm.value.company == null) {
// this.wselected = true;
        this.httpService.postProduct();
        console.log(this.httpService.product);
    } else {
      this.httpService.updateProduct(productForm.value.id);
    }
        //   console.log(this.httpService.product);
  }
  delProduct(id: string) {
    this.httpService.deleteProduct(id);
  }

  showforedit(product: Product ) {
    // this.selected = true;
    this.httpService.product = Object.assign({}, product);
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
