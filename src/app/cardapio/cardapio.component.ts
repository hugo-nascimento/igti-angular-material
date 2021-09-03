import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoService } from '../pedido/pedido.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos: Produto[] = [];
  constructor(private httpClient: HttpClient, public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.httpClient.get<Produto[]>("http://localhost:3000/cardapio").subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  adicionaProduto(produto: Produto){
    this.pedidoService.adicionaProduto(produto);
  }

  get quantidadeTotal() {
    return this.pedidoService.getQuantidadeTotal();
  }

  get precoTotal() {
    return this.pedidoService.getPrecoTotal();
  }
}
