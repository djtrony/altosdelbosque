import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonIcon 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  businessOutline, personCircleOutline, locationOutline, callOutline, 
  mailOutline, timeOutline, personOutline, lockClosedOutline, checkmarkCircleOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink,
    IonContent, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonIcon
  ]
})
export class ContactoPage implements OnInit {

  pqrs = {
    nombre: '',
    email: '',
    unidad: 'Torre 2 - Apto 501',
    tipoSolicitud: 'Petición',
    mensaje: '',
    aceptaTerminos: false
  };

  enviado = false;

  constructor() {
    // Registrar todos los íconos que utiliza la vista de contacto
    addIcons({
      businessOutline,
      personCircleOutline,
      locationOutline,
      callOutline,
      mailOutline,
      timeOutline,
      personOutline,
      lockClosedOutline,
      checkmarkCircleOutline
    });
  }

  ngOnInit() { }

  enviarFormulario() {
    if (this.pqrs.aceptaTerminos && this.pqrs.nombre && this.pqrs.email) {
      this.enviado = true;
      console.log('Solicitud radicada:', this.pqrs);
    }
  }

}