import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-camisa',
  templateUrl: './camisa.page.html',
  styleUrls: ['./camisa.page.scss'],
})
export class CamisaPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "CAMISA NIKE REFLETIVA",
    descricao: "Cor: PRETO",
    valor: 250,
    foto: 'https://cf.shopee.com.br/file/b4a24ca437ee5cc3faebedd8f7c2861f'
    },

    {nome: "CAMISA NKE JORDAN ",
    descricao: "Cor: BRANCA",
    valor: 280,
    foto: 'https://youridstore.com.br/media/catalog/product/cache/1/image/1200x/472321edac810f9b2465a359d8cdc0b5/8/0/801074-101.jpg'
    },

    {nome: "CAMISA NIKE CLASSIC ",
    descricao: "Cor: Preto",
    valor: 150,
    foto: 'https://static3.tcdn.com.br/img/img_prod/868773/camiseta_nike_court_dry_top_ss_preta_791_1_9575e8fc6b9ce87308060640abbd201e.jpg'
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

