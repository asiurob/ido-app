import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lost-account',
  templateUrl: './lost-account.component.html',
  styleUrls: ['./lost-account.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class LostAccountDialog implements OnInit {

  form: FormGroup;
  googleHref = 'https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp';
  constructor(
    private dialogRef: MatDialogRef<LostAccountDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl( this.data.email, [ Validators.email ])
    });
  }

  dismiss( ret = false ): void {
    this.dialogRef.close( ret );
  }

}
