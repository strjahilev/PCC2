import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service';
import {NgForm} from '@angular/forms';
import {Company} from '../models/modelcompany';
import {Owner} from '../models/modelowner';

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
  delOwner(id: string) {
    this.httpService.deleteOwner(id);
  }
  onSubmit(ownerForm: NgForm) {
    if (ownerForm.value.id == null) {
      this.httpService.postOwner();
      console.log(this.httpService.owner);
    } else {
      // this.httpService.updateOwner(ownerForm.value.id);
    }
    this.resetForm(ownerForm);
  }
  showforedit(owner: Owner ) {
    this.httpService.owner = Object.assign({}, owner);
  }
}
