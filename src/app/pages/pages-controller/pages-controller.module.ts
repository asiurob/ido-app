import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesControllerRoutingModule } from './pages-controller-routing.module';
import { PagesControllerComponent } from './pages-controller.component';
import { NavbarModule } from '@components/navbar/navbar.module';


@NgModule({
  declarations: [PagesControllerComponent],
  imports: [
    CommonModule,
    PagesControllerRoutingModule,
    NavbarModule
  ]
})
export class PagesControllerModule { }
