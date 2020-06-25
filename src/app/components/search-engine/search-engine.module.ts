import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEngineComponent } from './search-engine.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchEngineComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ SearchEngineComponent ]
})
export class SearchEngineModule { }
