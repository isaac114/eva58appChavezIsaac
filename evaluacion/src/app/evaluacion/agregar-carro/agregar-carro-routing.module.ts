import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarCarroPage } from './agregar-carro.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarCarroPageRoutingModule {}
