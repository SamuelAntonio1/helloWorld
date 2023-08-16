import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenisPage } from './tenis.page';

const routes: Routes = [
  {
    path: '',
    component: TenisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenisPageRoutingModule {}
