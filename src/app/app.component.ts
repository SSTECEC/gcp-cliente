import { Component, OnInit } from '@angular/core';
import { GlobalsService } from './method/globals/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GCPVista';

  constructor(public session: GlobalsService) { }

  ngOnInit() {
    this.verificarInactividad();
  }

  verificarInactividad() {
    var t;
    window.onload = resetTimer;
    document.onkeypress = resetTimer;
    document.onmousemove
    function logout() {
      alert("El sistema se cierra por 15 minutos de inactividad.");
      location.href = '/';
    }
    function resetTimer() {
      clearTimeout(t);
      t = setTimeout(logout, 900000) //5 minutos de inactividad, tiempo en ms
    }
  }

}
