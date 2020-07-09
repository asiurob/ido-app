import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { NewAccountDialog } from './new-account/new-account.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginDialog } from './login/login.component';
import { LostAccountDialog } from './lost-account/lost-account.component';



@NgModule({
  declarations: [
    NewAccountDialog,
    LoginDialog,
    LostAccountDialog
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    NewAccountDialog,
    LoginDialog,
    LostAccountDialog
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: false
      }
    }
  ]
})
export class DialogControllerModule { }
