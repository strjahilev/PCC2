import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service';
import {NgForm} from '@angular/forms';
import {Company} from '../models/modelcompany';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getDataCompany();

  }
  resetForm(companyForm?: NgForm) {
    if (companyForm != null)
      companyForm.reset();
    this.httpService.company = {
      name: '',
      street: '',
      phone: ''
    };
  }

onSubmit(companyForm: NgForm) {
    if (companyForm.value.id == null) {
      this.httpService.postCompany();
      console.log(this.httpService.company);
    } else {
      this.httpService.updateCompany(companyForm.value.id);
      }
    this.resetForm();
  }
  delCompany(id: string) {
    this.httpService.deleteCompany(id);
    // this.httpService.getDataCompany();
  }
  showforedit(company: Company ) {
    this.httpService.company = Object.assign({}, company);
  }
}
