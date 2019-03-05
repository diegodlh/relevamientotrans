import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaResourceComponent } from './encuesta-resource.component';

describe('EncuestaResourceComponent', () => {
  let component: EncuestaResourceComponent;
  let fixture: ComponentFixture<EncuestaResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
