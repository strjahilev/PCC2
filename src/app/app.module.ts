import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import {appRoutes} from './routes/router';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './service';
import {FormsModule} from '@angular/forms';
import { OwnersComponent } from './owners/owners.component';
import {JoinPipe} from './products/join.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    ProductsComponent,
    HomeComponent,
    OwnersComponent,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
