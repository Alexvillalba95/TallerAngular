import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSearchComponent } from './search/form-search/form-search.component';
import { ListOwnersComponentComponent } from './list-owners-component/list-owners-component.component';
import { FormOwnerComponent } from './list-owners-component/form-owner/form-owner.component';


const routes: Routes = [

  {
    path: 'search',
    component: FormSearchComponent
  },

  {
    path: 'owners-add',
    component: FormOwnerComponent
  },

  
  {
    path: 'owner/:id',
    component: ListOwnersComponentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
