import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonIcon 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  businessOutline, personCircleOutline, documentTextOutline, 
  cloudUploadOutline, alertCircleOutline, arrowBackOutline, checkmarkCircleOutline 
} from 'ionicons/icons';
import { NewsService } from '../../services/news';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.page.html',
  styleUrls: ['./add-news.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink,
    IonContent, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonIcon
  ]
})
export class AddNewsPage implements OnInit {

  comunicado = {
    titulo: '',
    categoria: 'Mantenimiento' as 'Mantenimiento' | 'Administración' | 'Convivencia' | 'Seguridad',
    prioridad: 'Normal' as 'Alta' | 'Normal',
    resumen: '',
    contenidoHtml: '',
    autor: 'Administración General',
    imagen: ''
  };

  archivosSeleccionados: string[] = [];
  publicadoExito = false;

  constructor(private router: Router, private newsService: NewsService) {
    addIcons({
      businessOutline,
      personCircleOutline,
      documentTextOutline,
      cloudUploadOutline,
      alertCircleOutline,
      arrowBackOutline,
      checkmarkCircleOutline
    });
  }

  ngOnInit() { }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.archivosSeleccionados = [];
    for (let i = 0; i < files.length; i++) {
      this.archivosSeleccionados.push(files[i].name);
    }
  }

  guardarComunicado() {
    if (this.comunicado.titulo && this.comunicado.resumen) {
      // Guardar en localStorage a través del servicio
      this.newsService.addAviso(this.comunicado);
      
      this.publicadoExito = true;

      // Redirigir al catálogo de avisos tras 1.5 segundos
      setTimeout(() => {
        this.router.navigate(['/catg-news']);
      }, 1500);
    }
  }

}