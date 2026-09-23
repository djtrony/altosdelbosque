import { Injectable } from '@angular/core';

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
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private STORAGE_KEY = 'altos_del_bosque_avisos';

  // Datos iniciales de prueba en caso de que localStorage esté vacío
  private avisosIniciales: Aviso[] = [
    {
      id: 1,
      titulo: 'Lavado preventivo de tanques de reserva de agua',
      resumen: 'Se realizará lavado y desinfección preventiva en las Torres 1 y 2. Recomendamos almacenar agua para uso básico.',
      contenidoHtml: '<p>Estimados residentes, el sábado de 7:00 am a 4:00 pm se realizará el lavado de tanques...</p>',
      categoria: 'Mantenimiento',
      fecha: '18 de octubre de 2026',
      imagen: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
      guardado: false,
      prioridad: 'Alta',
      autor: 'Administración General'
    },
    {
      id: 2,
      titulo: 'Convocatoria a Asamblea Ordinaria de Copropietarios',
      resumen: 'Publicación del orden del día y balance financiero correspondiente al período anterior. Participación presencial y virtual.',
      contenidoHtml: '<p>Se convoca a todos los copropietarios a la asamblea ordinaria de fin de año...</p>',
      categoria: 'Administración',
      fecha: '15 de octubre de 2026',
      imagen: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=600',
      guardado: true,
      prioridad: 'Alta',
      autor: 'Consejo de Administración'
    }
  ];

  constructor() {
    this.inicializarDatos();
  }

  // Inicializa localStorage si es la primera vez que se abre la app
  private inicializarDatos() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.avisosIniciales));
    }
  }

  // Obtener todos los avisos
  getAvisos(): Aviso[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  // Obtener un solo aviso por ID
  getAvisoById(id: number): Aviso | undefined {
    const avisos = this.getAvisos();
    return avisos.find(a => a.id === id);
  }

  // Agregar un nuevo aviso desde add-news
  addAviso(nuevoAviso: Omit<Aviso, 'id' | 'fecha' | 'guardado'>): Aviso {
    const avisos = this.getAvisos();
    const idNuevo = avisos.length > 0 ? Math.max(...avisos.map(a => a.id)) + 1 : 1;
    
    const hoy = new Date();
    const fechaFormateada = `${hoy.getDate()} de ${hoy.toLocaleString('es-ES', { month: 'long' })} de ${hoy.getFullYear()}`;

    const avisoCompleto: Aviso = {
      ...nuevoAviso,
      id: idNuevo,
      fecha: fechaFormateada,
      guardado: false,
      imagen: nuevoAviso.imagen || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600'
    };

    avisos.unshift(avisoCompleto); // Insertar al inicio de la lista
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(avisos));
    return avisoCompleto;
  }

  // Alternar el estado de guardado (Favoritos)
  toggleGuardar(id: number) {
    const avisos = this.getAvisos();
    const index = avisos.findIndex(a => a.id === id);
    if (index !== -1) {
      avisos[index].guardado = !avisos[index].guardado;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(avisos));
    }
  }
}