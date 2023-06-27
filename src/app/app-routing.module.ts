import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JuegosTodosComponent } from './components/seccion/juegos-todos/juegos-todos.component';
import { JuegosGeneroComponent } from './components/seccion/juegos-genero/juegos-genero.component';
import { JuegosFlataformaComponent } from './components/seccion/juegos-flataforma/juegos-flataforma.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'juegos-genero', component: JuegosGeneroComponent },
  { path: 'juegos-todos', component: JuegosTodosComponent },
  { path: 'juegos-plataforma', component: JuegosFlataformaComponent },
  { path: 'juegos-nuevos', component: JuegosTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
