import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/app/Domain/carro';
import { CarroServiceService } from 'src/app/service/carro-service.service';

@Component({
  selector: 'app-agregar-carro',
  templateUrl: './agregar-carro.page.html',
  styleUrls: ['./agregar-carro.page.scss'],
})
export class AgregarCarroPage implements OnInit {

  carro: Carro = new Carro();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private carroService: CarroServiceService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.carro);
    this.carroService.save(this.carro);
    this.router.navigate(['listar-carro']);
  }

}
