import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosGeneroComponent } from './juegos-genero.component';

describe('JuegosGeneroComponent', () => {
  let component: JuegosGeneroComponent;
  let fixture: ComponentFixture<JuegosGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
