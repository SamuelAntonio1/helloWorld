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
    {nome: "OLD SKOOL BLACK PEWTER",
    descricao: "Cor: CINZA",
    valor: 300,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1a/hf8/h00/h00/10222598946846/1002001070173U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "OLD SKOOL BLACK PEWTER",
    descricao: "Cor: BRANCO",
    valor: 250,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h5e/h37/h00/h00/11319268737054/1002001070010U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "VANS CLASSIC",
    descricao: "Cor: CINZA",
    valor: 400,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h67/ha8/h00/h00/10805411250206/4701000830006U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "VANS CLASSIC",
    descricao: "Cor: VERMELHO",
    valor: 400,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h62/h40/h00/h00/11416201232414/4703700020001U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "VANS CLASSIC",
    descricao: "Cor: AZUL",
    valor: 400,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h95/h42/h00/h00/11508558528542/4701603200014U-01-BASEIMAGE-Hires.jpg'
    }
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
}

