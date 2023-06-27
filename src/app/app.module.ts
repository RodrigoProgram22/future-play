import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import{ JuegosModule}from './modules/juegos/juegos.module';
@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, FooterComponent,],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,JuegosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
