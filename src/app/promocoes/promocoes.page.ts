import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "NIKE TN",
    descricao: "Cor: PRETO",
    valor: 1000,
    foto: 'https://imgnike-a.akamaihd.net/1920x1920/024347ID.jpg'
    },

    {nome: "AIR MAX",
    descricao: "Cor: BRANCO",
    valor: 980,
    foto: 'https://imgcentauro-a.akamaihd.net/1300x1300/97888651.jpg'
    },

    {nome: "NIKE ZOON",
    descricao: "Cor: PRETO",
    valor: 400,
    foto: 'https://adaptive-images.uooucdn.com.br/ik-seo/tr:w-1100,h-1594,c-at_max,pr-true,q-90/a152-ofyzta/pv/f6/00/86/90b4f05ecd5496497df2ddc0e3/tenis-nike-air-zoom-vomero-16-masculino-1-large-2.jpg'
    },
  ];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);

    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
  }

  ionViewWillEnter(){
    this.buscarDadosCarrinho();
  }
}

