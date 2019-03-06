import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaCreateComponent } from './encuesta-create.component';

describe('EncuestaCreateComponent', () => {
  let component: EncuestaCreateComponent;
  let fixture: ComponentFixture<EncuestaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
