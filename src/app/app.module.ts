import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { OwnerComponent } from './search/owner/owner.component';
import { HttpClientModule } from '@angular/common/http';
import { ListOwnerComponent } from './search/list-owner/list-owner.component';
import { HomeComponent } from './home/home.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OwnerComponent,
    ListOwnerComponent,
    HomeComponent,
    FormOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
