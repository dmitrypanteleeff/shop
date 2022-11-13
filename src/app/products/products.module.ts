import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products.component';
import { GoodComponent } from './good/good.component';



@NgModule({
  declarations: [ProductsComponent, GoodComponent],
  providers: [ProductsService],
  imports: [
    CommonModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
