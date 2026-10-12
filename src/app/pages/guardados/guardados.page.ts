import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  bookmark,
  bookmarkOutline,
  calendarOutline,
  arrowForwardOutline
} from 'ionicons/icons';

import { NewsService, Aviso } from '../../services/news';

@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.page.html',
  styleUrls: ['./guardados.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonIcon
  ]
})
export class GuardadosPage {

  constructor(private newsService: NewsService) {
    addIcons({
      bookmark,
      bookmarkOutline,
      calendarOutline,
      arrowForwardOutline
    });
  }

  get avisosGuardados(): Aviso[] {
    return this.newsService
      .getAvisos()
      .filter(aviso => aviso.guardado);
  }

  quitarGuardado(id: number): void {
    this.newsService.toggleGuardar(id);
  }
}