import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class NewAccountDialog implements OnInit {

  form: FormGroup;
  googleHref = 'https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp';
  constructor(
    private dialogRef: MatDialogRef<NewAccountDialog>
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl( null, [ Validators.email ]),
      password: new FormControl( null, [ Validators.required ] )
    });
  }

  dismiss( session = false ): void {
    this.dialogRef.close( session );
  }

}
