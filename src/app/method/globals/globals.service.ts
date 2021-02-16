import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({providedIn: 'root'})

export class GlobalsService {

  constructor() { }

  public validarModalCrearSede(fmrSede: any, formularioDo:any){
    
    var validacion = true;
    if (fmrSede.nombre == ""){
      validacion = false;
      this.notificacion("Ingresar el nombre de la Sede", 'error', 'top' );
    }else if (fmrSede.nombre.length <= 5) {
      validacion = false;
      this.notificacion("El nombre ingresado es muy corto", 'error', 'top' ); 
    }else if (fmrSede.direccion == "") {
      validacion = false;
      this.notificacion("Ingresar la dirección", 'error', 'top' );
    } else if (fmrSede.direccion.length <= 5) {
      validacion = false;
      this.notificacion("La dirección ingresada es muy corta", 'error', 'top' ); 
    } else if (formularioDo.secciones == "") {
      validacion = false;
      this.notificacion("Ingresar el numero de secciones", 'error', 'top' ); 
    } else if (formularioDo.pisos == "") {
      validacion = false;
      this.notificacion("Ingresar el numero de pisos", 'error', 'top' ); 
    } else {
      validacion = true;
    }
    return validacion;
  }

  public validarModalActualizarSede(fmrSede: any){
    
    var validacion = true;
    if (fmrSede.nombre == ""){
      validacion = false;
      this.notificacion("Ingresar el nombre de la Sede", 'error', 'top' );
    } else if (fmrSede.nombre.length <= 5) {
      validacion = false;
      this.notificacion("El nombre ingresado es muy corto", 'error', 'top' ); 
    } else if (fmrSede.direccion == "") {
      validacion = false;
      this.notificacion("Ingresar la dirección", 'error', 'top' );
    } else if (fmrSede.direccion.length <= 5) {
      validacion = false;
      this.notificacion("La dirección ingresada es muy corta", 'error', 'top' ); 
    } else {
      validacion = true;
    }
    return validacion;
  }

  public validarModalCrearUsuario(formulario: any){
    var validacion = true;
    if (formulario.usuario == "") {
      validacion = false;
      this.notificacion("Ingresar el nombre del usuario", 'error', 'top' );
    } else if (formulario.usuario.length <= 5) {
      validacion = false;
      this.notificacion("El nombre ingresado es muy corto", 'error', 'top' );
    } else if (formulario.identificacion == "") {
      validacion = false;
      this.notificacion("La cédula ingresada no posee 10 dígitos", 'error', 'top' );
    } else if (formulario.identificacion.length != 10) {
      validacion = false;
      this.notificacion("La cédula ingresada no posee 10 dígitos", 'error', 'top' );
    } else if (!this.validarEmail(formulario.email)) {
      validacion = false;
      this.notificacion("EL correo ingresado no posee el formato correcto", 'error', 'top' );
    } else if (formulario.password == "") {
      validacion = false;
      this.notificacion("El campo password es obligatorio", 'error', 'top' );
    } else if (formulario.password.length <= 5) {
      validacion = false;
      this.notificacion("La contraseña es demasiado corta", 'error', 'top' );
    } else {
      validacion = true;
    }
    return validacion;
  }

  public validarModalActualizarUsuario(formulario : any){
    var validacion = true;
    if (formulario.usuario == "") {
      validacion = false;
      this.notificacion("Ingresar el nombre del profesor", 'error', 'top' );
    } else if (formulario.usuario.length <= 5) {
      validacion = false;
      this.notificacion("El nombre ingresado es muy corto", 'error', 'top' );
    } else if (formulario.identificacion == "") {
      validacion = false;
      this.notificacion("El campo cédula es obligatorio", 'error', 'top' );
    } else if (!this.validarEmail(formulario.email)) {
      validacion = false;
      this.notificacion("EL correo ingresado no posee el formato correcto", 'error', 'top' );
    } else {
      validacion = true;
    }
    return validacion;
  }

  public validarModalGuardarInsumo(formulario : any){
    var validacion = true;
    if(formulario.nombre == ""){
      validacion = false;
      this.notificacion("Ingresar el nombre del insumo", 'error', 'top' );
    } else if(formulario.caracteristicas == ""){
      validacion = false;
      this.notificacion("Ingresar la caracteristica del insumo", 'error', 'top' );
    } else if(formulario.cantidad ==""){
      validacion = false;
      this.notificacion("Ingresar la cantidad del insumo", 'error', 'top' );
    } else if(formulario.cantidad  >=5000){
      validacion = false;
      this.notificacion("Ingresar una cantidad menor a 5000 en el insumo", 'error', 'top' );
    } else {
      validacion = true;
    }
    return validacion;
  }

