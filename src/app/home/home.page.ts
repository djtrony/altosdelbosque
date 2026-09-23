import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonIcon, IonCol, IonRow, IonGrid, IonButton} from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonIcon, IonCol, IonRow, IonGrid, IonButton, RouterLink, RouterLinkActive],
})
export class HomePage {
  constructor() {}
}
