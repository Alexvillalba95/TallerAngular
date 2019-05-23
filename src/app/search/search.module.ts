import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OwnerServiceService } from './owner-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { componentFactoryName } from '@angular/compiler';
import { ListOwnersComponentComponent } from '../list-owners-component/list-owners-component.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormOwnerComponent } from '../list-owners-component/form-owner/form-owner.component';

@NgModule({
  declarations: [FormSearchComponent, ListOwnersComponentComponent,FormOwnerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule ,
    HttpClientModule
  ],
  exports: [

    FormSearchComponent, ListOwnersComponentComponent,FormOwnerComponent,

  ],
  providers: [OwnerServiceService]
})
export class SearchModule { }
