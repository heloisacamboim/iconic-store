export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Lipgloss Jelly baby',
    price: 20,
    description: 'Um gloss labial de alto brilho que dá volume instantâneo.',
    imagePath: './assets/7c628cce-5278-45e2-a016-f13ee35ad820.jpg'
  },
  {
    id: 2,
    name: 'Paleta de Sombras',
    price: 50,
    description: 'Paleta de sombras com acabamentos matte e cores neutras.',
    imagePath: './assets/83a43766-53dc-406c-b616-0c1d5548fdd1.jpg'
  },
  {
    id: 3,
    name: 'Lipgloss',
    price: 30,
    description: 'Um gloss em tons brilhantes em embalagens de edição limitada.',
    imagePath: './assets/102ab042-d807-4cb2-8bf7-0f464972c278.jpg'
  },
  {
    id: 4,
    name: 'Porta Pincéis',
    price: 60,
    description: 'O Porta Pincéis foi desenvolvido especialmente para guardar os seus pincéis de maquiagem.',
    imagePath: './assets/660ccfcc-2dc0-46ca-9bc6-11ef1e1a11c0.jpg'
  },
  {
    id: 5,
    name: 'Batom',
    price: 50,
    description: 'Uma fórmula de batom rica e cremosa com alta pigmentação em um acabamento matte.',
    imagePath: './assets/6225d5d4-02da-42d7-900d-9c76a9a9fca7.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
