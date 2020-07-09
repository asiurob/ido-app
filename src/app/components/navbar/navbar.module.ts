import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { SearchEngineModule } from '@components/search-engine/search-engine.module';
import { DialogControllerModule } from '@dialogs/dialog-controller.module';


@NgModule({
  declarations: [ NavbarComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    SearchEngineModule,
    DialogControllerModule
  ],
  exports: [ NavbarComponent ]
})
export class NavbarModule { }
