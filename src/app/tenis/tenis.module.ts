import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenisPageRoutingModule } from './tenis-routing.module';

import { TenisPage } from './tenis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenisPageRoutingModule
  ],
  declarations: [TenisPage]
})
export class TenisPageModule {}
