import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private keyEncriptacion: string = "{cgp-yavirac-2020}";
  private keyCliente: string = "l:key";

  constructor(private router: Router, private spinner: NgxSpinnerService) { }

  cerrarSesion() {
    this.spinner.show();
    localStorage.removeItem(this.keyCliente);
    this.router.navigate(['/']);
    this.spinner.hide();
  }

  iniciarSesion(Usuario: any) {
    var datosCifrados = CryptoJS.AES.encrypt(JSON.stringify(Usuario), this.keyEncriptacion).toString();
    localStorage.setItem(this.keyCliente, datosCifrados);
    var rol = Usuario.Rol;

    if (rol == "ADMINISTRADOR") {
      this.router.navigate(['/administrador/sede']);
    } else if (rol == "RECTOR") {
      this.router.navigate(['/rector/inicio']);
    } else if (rol == "PROFESOR") {
      this.router.navigate(['/profesor/lista/reservas']);
    }
  }

  verificarCredencialesInicio() {
    var datos: any = localStorage.getItem(this.keyCliente);
    if (datos != null) {
      var bytes = CryptoJS.AES.decrypt(datos, this.keyEncriptacion);
      var datosPlanos = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      if (datosPlanos.Rol == "ADMINISTRADOR") {
        this.router.navigate(['/administrador/sede']);
      } else if (datosPlanos.Rol == "RECTOR") {
        this.router.navigate(['/rector/inicio']);
      } else if (datosPlanos.Rol == "PROFESOR") {
        this.router.navigate(['/profesor/lista/reservas']);
      }
    }
  }

  verificarCredencialesRutas() {
    var datos: any = localStorage.getItem(this.keyCliente);
    if (datos === null) {
      this.router.navigate(['/']);
    }
  }

  obtenerDatos() {
    var datos = localStorage.getItem(this.keyCliente);
    var datosPlanos: any;
    if (datos == null) {
      datosPlanos = { "mensaje": "No se ha iniciado sesión." };
    } else {
      var bytes = CryptoJS.AES.decrypt(datos, this.keyEncriptacion);
      datosPlanos = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return datosPlanos;
  }
}
