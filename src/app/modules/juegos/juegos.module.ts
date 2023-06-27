import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoCardComponent } from '../../components/seccion/juego-card/juego-card.component';
import { JuegosTodosComponent } from '../../components/seccion/juegos-todos/juegos-todos.component';
import { JuegosFlataformaComponent } from '../../components/seccion/juegos-flataforma/juegos-flataforma.component';
import { JuegosGeneroComponent } from '../../components/seccion/juegos-genero/juegos-genero.component';

@NgModule({
  declarations: [JuegoCardComponent, JuegosTodosComponent, JuegosFlataformaComponent, JuegosGeneroComponent],
  imports: [
    CommonModule
  ]
})
export class JuegosModule { }
