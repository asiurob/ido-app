import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl( null, [ Validators.required ] )
    });

    console.log( this.form );
  }

}
