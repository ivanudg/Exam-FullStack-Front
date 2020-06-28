import { Routes, RouterModule } from '@angular/router';
import { ListaEmpleadosComponent } from './empleados/lista-empleados/lista-empleados.component';
import { AgregarEmpleadoComponent } from './empleados/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './empleados/agregar-empleado/editar-empleado.component';

const routes: Routes = [
    { path: 'empleados', component: ListaEmpleadosComponent },
    { path: 'agregarEmpleado', component: AgregarEmpleadoComponent },
    { path: 'editarEmpleado/:id', component: EditarEmpleadoComponent },
    { path: '**', redirectTo: 'empleados', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );

