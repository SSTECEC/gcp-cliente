import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { SessionService } from '../service/session/session.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalsService } from '../method/globals/globals.service';
import { ConnectionService } from '../service/connection/connection.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  public fmrInicioSesion: FormGroup;
  public globales: GlobalsService = new GlobalsService();
  constructor(public session: SessionService, private formBuilder: FormBuilder, private spinner: NgxSpinnerService, public connection: ConnectionService) { }

  ngOnInit(): void {
    this.fmrInicioSesion = this.formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(5), Validators.email]],
      contrasena: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  public verificarUsuario(fmrValores: any){
    if (this.fmrInicioSesion.controls.email.status == "INVALID") {
      this.globales.notificacion("Ingresar Correo Electrónico Válido", "warning", "top");
    } else if (this.fmrInicioSesion.controls.contrasena.status == "INVALID") {
      this.globales.notificacion("Ingresar Contraseña", "warning", "top");
    }else{
      this.spinner.show();
      this.connection.post("verificacionUsuario", fmrValores, "").subscribe(
        (res: any) => {
          
          if(res == null){
            this.globales.notificacion("Credenciales Incorrectas", "warning", "top");
          }else{

            var datos : any = {
              Rol: res.resultado.Rol,
              contrasena: res.resultado.contrasena,
              email: res.resultado.email,
              foto: res.resultado.foto,
              idRol: res.resultado.idRol,
              idUsuario: res.resultado.idUsuario,
              usuario: res.resultado.usuario,
              token : res.token
            }
            this.session.iniciarSesion(datos);
            this.spinner.hide();
          }
        },
        err => {
          console.log(err);
          this.spinner.hide();
          this.globales.notificacion("Error con el servicio de datos", "error", "top");
        }
      );
    }
  }

}
