import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocoesPageRoutingModule } from './promocoes-routing.module';

import { PromocoesPage } from './promocoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocoesPageRoutingModule
  ],
  declarations: [PromocoesPage]
})
export class PromocoesPageModule {}
