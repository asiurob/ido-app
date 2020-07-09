import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class LoginDialog implements OnInit {

  form: FormGroup;
  googleHref = 'https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp';
  constructor(
    private dialogRef: MatDialogRef<LoginDialog>
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl( null, [ Validators.email ]),
      password: new FormControl( null, [ Validators.required ] )
    });
  }

  dismiss( type: string ): void {
    const params = { type, email: this.form.value.email };
    this.dialogRef.close( params );
  }

}
