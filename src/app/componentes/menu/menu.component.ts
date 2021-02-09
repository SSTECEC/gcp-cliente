import { Component, Input, OnInit } from '@angular/core';
import { SessionService } from '../../service/session/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() usuario : any = {
    "idUsuario":null,
    "usuario": null,
    "email":null,
    "contrasena":null,
    "foto":null,
    "idRol":null,
    "Rol":null
  }

  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.session.cerrarSesion();
  }

}
