import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent {

@Input() mamodale : Produit | undefined;
@Output() fermeModale : EventEmitter<Produit> = new EventEmitter<Produit>();

  closeModale(){
    this.fermeModale.emit({
      name : "",
      regular_price : 0,
      imageUrl : []
    });
    }

}
