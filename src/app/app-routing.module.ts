import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'tenis',
    loadChildren: () => import('./tenis/tenis.module').then( m => m.TenisPageModule)
  },
  {
    path: 'blusa',
    loadChildren: () => import('./blusa/blusa.module').then( m => m.BlusaPageModule)
  },
  {
    path: 'camisa',
    loadChildren: () => import('./camisa/camisa.module').then( m => m.CamisaPageModule)
  },
  {
    path: 'calca',
    loadChildren: () => import('./calca/calca.module').then( m => m.CalcaPageModule)
  },  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
