import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamisaPage } from './camisa.page';

const routes: Routes = [
  {
    path: '',
    component: CamisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisaPageRoutingModule {}
