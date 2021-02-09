import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session/session.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuario: any;
  constructor(public session: SessionService) { }

  ngOnInit(): void {
    this.usuario = this.session.obtenerDatos();
    console.log(this.usuario)
  }

}
