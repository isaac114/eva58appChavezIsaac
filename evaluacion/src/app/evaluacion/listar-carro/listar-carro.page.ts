import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Carro } from 'src/app/Domain/carro';
import { CarroServiceService } from 'src/app/service/carro-service.service';

@Component({
  selector: 'app-listar-carro',
  templateUrl: './listar-carro.page.html',
  styleUrls: ['./listar-carro.page.scss'],
})
export class ListarCarroPage implements OnInit {

  carros: any;
  carro: Carro = new Carro();
  carro2: Carro = new Carro();
  busqueda: any;

  constructor(private router: Router,
              private carroService: CarroServiceService) { }

  ngOnInit() {
    this.carros = this.carroService.getLibros();

  }

  buscar(){
    console.log(this.carro2.placa);
    this.busqueda = this.carroService.buscar(this.carro2.placa);
    console.log(this.busqueda);
  }

}
