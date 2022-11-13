import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { GoodComponent } from './good/good.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    GoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de-DE' // 'de-DE' for Germany, 'fr-FR' for France, 'ru-RU' for Russia  ...
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
