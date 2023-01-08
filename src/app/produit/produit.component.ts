import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {


  @Input() produit1 : Produit | undefined;

  @Output() monemetteur : EventEmitter<Produit> = new EventEmitter<Produit>();

  afficheName(){
    alert('test');
  }

  envoiNomProduit(){
    this.monemetteur.emit(this.produit1);
  }

  constructor(){

  }

}
