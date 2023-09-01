import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-blusa',
  templateUrl: './blusa.page.html',
  styleUrls: ['./blusa.page.scss'],
})
export class BlusaPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "MOLETOM CINZA NKE",
    descricao: "Cor: CINZA",
    valor: 350,
    foto: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/bergally/catalog/vestuario/moletom-masculino/nike-classic/nike-classico-cinza.JPG'
    },

    {nome: "MOLETOM NIKE SB",
    descricao: "Cor: MARROM",
    valor: 150,
    foto: 'https://images.tcdn.com.br/img/img_prod/690339/moletom_nike_sb_icon_hoodie_khaki_10705_1_781359d38ba2a0875a5dc84a3dafdf16.jpg'
    },

      {nome: "MOLETOM NIKE BRANCO",
    descricao: "Cor: BRANCO",
    valor: 280,
    foto: 'https://images.tcdn.com.br/img/img_prod/743951/moletom_nike_sportsweae_essential_repel_masculino_9349_1_e894a7a5e3f3703360cd706b46312f9f.jpg'
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

