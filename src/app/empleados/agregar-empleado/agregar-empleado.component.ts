import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
}

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  private titulo: string = 'Agregar empleado';
  forma: FormGroup;
  nombre: FormControl;
  apellidoPat: FormControl;
  apellidoMat: FormControl;
  email: FormControl;
  matcher = new MyErrorStateMatcher();

  constructor(
    private _usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.nombre = new FormControl('', [Validators.required, Validators.minLength(2)] );
    this.apellidoPat = new FormControl('', [Validators.required, Validators.minLength(2)] );
    this.apellidoMat = new FormControl('', [Validators.required, Validators.minLength(2)] );
    this.email = new FormControl('', [Validators.required, Validators.email] );
  }

  createForm(){
    this.forma = new FormGroup({
      nombre: this.nombre,
      apellidoPat: this.apellidoPat,
      apellidoMat: this.apellidoMat,
      email: this.email
    });
  }

  enviar() {

    if ( this.forma.valid ) {

      const usuario: any = {
        "id": String( Math.floor(Math.random() * (1000 - 1)) + 1 ),
        "data": {
            "nombre": this.forma.value.nombre,
            "apellidoPat": this.forma.value.apellidoPat,
            "apellidoMat": this.forma.value.apellidoMat,
            "email": this.forma.value.email
        }
      };
      this._usuariosService.addUser( usuario ).subscribe( () => this.router.navigate(['empledos']) );
    }
  }

}
