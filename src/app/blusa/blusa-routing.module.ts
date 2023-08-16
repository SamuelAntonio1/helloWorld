import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlusaPage } from './blusa.page';

const routes: Routes = [
  {
    path: '',
    component: BlusaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlusaPageRoutingModule {}
