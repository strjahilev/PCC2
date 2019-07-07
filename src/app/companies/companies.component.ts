import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service';
import {NgForm} from '@angular/forms';

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
onSubmit(companyForm: NgForm) {
    this.httpService.postCompany();
    console.log(this.httpService.company);
  }
  delCompany(id: string) {
    this.httpService.deleteCompany(id);
    // this.httpService.getDataCompany();
  }
}
