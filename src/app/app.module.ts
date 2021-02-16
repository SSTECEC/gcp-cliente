import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SedeComponent } from './administrador/sede/sede.component';
import { SidebarComponent } from './complementos/sidebar/sidebar.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NavbarComponent } from './complementos/navbar/navbar.component';
import { ConnectionService } from './service/connection/connection.service';
import { SessionService } from './service/session/session.service';
import { GlobalsService } from './method/globals/globals.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { DepartamentoComponent } from './administrador/departamento/departamento.component';
import { DepartamentoTiposComponent } from './administrador/departamento-tipos/departamento-tipos.component';
import { InsumosComponent } from './administrador/insumos/insumos.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { MenuComponent } from './componentes/menu/menu.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

// Load all required data for the ES locale
import '@progress/kendo-angular-intl/locales/es/all';
import { GestionUsuarioComponent } from './administrador/gestion-usuario/gestion-usuario.component';
import { GestionRolComponent } from './administrador/gestion-rol/gestion-rol.component';
import { ListadoReservaComponent } from './administrador/listado-reserva/listado-reserva.component';
import { ReservaComponent } from './administrador/reserva/reserva.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DepartamentoInsumosComponent } from './administrador/departamento-insumos/departamento-insumos.component';
import { GestionReservaComponent } from './administrador/gestion-reserva/gestion-reserva.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

@NgModule({
  declarations: [
    AppComponent,
    SedeComponent,
    SidebarComponent,
    InicioSesionComponent,
    NavbarComponent,
    DepartamentoComponent,
    DepartamentoTiposComponent,
    DepartamentoInsumosComponent,
    InsumosComponent,
    ReservaComponent,
    MenuComponent,
    GestionUsuarioComponent,
    GestionRolComponent,
    ListadoReservaComponent,
    GestionReservaComponent
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
  providers: [ConnectionService, SessionService, GlobalsService,{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
  entryComponents : [MenuComponent],
})

export class AppModule { }
