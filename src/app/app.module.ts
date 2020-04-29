import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Importamos clase
// ctrl + space = help
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { articulo } from './components/articulos/articulos.component';
import {publicidadComponent} from './components/publicidad/publicidad.component';

@NgModule({
  // aqui van los componentes (para que angular vea los componentes que puede utlizar)
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    articulo,
    publicidadComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
