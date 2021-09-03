import { Produto } from './../produto';
import { Injectable } from '@angular/core';

interface ItemPedido {
  produto: Produto,
  quantidade: number
}

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  itens: ItemPedido[] = [];

  adicionaProduto(produto: Produto) {
    const item = this.itens.find(item => item.produto.descricao == produto.descricao);
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({
        produto: produto,
        quantidade: 1
      });
    }
  }

  getQuantidadeTotal() {
    let total = 0;
    for (let item of this.itens) {
      total += item.quantidade;
    }
    return total;
  }

  getPrecoTotal() {
    let total = 0;
    for (let item of this.itens) {
      total += item.quantidade * item.produto.preco;
    }
    return total;
  }

  limpa() {
    this.itens = [];
  }
}
