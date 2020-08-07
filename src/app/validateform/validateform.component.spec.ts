import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateformComponent } from './validateform.component';

describe('ValidateformComponent', () => {
  let component: ValidateformComponent;
  let fixture: ComponentFixture<ValidateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
