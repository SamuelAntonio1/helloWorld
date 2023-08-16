import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlusaPageRoutingModule } from './blusa-routing.module';

import { BlusaPage } from './blusa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlusaPageRoutingModule
  ],
  declarations: [BlusaPage]
})
export class BlusaPageModule {}
