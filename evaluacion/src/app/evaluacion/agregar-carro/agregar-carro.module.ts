import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCarroPageRoutingModule } from './agregar-carro-routing.module';

import { AgregarCarroPage } from './agregar-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarCarroPageRoutingModule
  ],
  declarations: [AgregarCarroPage]
})
export class AgregarCarroPageModule {}
