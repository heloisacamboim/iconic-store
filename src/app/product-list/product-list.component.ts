import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  adicionar() {
    window.alert('Produto adicionado ao carrinho!');
  }

  onNotify() {
    window.alert('Você será notificado quando esse produto voltar para o estoque.');
  }

  clicar() {
    debugger
    window.alert('Obrigado pelo contato!')
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
