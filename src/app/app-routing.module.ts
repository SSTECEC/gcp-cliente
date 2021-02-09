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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
