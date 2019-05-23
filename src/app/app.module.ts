import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TestService } from './test.service';
import { FormSearchComponent } from './search/form-search/form-search.component';
import { SearchModule } from './search/search.module';
import { CommonModule } from '@angular/common';
import { ListOwnersComponentComponent } from './list-owners-component/list-owners-component.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    SearchModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
