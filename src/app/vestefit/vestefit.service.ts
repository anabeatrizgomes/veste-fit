import { Injectable } from '@angular/core';
import { Mercadoria } from './mercadoria/mercadoria.model';


@Injectable({
  providedIn: 'root'
})
export class VestefitService {



  merc: Mercadoria[] =[
    {
      id: "top1",
      name: "TOP NADADOR ESTAMPA ANIMAL ",
      category:"Disponivel nos tamanhos: P,M,G",
      deliveryEstimate: "R$39,90",
      rating: 3.5,
      imagePath: "assets/img/vestefitt/top22.png"
    },
    {
      id: "burger-house",
      name: "TOP NADADOR ESTAMPA SNOW FLAKES ",
      category: "Disponivel nos tamanhos: P,M,G",
      deliveryEstimate: "R$39,90",
      rating: 4.9,
      imagePath: "assets/img/vestefitt/top11.png"
    },
    {
      id: "bread-bakery",
      name: "TOP NADADOR ESTAMPA GEOMETRIC",
      category: "Disponivel nos tamanhos: P,G",
      deliveryEstimate: "R$39,90",
      rating: 4.9,
      imagePath: "assets/img/vestefitt/top33.png"
    },
    {
      id: "top4",
      name: "TOP NADADOR ESTAMPA BRUSH COLORS",
      category: "Disponivel nos tamanhos: P,M,G",
      deliveryEstimate: "R$36,90",
      rating: 4.5,
      imagePath: "assets/img/vestefitt/top44.png"
    },
    {
      id: "top5",
      name: "TOP NADADOR ESTAMPA LITTLE POINTS",
      category: "Disponivel nos tamanhos: M,G",
      deliveryEstimate: "R$29,90",
      rating: 3.3,
      imagePath: "assets/img/vestefitt/top55.png"
    },
    {
      id: "top6",
      name: "TOP NADADOR ESTAMPA BLUE HOUR ",
      category: "Disponivel nos tamanhos: P,G",
      deliveryEstimate: "R$37,90",
      rating: 4.5,
      imagePath: "assets/img/vestefitt/top66.png"
    },
    {
      id: "top7",
      name: "TOP NADADOR  PINK BLUE GRADIENT ",
      category: "Disponivel nos tamanhos: P,M,G",
      deliveryEstimate: "R$39,90",
      rating: 4.9,
      imagePath: "assets/img/vestefitt/top77.png"
    },
    {
      id: "top8",
      name: "TOP NADADOR WINGS OF A BUTTERFLY",
      category: "Disponivel nos tamanhos: P,M,G",
      deliveryEstimate: "R$33,50",
      rating: 3.5,
      imagePath: "assets/img/vestefitt/top88.png"
    },
    {
      id: "cal??a1",
      name: "CAL??A LEGGING FITNESS ESTAMPA DIGITAL PINK SPLASH",
      category: "Disponivel nos tamanhos: P,M",
      deliveryEstimate: "R$57,90",
      rating: 4.9,
      imagePath: "assets/img/vestefitt/cal??a1.png"
    },
    {
      id: "cal??a2",
      name: "CAL??A LEGGING DIGITAL JUST WINE",
      category: "Disponivel nos tamanhos: P,M",
      deliveryEstimate: "R$49,90",
      rating: 4.5,
      imagePath: "assets/img/vestefitt/cal??a2.png"
    },
    {
      id: "cal??a3",
      name: "CAL??A LEGGING FITNESS ESTAMPA DIGITAL MILITAR LINE",
      category: "Disponivel nos tamanhos: P,G",
      deliveryEstimate: "R$48,90",
      rating: 3.3,
      imagePath: "assets/img/vestefitt/cal??a3.png"
    },
    {
      id: "cal??a4",
      name: "CAL??A LEGGING  GRAY GRADIENT ",
      category: "Disponivel nos tamanhos: G",
      deliveryEstimate: "R$49,60",
      rating: 4.5,
      imagePath: "assets/img/vestefitt/cal??a4.png"
    },
    {
      id: "cal??a5",
      name: "CAL??A LEGGING GEOMETRIC FLOWERS",
      category: "Disponivel nos tamanhos: M,G",
      deliveryEstimate: "R$59,90",
      rating: 4.9,
      imagePath: "assets/img/vestefitt/cal??a5.png"
    },
    {
      id: "cal??a6",
      name: "CAL??A LEGGING UNITED LINESY",
      category: "Disponivel nos tamanhos: P,M,G",
      deliveryEstimate: "R$59,90",
      rating: 3.5,
      imagePath: "assets/img/vestefitt/cal??a6.png"
    },
    {
      id: "short1",
      name: "SHORT ESTAMPA DIGITAL MILITAR WAVE ",
      category: "Disponivel nos tamanhos: P,M,G",
      deliveryEstimate: "R$39,90",
      rating: 4.9,
      imagePath: "assets/img/vestefitt/short1.png"
    },
    {
      id: "short2",
      name: "SHORT FITNESS ESTAMPA DIGITAL MARMORIZED",
      category: "Disponivel nos tamanhos: P,M",
      deliveryEstimate: "R$49,90",
      rating: 4.5,
      imagePath: "assets/img/vestefitt/short2.png"
    },
    {
      id: "short3",
      name: "SHORT MEIA PERNA ESTAMPA SNOW FLAKES",
      category: "Disponivel nos tamanhos: P,G",
      deliveryEstimate: "R$48,90",
      rating: 3.3,
      imagePath: "assets/img/vestefitt/short3.png"
    },
    {
      id: "short4",
      name: "SHORT ESTAMPA DIGITAL GRAY CHEVRON ",
      category: "Disponivel nos tamanhos: G",
      deliveryEstimate: "R$49,60",
      rating: 4.5,
      imagePath: "assets/img/vestefitt/short4.png"
    },
    {
      id: "short5",
      name: "SHORT MEIA PERNA ESTAMPA CASUAL MILITARY",
      category: "Disponivel nos tamanhos: M,G",
      deliveryEstimate: "R$39,90",
      rating: 4.9,
      imagePath: "assets/img/vestefitt/short5.png"
    },
    {
      id: "short6",
      name: "SHORT ESTAMPA DIGITAL PINKING MIX",
      category: "Disponivel nos tamanhos: P,M,G",
      deliveryEstimate: "R$30,90",
      rating: 3.5,
      imagePath: "assets/img/vestefitt/short6.png"
    }
  ];

  constructor() { }
  vestefit() : Mercadoria[] {
    return this.merc;
  }
}
