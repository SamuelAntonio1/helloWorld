import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcaPage } from './calca.page';

const routes: Routes = [
  {
    path: '',
    component: CalcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcaPageRoutingModule {}
