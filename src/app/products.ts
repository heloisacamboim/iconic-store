export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Batom',
    price: 799,
    description: 'Batom vermelho'
  },
  {
    id: 2,
    name: 'Sombra',
    price: 699,
    description: 'Paleta de sombra para os olhos'
  },
  {
    id: 3,
    name: 'Rímel',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/