import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from 'ngx-pagination';

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MenuComponent } from './componentes/menu/menu.component';

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

import { ConnectionService } from './service/connection/connection.service';
import { SessionService } from './service/session/session.service';
import { GlobalsService } from './method/globals/globals.service';

// Load all required data for the ES locale
import '@progress/kendo-angular-intl/locales/es/all';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ProfesorRevComponent } from './profesor/profesor-rev/profesor-rev.component';
import { ProfesorRevListComponent } from './profesor/profesor-rev-list/profesor-rev-list.component';
import { InicioComponent } from './supervisor/inicio/inicio.component';
import { SupervisorRevComponent } from './supervisor/supervisor-rev/supervisor-rev.component';
import { SupervisorRevListComponent } from './supervisor/supervisor-rev-list/supervisor-rev-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SedeComponent,
    InicioSesionComponent,
    DepartamentoComponent,
    DepartamentoTiposComponent,
    DepartamentoInsumosComponent,
    InsumosComponent,
    ReservaComponent,
    MenuComponent,
    GestionUsuarioComponent,
    GestionRolComponent,
    ListadoReservaComponent,
    GestionReservaComponent,
    ProfesorRevComponent,
    ProfesorRevListComponent,
    InicioComponent,
    SupervisorRevComponent,
    SupervisorRevListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    ButtonsModule,
    SchedulerModule,
    DropDownsModule,
    GridModule,
    DateInputsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  /* providers: [ConnectionService, SessionService, GlobalsService,{ provide: LOCALE_ID, useValue: 'es-ES' }], */
  providers: [ConnectionService, SessionService, GlobalsService],
  bootstrap: [AppComponent],
  entryComponents : [MenuComponent],
})

export class AppModule { }
