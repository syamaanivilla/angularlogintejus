import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LoginPageComponent } from './login-page/login-page.component';

import { LoginServiceService } from './login-service.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
