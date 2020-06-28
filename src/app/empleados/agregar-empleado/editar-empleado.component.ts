import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched ));
  }
}

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  private titulo: string = 'Editar empleado';
  forma: FormGroup;
  nombre: FormControl;
  apellidoPat: FormControl;
  apellidoMat: FormControl;
  email: FormControl;
  matcher = new MyErrorStateMatcher();

  constructor(
    private activatedRoute: ActivatedRoute,
    private _usuariosService: UsuariosService
  ) {
    this.activatedRoute.params.subscribe( params => {
      const id = params[ 'id' ];
      this.obtenerUser( id );
    });
  }

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

  obtenerUser( id: string ) {
    this._usuariosService.getUser( id ).subscribe( ( resp: any ) => {
      this.forma.controls['nombre'].setValue( resp.data.nombre );
      this.forma.controls['apellidoPat'].setValue( resp.data.apellidoPat );
      this.forma.controls['apellidoMat'].setValue( resp.data.apellidoMat );
      this.forma.controls['email'].setValue( resp.data.email );
    });
  }

  enviar() {

    console.log( "Editar" );

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
      this._usuariosService.updateUser( usuario ).subscribe();

    }

  }

}
