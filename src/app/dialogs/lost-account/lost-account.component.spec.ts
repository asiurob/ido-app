import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostAccountComponent } from './lost-account.component';

describe('LostAccountComponent', () => {
  let component: LostAccountComponent;
  let fixture: ComponentFixture<LostAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
