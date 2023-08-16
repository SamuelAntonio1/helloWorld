import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocoesPage } from './promocoes.page';

const routes: Routes = [
  {
    path: '',
    component: PromocoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocoesPageRoutingModule {}
