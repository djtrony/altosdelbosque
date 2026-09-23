import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonIcon 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  businessOutline, personCircleOutline, bookmarkOutline, bookmark, 
  calendarOutline, timeOutline, searchOutline 
} from 'ionicons/icons';
import { NewsService, Aviso } from '../../services/news';

@Component({
  selector: 'app-catg-news',
  templateUrl: './catg-news.page.html',
  styleUrls: ['./catg-news.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink,
    IonContent, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonIcon
  ]
})
export class CatgNewsPage implements OnInit {

  textoBusqueda = '';
  categoriaSeleccionada = 'Todos';
  categorias = ['Todos', 'Mantenimiento', 'Administración', 'Convivencia', 'Seguridad'];

  constructor(private newsService: NewsService) {
    addIcons({
      businessOutline,
      personCircleOutline,
      bookmarkOutline,
      bookmark,
      calendarOutline,
      timeOutline,
      searchOutline
    });
  }

  ngOnInit() { }

  // Cargar avisos actualizados desde localStorage
  get avisos(): Aviso[] {
    return this.newsService.getAvisos();
  }

  get catgNewsFiltrados(): Aviso[] {
    return this.avisos.filter(aviso => {
      const coincideCategoria = this.categoriaSeleccionada === 'Todos' || aviso.categoria === this.categoriaSeleccionada;
      const coincideTexto = aviso.titulo.toLowerCase().includes(this.textoBusqueda.toLowerCase()) || 
                            aviso.resumen.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      return coincideCategoria && coincideTexto;
    });
  }

  toggleGuardar(aviso: Aviso) {
    this.newsService.toggleGuardar(aviso.id);
  }
}