  public validarModalActualizarInsumo(formulario : any){
    var validacion = true;
    if (formulario.nombre == "") {
      validacion = false;
      this.notificacion("El campo Nombre no puede estar vacio", 'error', 'top' );
    } else if (formulario.caracteristicas == "") {
      validacion = false;
      this.notificacion("El campo Caracteristicas no puede estar vacio", 'error', 'top' );
    } else {
      validacion = true;
    }
    return validacion;
  }

  public validarModalCrearTipoDepartamento(formulario : any){
    var validacion = true;
    if (formulario.nombre == "") {
      validacion = false;
      this.notificacion("El campo Nombre no puede estar vacio", 'error', 'top' );
    } else {
      validacion = true;
    }
    return validacion;
  }

  public validarModalGuardarDepartamento(formulario : any){
    var validacion = true;
    if(formulario.capacidad == "" || formulario.capacidad == 0){
      validacion = false;
      this.notificacion("El campo capacidad en obligatorio y no puede ser igual a 0", 'error', 'top' );
    } else if(formulario.nombre == "" ){
      validacion = false;
      this.notificacion("El campo nombre es obligatorio", 'error', 'top' );
    } else if(formulario.nombre.length <= 5 ){
      validacion = false;
      this.notificacion("El nombre ingresado es demasiado corto", 'error', 'top' );
    } else if(formulario.idTipoDepartamento == 0){
      validacion = false;
      this.notificacion("El campo tipo es obligatorio", 'error', 'top' );
    } else if(formulario.idSede == 0 ){
      validacion = false;
      this.notificacion("El campo sede es obligatorio", 'error', 'top' );
    } else if(formulario.idSedeDetalle == 0 ){
      validacion = false;
      this.notificacion("El campo sede detalle es oligatorio", 'error', 'top' );
    } else{
      validacion = true;
    }
    return validacion;
  }

  public validarModalAsignarInsumos(formulario : any){
    var validacion = true;
    if(formulario.idDepartamento == ""){
      validacion = false;
      this.notificacion("Debe seleccionar el departamento", 'error', 'top' );
    } else if(formulario.idInsumo == "" ){
      validacion = false;
      this.notificacion("Debe seleccionar el insumo a asignar", 'error', 'top' );
    } else if(formulario.cantidad == "" || formulario.cantidad == 0 ){
      validacion = false;
      this.notificacion("El campo cantidad no puede ser 0", 'error', 'top' );
    } else{
      validacion = true;
    }
    return validacion;
  }

  public alerta(titulo: any, texto: any, tipo: any) {
    Swal.fire({
      title: titulo,
      html: texto,
      icon: tipo,
      showConfirmButton: false,
      timer: 4000
    })
  }

  public alertaSinTiempo(titulo: any, texto: any, tipo: any) {
    Swal.fire({
      title: titulo,
      html: texto,
      icon: tipo,
      confirmButtonText: 'Aceptar'
    })
  }

  public notificacion(texto:any, tipo:any, posicion:any) {
    const Toast = Swal.mixin({
      toast: true,
      position: posicion,
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: false,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: tipo,
      title: texto
    })
  }

  public formatoCampo(valor: any, restriccion:any, caracteres:any, tipo:any) {
    var out = '';
    var filtro = '' + restriccion + '';
    for (var i = 0; i < valor.length; i++) {
      if (filtro.indexOf(valor.charAt(i)) != -1) {
        if (out.length >= caracteres) {
          out.substr(0, caracteres);
        } else {
          out += valor.charAt(i);
        }
      }
    }
    return (tipo == 1) ? out.toUpperCase() : out;
  }

  public numeroALetra(numero: any) {
    var letra = "";
    if (numero == 1) {
      letra = "A";
    } else if (numero == 2) {
      letra = "B";
    } else if (numero == 3) {
      letra = "C";
    } else if (numero == 4) {
      letra = "D";
    } else if (numero == 5) {
      letra = "E";
    } else if (numero == 6) {
      letra = "F";
    } else if (numero == 7) {
      letra = "G";
    } else if (numero == 8) {
      letra = "H";
    } else if (numero == 9) {
      letra = "I";
    } else if (numero == 10) {
      letra = "J";
    }
    return letra;
  }

  public agrupacion(xs:any, key:any) {
    return xs.reduce(function (valorAnterior:any, valorActual:any) {
      (valorAnterior[valorActual[key]] = valorAnterior[valorActual[key]] || []).push(valorActual);
      return valorAnterior;
    }, {});
  }
  
  public validarEmail(email:any) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

}