import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  totalCarrinho = 0;
  listaItens : any [] = [];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  buscarItensCarrinho(){
    this.listaItens = this.bdtemp.buscar('carrinho');
    this.totalCarrinho = this.bdtemp.buscar('totalCarrinho');
  }
  //é chamado toda vez que a tela vai aparecer
  ionViewWillEnter(){
    this.buscarItensCarrinho();
  }

  removeProdutoCarrinho(posicao: number){

    this.bdtemp.removeProdutoCarrinho(posicao);
    this.buscarItensCarrinho();
  }

  limparCarrinho(){

    this.bdtemp.limparCarrinho();

    this.buscarItensCarrinho();
  }

}
