import { Injectable } from '@angular/core';

export interface Adjunto {
  nombre: string;
  tamano: string;
}

export interface Aviso {
  id: number;
  titulo: string;
  resumen: string;
  contenidoHtml?: string;
  categoria: 'Mantenimiento' | 'Administración' | 'Convivencia' | 'Seguridad';
  fecha: string;
  imagen: string;
  guardado: boolean;
  prioridad: 'Alta' | 'Normal';
  autor?: string;
  adjuntos?: Adjunto[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private STORAGE_KEY = 'altos_del_bosque_avisos';

  // Datos iniciales de prueba
  private avisosIniciales: Aviso[] = [

    // =========================================================
    // AVISO 1 - MANTENIMIENTO
    // =========================================================

    {
      id: 1,

      titulo: 'Lavado preventivo de tanques de reserva de agua',

      resumen:
        'Se realizará lavado y desinfección preventiva en las Torres 1 y 2. Recomendamos almacenar agua para uso básico.',

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

      categoria: 'Mantenimiento',

      fecha: '18 de octubre de 2026',

      imagen:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000',

      guardado: false,

      prioridad: 'Alta',

      autor: 'Administración General - Eng. Mantenimiento',

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
    },


    // =========================================================
    // AVISO 2 - ADMINISTRACIÓN
    // =========================================================

    {
      id: 2,

      titulo: 'Convocatoria a Asamblea Ordinaria de Copropietarios',

      resumen:
        'Publicación del orden del día y balance financiero correspondiente al período anterior. Participación presencial y virtual.',

      contenidoHtml: `
        <p>
          Estimados residentes y copropietarios de la comunidad
          <strong>Altos del Bosque</strong>,
        </p>

        <p>
          El Consejo de Administración se permite convocar a todos los
          copropietarios a la
          <strong>Asamblea Ordinaria de Copropietarios</strong>,
          espacio en el cual se presentará el balance de gestión,
          los resultados financieros y los principales temas relacionados
          con la administración de la copropiedad.
        </p>

        <h3>1. Información de la Asamblea</h3>

        <ul>
          <li>
            <strong>Fecha:</strong>
            28 de octubre de 2026.
          </li>

          <li>
            <strong>Hora:</strong>
            7:00 p.m.
          </li>

          <li>
            <strong>Modalidad:</strong>
            Presencial y virtual.
          </li>

          <li>
            <strong>Lugar:</strong>
            Salón social de Altos del Bosque.
          </li>
        </ul>

        <h3>2. Temas principales</h3>

        <p>
          Durante la reunión se tratarán los principales asuntos relacionados
          con la gestión de la copropiedad y se presentará la información
          correspondiente al período anterior.
        </p>

        <ul>
          <li>
            Presentación del informe de gestión del Consejo de Administración.
          </li>

          <li>
            Presentación y revisión del balance financiero.
          </li>

          <li>
            Revisión de proyectos y actividades realizadas.
          </li>

          <li>
            Presentación de propuestas para el siguiente período.
          </li>

          <li>
            Espacio para preguntas y participación de los copropietarios.
          </li>
        </ul>

        <h3>3. Recomendaciones</h3>

        <p>
          Se recomienda a los copropietarios revisar previamente la información
          suministrada por la administración y participar activamente en la
          reunión.
        </p>

        <p>
          Para quienes participen de manera virtual, el enlace de acceso será
          comunicado previamente por los canales oficiales de la copropiedad.
        </p>

        <p>
          Agradecemos su participación y compromiso con la comunidad
          <strong>Altos del Bosque</strong>.
        </p>
      `,

      categoria: 'Administración',

      fecha: '15 de octubre de 2026',

      imagen:
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1000',

      guardado: true,

      prioridad: 'Alta',

      autor: 'Consejo de Administración',

      adjuntos: []
    }
  ];


  constructor() {
    this.inicializarDatos();
  }


  // =========================================================
  // INICIALIZAR DATOS
  // =========================================================

  private inicializarDatos(): void {

    const data = localStorage.getItem(this.STORAGE_KEY);

    if (!data) {

      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this.avisosIniciales)
      );

    }

  }


  // =========================================================
  // OBTENER TODOS LOS AVISOS
  // =========================================================

  getAvisos(): Aviso[] {

    const data = localStorage.getItem(this.STORAGE_KEY);

    return data ? JSON.parse(data) : [];

  }


  // =========================================================
  // OBTENER UN AVISO POR ID
  // =========================================================

  getAvisoById(id: number): Aviso | undefined {

    const avisos = this.getAvisos();

    return avisos.find(aviso => aviso.id === id);

  }


  // =========================================================
  // AGREGAR UN NUEVO AVISO
  // =========================================================

  addAviso(
    nuevoAviso: Omit<Aviso, 'id' | 'fecha' | 'guardado'>
  ): Aviso {

    const avisos = this.getAvisos();

    const idNuevo =
      avisos.length > 0
        ? Math.max(...avisos.map(aviso => aviso.id)) + 1
        : 1;


    const hoy = new Date();

    const fechaFormateada =
      `${hoy.getDate()} de ${
        hoy.toLocaleString('es-ES', { month: 'long' })
      } de ${hoy.getFullYear()}`;


    const avisoCompleto: Aviso = {

      ...nuevoAviso,

      id: idNuevo,

      fecha: fechaFormateada,

      guardado: false,

      imagen:
        nuevoAviso.imagen ||
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600'

    };


    avisos.unshift(avisoCompleto);

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(avisos)
    );


    return avisoCompleto;

  }


  // =========================================================
  // GUARDAR / QUITAR DE GUARDADOS
  // =========================================================

  toggleGuardar(id: number): void {

    const avisos = this.getAvisos();

    const index =
      avisos.findIndex(aviso => aviso.id === id);


    if (index !== -1) {

      avisos[index].guardado =
        !avisos[index].guardado;


      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(avisos)
      );

    }

  }

}