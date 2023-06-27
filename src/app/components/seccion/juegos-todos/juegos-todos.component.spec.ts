import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosTodosComponent } from './juegos-todos.component';

describe('JuegosTodosComponent', () => {
  let component: JuegosTodosComponent;
  let fixture: ComponentFixture<JuegosTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
