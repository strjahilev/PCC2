import {Routes} from '@angular/router';
import {CompaniesComponent} from '../companies/companies.component';
import {ProductsComponent} from '../products/products.component';
import {HomeComponent} from '../home/home.component';
import {OwnersComponent} from '../owners/owners.component';


export const appRoutes: Routes = [
  {path: 'companies', component: CompaniesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'owners', component: OwnersComponent},
  {path: 'home', component: HomeComponent}
];
