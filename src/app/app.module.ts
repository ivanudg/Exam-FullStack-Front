import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListaEmpleadosComponent } from './empleados/lista-empleados/lista-empleados.component';
import { AgregarEmpleadoComponent } from './empleados/agregar-empleado/agregar-empleado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EditarEmpleadoComponent } from './empleados/agregar-empleado/editar-empleado.component';

// Services
import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaEmpleadosComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ UsuariosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
