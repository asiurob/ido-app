import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountDialog } from './new-account.component';

describe('NewAccountDialog', () => {
  let component: NewAccountDialog;
  let fixture: ComponentFixture<NewAccountDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccountDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
