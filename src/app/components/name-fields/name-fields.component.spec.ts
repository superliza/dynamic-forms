import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameFieldsComponent } from './name-fields.component';

describe('NameFieldsComponent', () => {
  let component: NameFieldsComponent;
  let fixture: ComponentFixture<NameFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
