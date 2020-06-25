import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesControllerComponent } from './pages-controller.component';

describe('PagesControllerComponent', () => {
  let component: PagesControllerComponent;
  let fixture: ComponentFixture<PagesControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
