import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicFormComponent } from './mechanic-form.component';

describe('MechanicFormComponent', () => {
  let component: MechanicFormComponent;
  let fixture: ComponentFixture<MechanicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
