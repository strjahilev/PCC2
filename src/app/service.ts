import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Company} from './models/modelcompany';
import {Product} from './models/modelproduct';
import {Owner} from './models/modelowner';


@Injectable ()
export class HttpService {
  companies: Company[] = [];
  company: Company = new Company('', '', '');
  products: Product[] = [];
  product: Product = new Product('', '', '', {});
  owners: Owner[] = [];
  owner: Owner = new Owner('', []);
  compid: Company = new Company('', '', '');
  constructor(private http: HttpClient) {}

  getDataCompany() {
    return this.http.get('http://localhost:8081/api/companies').subscribe((data: Company[] ) => this.companies = data);
  }
  getCompanyById(idCompany: string ) {
    return this.http.get(`http://localhost:8081/api/companies/${idCompany}`).subscribe((data: Company) => this.compid = data);
  }
  getDataProduct() {
    return this.http.get('http://localhost:8081/api/products').subscribe((data: Product[] ) => {this.products = data});
  }
  getDataOwner() {
    return this.http.get('http://localhost:8081/api/owners').subscribe((data: Owner[]) => this.owners = data);
  }
  postCompany() {
    return this.http.post('http://localhost:8081/api/companies', this.company).subscribe((data: Company ) => this.companies.push(data));
  }
  postProduct() {
    return this.http.post('http://localhost:8081/api/products', this.product).subscribe((data: Product) => this.products.push(data));
  }
  postOwner() {
    return this.http.post('http://localhost:8081/api/owners', this.owner).subscribe((data: Owner ) => this.owners.push(data));
  }
  deleteCompany(idCompany: string) {
    return this.http.delete(`http://localhost:8081/api/companies/${idCompany}`).subscribe((id: string) => {
      console.log(id);
      this.getDataCompany();
    });
  }
  deleteProduct(idProduct: string) {
    return this.http.delete(`http://localhost:8081/api/products/${idProduct}`).subscribe((id: string) => {
      console.log(id);
      this.getDataProduct();
    } );
  }
  deleteOwner(idOwner: string) {
    return this.http.delete(`http://localhost:8081/api/owners/${idOwner}`).subscribe((id: string) => {
      console.log(id);
      this.getDataOwner();
    });
  }
  updateCompany(idCompany: string) {
    return this.http.put( `http://localhost:8081/api/companies/${idCompany}`, this.company).subscribe((data: Company) => {
      this.getDataCompany();
      console.log(this.company);
    });
  }
  updateProduct(idProduct: string) {
    return this.http.put (`http://localhost:8081/api/products/${idProduct}`, this.product).subscribe((data: Product) => {
      this.getDataProduct();
      console.log(this.product);
    });
  }
  updateOwner(idOwner: string) {
    return this.http.put (`http://localhost:8081/api/owners/${idOwner}`, this.owner).subscribe((data: Owner) => {
      this.getDataOwner();
      console.log(this.owner);
    });
  }

}
