import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getDataOwner();
    this.httpService.getDataCompany();
  }

  resetForm(ownerForm: NgForm) {
    if (ownerForm != null) {
      ownerForm.reset();
      this.httpService.owner = {
        name: '',
        companies: []
      };
    }
  }

  onSubmit(ownerForm: NgForm) {
    this.httpService.postOwner();
    this.resetForm(ownerForm);
  }
}
