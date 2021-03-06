import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { SedeComponent } from './administrador/sede/sede.component';
import { DepartamentoComponent } from './administrador/departamento/departamento.component';
import { DepartamentoTiposComponent } from './administrador/departamento-tipos/departamento-tipos.component';
import { InsumosComponent } from './administrador/insumos/insumos.component';
import { GestionUsuarioComponent } from './administrador/gestion-usuario/gestion-usuario.component';
import { GestionRolComponent } from './administrador/gestion-rol/gestion-rol.component';
import { ListadoReservaComponent } from './administrador/listado-reserva/listado-reserva.component';
import { ReservaComponent } from './administrador/reserva/reserva.component';
import { DepartamentoInsumosComponent } from './administrador/departamento-insumos/departamento-insumos.component';
import { GestionReservaComponent } from './administrador/gestion-reserva/gestion-reserva.component';
import { ProfesorRevComponent } from './profesor/profesor-rev/profesor-rev.component';
import { ProfesorRevListComponent } from './profesor/profesor-rev-list/profesor-rev-list.component';
import { InicioComponent } from './supervisor/inicio/inicio.component';
import { SupervisorRevComponent } from './supervisor/supervisor-rev/supervisor-rev.component';
import { SupervisorRevListComponent } from './supervisor/supervisor-rev-list/supervisor-rev-list.component';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: '', component: InicioSesionComponent },
  { path: 'administrador/sede', component: SedeComponent },
  { path: 'administrador/departamento', component: DepartamentoComponent },
  { path: 'administrador/departamento/tipo', component: DepartamentoTiposComponent },
  { path: 'administrador/departamento/insumo', component: DepartamentoInsumosComponent },
  { path: 'administrador/insumo', component: InsumosComponent },
  { path: 'administrador/gestion/usuarios', component: GestionUsuarioComponent },
  { path: 'administrador/reserva', component: ReservaComponent },
  { path: 'administrador/listar/reserva', component: ListadoReservaComponent },
  { path: 'administrador/gestion/roles', component: GestionRolComponent },
  { path: 'administrador/cargar/reservas', component: GestionReservaComponent },
  { path: 'profesor/reserva', component: ProfesorRevComponent },
  { path: 'profesor/lista/reservas', component: ProfesorRevListComponent },
  { path: 'supervisor/inicio', component: InicioComponent },
  { path: 'supervisor/reserva', component: SupervisorRevComponent },
  { path: 'supervisor/lista/reservas', component: SupervisorRevListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
