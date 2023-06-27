import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosNuevosComponent } from './juegos-nuevos.component';

describe('JuegosNuevosComponent', () => {
  let component: JuegosNuevosComponent;
  let fixture: ComponentFixture<JuegosNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosNuevosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
