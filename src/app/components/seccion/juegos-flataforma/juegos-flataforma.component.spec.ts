import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosFlataformaComponent } from './juegos-flataforma.component';

describe('JuegosFlataformaComponent', () => {
  let component: JuegosFlataformaComponent;
  let fixture: ComponentFixture<JuegosFlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosFlataformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosFlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
