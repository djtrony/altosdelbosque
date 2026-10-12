import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.page').then( m => m.ContactoPage)
  },
  {
    path: 'detail-news/:id',
    loadComponent: () => import('./pages/detail-news/detail-news.page').then( m => m.DetailNewsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'add-news',
    loadComponent: () => import('./pages/add-news/add-news.page').then( m => m.AddNewsPage)
  },
  {
    path: 'catg-news',
    loadComponent: () => import('./pages/catg-news/catg-news.page').then( m => m.CatgNewsPage)
  },
  {
    path: 'guardados',
    loadComponent: () => import('./pages/guardados/guardados.page').then( m => m.GuardadosPage)
  },
];
