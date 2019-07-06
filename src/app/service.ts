import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Company} from './models/modelcompany';
import {Product} from './models/modelproduct';


@Injectable ()
export class HttpService {
  companies: Company[] = [];
  company: Company = new Company('', '', '', '');
  products: Product[] = [];
  product: Product = new Product('', '', '', '', '');
  constructor(private http: HttpClient) {}

  getDataCompany() {
    return this.http.get('http://localhost:8081/api/companies').subscribe((data: Company[] ) => this.companies = data);
  }
  getDataProduct() {
    return this.http.get('http://localhost:8081/api/products').subscribe((data: Product[] ) => this.products = data);
  }
  postCompany() {
    return this.http.post('http://localhost:8081/api/companies', this.company).subscribe((data: Company ) => this.companies.push(data));
  }
  postProduct() {
    return this.http.post('http://localhost:8081/api/products', this.product).subscribe((data: Product) => this.products.push(data));
  }
}
