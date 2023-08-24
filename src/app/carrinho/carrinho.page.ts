import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  
  listaItens =[];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }
  
  buscarItensCarrinho(){
    this.listaItens = this.bdtemp.buscar('carrinho');
  }
  
  //é chamado toda vez que a tela vai aparecer
  ionViewWillEnter(){
    this.buscarItensCarrinho();
  }
}
