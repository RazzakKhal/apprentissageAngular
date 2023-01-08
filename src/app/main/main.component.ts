import { Component } from '@angular/core';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
toto : any [];
produits : Produit[];
modale : Produit = {
  name : '',
  imageUrl : [],
  regular_price : 0

};
modaleVide : Produit = {
  name : '',
  imageUrl : [],
  regular_price : 0

};

constructor(){
  this.toto = ['titi', 'tata', 'kiki'];
  this.produits =  [
    {

      name: 'Robe à imprimé floral à nœud découpe',


      imageUrl: [
        '/assets/images/products/robe_1/1.webp',
        '/assets/images/products/robe_1/2.webp',
        '/assets/images/products/robe_1/3.webp',
        '/assets/images/products/robe_1/4.webp'
      ],

      regular_price: 2599,

    },
    {

      name: 'Robe portefeuille à volants fleuri',


      imageUrl: [
        '/assets/images/products/robe_2/1.webp',
        '/assets/images/products/robe_2/2.webp',
        '/assets/images/products/robe_2/3.webp',
        '/assets/images/products/robe_2/4.webp'
      ],

      regular_price: 2999,

    },
    {

      name: 'Robe fendue à fines brides avec boutons',


      imageUrl: [
        '/assets/images/products/robe_3/1.webp',
        '/assets/images/products/robe_3/2.webp',
        '/assets/images/products/robe_3/3.webp',
        '/assets/images/products/robe_3/4.webp'
      ],

      regular_price: 4599,

    },
    {

      name: 'Robe avec tulle à col carré évasé',


      imageUrl: [
        '/assets/images/products/robe_4/1.webp',
        '/assets/images/products/robe_4/2.webp',
        '/assets/images/products/robe_4/3.webp',
        '/assets/images/products/robe_4/4.webp'
      ],

      regular_price: 25599,

    },
    {

      name: 'Robe de bal ceinturée en mousseline avec manches papillon',


      imageUrl: [
        '/assets/images/products/robe_5/1.webp',
        '/assets/images/products/robe_5/2.webp',
        '/assets/images/products/robe_5/3.webp',
        '/assets/images/products/robe_5/4.webp'
      ],

      regular_price: 4999,

    },
    {

      name: 'Robe manches dolman plissé',


      imageUrl: [
        '/assets/images/products/robe_6/1.webp',
        '/assets/images/products/robe_6/2.webp',
        '/assets/images/products/robe_6/3.webp',
        '/assets/images/products/robe_6/4.webp'
      ],
      regular_price: 6399,

    },
    {

      name: 'Robe trapèze fleuri ceinturé',
      imageUrl: [
        '/assets/images/products/robe_7/1.webp',
        '/assets/images/products/robe_7/2.webp',
        '/assets/images/products/robe_7/3.webp',
        '/assets/images/products/robe_7/4.webp'
      ],
      regular_price: 9699,
    },
    {
      name: 'Robe à fines brides à imprimé tropical en dentelle',
      imageUrl: [
        '/assets/images/products/robe_8/1.webp',
        '/assets/images/products/robe_8/2.webp',
        '/assets/images/products/robe_8/3.webp',
        '/assets/images/products/robe_8/4.webp'
      ],
      regular_price: 6899,
    },
    {
      name: ' Robe à manches chauve-souris fendu fleuri',
      imageUrl: [
        '/assets/images/products/robe_9/1.webp',
        '/assets/images/products/robe_9/2.webp',
        '/assets/images/products/robe_9/3.webp',
        '/assets/images/products/robe_9/4.webp'
      ],
      regular_price: 7599,
    },
    {
      name: ' Robe à manches chauve-souris fendu fleuri',
      imageUrl: [
        '/assets/images/products/robe_10/1.webp',
        '/assets/images/products/robe_10/2.webp',
        '/assets/images/products/robe_10/3.webp',
        '/assets/images/products/robe_10/4.webp'
      ],
      regular_price: 8599,
    },
    {
      name: 'Robe moulante décolletée à paillettes à ruché métallique',
      imageUrl: [
        '/assets/images/products/robe_11/1.webp',
        '/assets/images/products/robe_11/2.webp',
        '/assets/images/products/robe_11/3.webp',
        '/assets/images/products/robe_11/4.webp'
      ],
      regular_price: 4699,
    },
    {
      name: 'Robe cache-cœur à imprimé avec nœud',
      imageUrl: [
        '/assets/images/products/robe_12/1.webp',
        '/assets/images/products/robe_12/2.webp',
        '/assets/images/products/robe_12/3.webp',
        '/assets/images/products/robe_12/4.webp'
      ],
      regular_price: 14299,
    }
  ];

}

afficheModale(resultat : Produit){
  this.modale = resultat;

}

fermela(mamodale : Produit){
  this.modale = mamodale;
}
}
