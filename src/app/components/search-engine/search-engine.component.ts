import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent implements OnInit {

  form: FormGroup;
  filteredStates: Observable<string[]>;

  states: string[] = [
    'Aguascalientes', 'Baja california', 'Baja california sur',
    'Campeche', 'CDMX', 'Chiapas',
    'Chihuahua', 'Coahuila', 'Colima',
    'Durango', 'Estado de México',
    'Guanajuato', 'Guerrero', 'Hidalgo',
    'Jalisco', 'Michoacán', 'Morelos',
    'Nayarit', 'Nuevo León', 'Oaxaca',
    'Puebla', 'Querétaro', 'Quintana Roo',
    'San Luis Potosí', 'Sinaloa', 'Sonora',
    'Tabasco', 'Tamaulipas', 'Tlaxcala',
    'Veracruz', 'Yucatán', 'Zacatecas'
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl( null, [ Validators.required ] ),
      state: new FormControl( null )
    });

    this.filteredStates = this.form.get('state').valueChanges
    .pipe(
      startWith(''),
      map( state => state ? this._filterStates( state ) : this.states.slice() )
    );
  }

  private _filterStates(value: string): string[] {
    const filterValue = this.cleanState( value );
    return this.states.filter(state => this.cleanState( state ).indexOf(filterValue) === 0);
  }


  search(): void {
    if ( this.form.valid ) {
      const values = this.form.value;
      console.log( values );
    }
  }

  cleanState( value: string ): string {
    return value.trim().toLowerCase();
  }
}
