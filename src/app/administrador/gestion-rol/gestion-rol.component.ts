import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalsService } from '../../method/globals/globals.service';
import { ConnectionService } from '../../service/connection/connection.service';
import { SessionService } from '../../service/session/session.service';

@Component({
  selector: 'app-gestion-rol',
  templateUrl: './gestion-rol.component.html',
  styleUrls: ['./gestion-rol.component.css']
})
export class GestionRolComponent implements OnInit {

  public usuario : any = {"idUsuario":1,"usuario":"Gabriela Andrango","email":"gaby@gmail.com","contrasena":"12345","foto":"data:image/png;base64,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","idRol":1,"Rol":"ADMINISTRADOR"};

  public lstRoles = [];

  public globales: GlobalsService = new GlobalsService();
  constructor(public session: SessionService, private spinner: NgxSpinnerService, private connection: ConnectionService) { }


  ngOnInit(): void {
    this.usuario = this.session.obtenerDatos();
    this.listarUsuarios();
  }

  public listarUsuarios() {
    this.spinner.show();
    this.connection.get("listarRoles", "").subscribe(
      (res: any) => {
        
        this.spinner.hide();
        this.lstRoles = res;
      },
      err => {
        console.log(err);
        this.spinner.hide();
        this.globales.notificacion("Error con el servicio de datos", "error", "top");
      }
    );
  }

}
