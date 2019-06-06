import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ListOwnerComponent } from './search/list-owner/list-owner.component';
import { OwnerComponent } from './search/owner/owner.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'list-owner',
    component: ListOwnerComponent
  },
  {
    path: 'owner/:id',
    component: OwnerComponent
  },
  {
    path: 'owners-add',
    component: FormOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
