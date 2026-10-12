import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonBackButton,
  IonButtons
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  businessOutline,
  personCircleOutline,
  bookmarkOutline,
  bookmark,
  calendarOutline,
  timeOutline,
  documentAttachOutline,
  shareSocialOutline,
  arrowBackOutline,
  documentTextOutline
} from 'ionicons/icons';

import { NewsService, Aviso } from '../../services/news';


interface Adjunto {
  nombre: string;
  tamano: string;
}


@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.page.html',
  styleUrls: ['./detail-news.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonBackButton,
    IonButtons
  ]
})


export class DetailNewsPage implements OnInit {

  avisoId: number = 0;

  avisoGuardado: boolean = false;


  /*
   * Aviso inicial utilizado como estructura base.
   * El aviso real se carga desde NewsService
   * de acuerdo con el ID recibido en la URL.
   */
  aviso: Aviso & { adjuntos: Adjunto[] } = {

    id: 1,

    titulo: 'Lavado preventivo de tanques de reserva de agua potable',

    resumen:
      'Mantenimiento preventivo de los tanques de reserva de agua potable.',

    categoria: 'Mantenimiento',

    fecha: '18 de octubre de 2026',

    autor: 'Administración General - Eng. Mantenimiento',

    imagen:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000',

    prioridad: 'Alta',

    guardado: false,

    contenidoHtml: `
      <p>
        Estimados residentes y copropietarios de la comunidad
        <strong>Altos del Bosque</strong>,
      </p>

      <p>
        Nos dirigimos a ustedes para informarles que, en cumplimiento del
        cronograma de mantenimiento preventivo y la normativa sanitaria vigente
        para propiedades horizontales (Decreto 1575), se llevará a cabo el
        proceso anual de
        <strong>
          lavado, desinfección y mantenimiento técnico de los tanques de agua
          potable
        </strong>
        de la copropiedad.
      </p>

      <h3>1. Programación y Sectores Afectados</h3>

      <ul>
        <li>
          <strong>Fecha de ejecución:</strong>
          Sábado 24 de octubre de 2026.
        </li>

        <li>
          <strong>Horario del servicio:</strong>
          De 7:00 a.m. a 4:00 p.m.
        </li>

        <li>
          <strong>Sectores involucrados:</strong>
          Torres 1, 2 y zonas comunes generales.
        </li>
      </ul>

      <h3>2. Recomendaciones para los residentes</h3>

      <p>
        Durante la realización de estas labores, el suministro de agua potable
        será suspendido de manera continua. Les sugerimos tomar las siguientes
        precauciones:
      </p>

      <ul>
        <li>
          Almacenar suficiente agua en recipientes limpios para cubrir las
          necesidades básicas del hogar durante el día.
        </li>

        <li>
          Mantener cerradas las llaves de paso internas para evitar la entrada
          de sedimentos a la tubería cuando se reasigne el flujo.
        </li>

        <li>
          Evitar el uso de lavadoras y lavavajillas durante el horario indicado.
        </li>
      </ul>

      <p>
        Agradecemos de antemano su comprensión y colaboración para mantener
        en óptimas condiciones la infraestructura de nuestro conjunto
        residencial.
      </p>
    `,

    adjuntos: [
      {
        nombre: 'Circular_Oficial_Lavado_Tanques_2026.pdf',
        tamano: '1.2 MB'
      },
      {
        nombre: 'Certificado_Quimicos_Desinfeccion_SGS.pdf',
        tamano: '850 KB'
      }
    ]
  };


  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {

    addIcons({
      businessOutline,
      personCircleOutline,
      arrowBackOutline,
      calendarOutline,
      documentAttachOutline,
      documentTextOutline,
      shareSocialOutline,
      bookmarkOutline,
      bookmark,
      timeOutline
    });

  }


  ngOnInit(): void {

    /*
     * Obtener el ID que viene en la URL.
     *
     * Ejemplo:
     * /detail-news/1
     * /detail-news/2
     */

    const idParam = this.route.snapshot.paramMap.get('id');


    if (idParam) {

      this.avisoId = Number(idParam);


      /*
       * Buscar el aviso correspondiente en NewsService.
       */

      const avisoEncontrado =
        this.newsService.getAvisoById(this.avisoId);


      /*
       * Si el aviso existe, reemplazamos los datos
       * iniciales por los datos reales.
       */

      if (avisoEncontrado) {

        this.aviso = {
          ...avisoEncontrado,
          adjuntos: avisoEncontrado.adjuntos || []
        };


        /*
         * Mantener sincronizado el estado del botón
         * Guardar / Guardado.
         */

        this.avisoGuardado =
          avisoEncontrado.guardado;

      }


      console.log(
        'Cargando detalle del aviso ID:',
        this.avisoId
      );

    }

  }


  /*
   * Guardar o quitar el aviso de Guardados.
   */

  toggleGuardar(): void {

    this.newsService.toggleGuardar(this.avisoId);


    /*
     * Obtener nuevamente el aviso para conocer
     * su nuevo estado.
     */

    const avisoActualizado =
      this.newsService.getAvisoById(this.avisoId);


    if (avisoActualizado) {

      this.avisoGuardado =
        avisoActualizado.guardado;


      this.aviso = {
        ...avisoActualizado,
        adjuntos: this.aviso.adjuntos || []
      };

    }

  }

}