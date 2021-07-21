
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Carro } from '../Domain/carro';


@Injectable({
  providedIn: 'root'
})
export class CarroServiceService {

  constructor(public afs: AngularFirestore) { }

  save(carro: Carro){
    const refLibro = this.afs.collection("carros");

    if(carro.uid == null){
      carro.uid = this.afs.createId();
      carro.activo = true;
    }

    refLibro.doc(carro.uid).set(Object.assign({}, carro));
  }

  getLibros(): Observable<any[]>{
    return this.afs.collection("carros",
          ref => ref.where("activo","==",true)).valueChanges();
  }

  buscar(placa: any): Observable<any[]>{
    return this.afs.collection("carros",
          ref => ref.where("placa","==",placa)).valueChanges();
  }
  

}
