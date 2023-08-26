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
    {nome: "KANE LS DRESS",
    descricao: "Cor: AZUL",
    valor: 450,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h13/h0f/h00/h00/11255512694814/4710000020001U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "MAMI WATA SS",
    descricao: "Cor: NUDE",
    valor: 450,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/hb5/he6/h00/h00/11237944885278/4707600050001U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "KESSEL SS CROOKED",
    descricao: "Cor: PRETO",
    valor: 400,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h96/h2e/h00/h00/11346383863838/4707600080001U-03-BASEIMAGE-Hires.jpg'
    },

    {nome: "SS ANAHEIM SPACE",
    descricao: "Cor: PRETO",
    valor: 400,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h5e/h57/h00/h00/11237935513630/4707600020001U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "WOVEN VANS X CURREN",
    descricao: "Cor: PRETO",
    valor: 320,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/hed/hcb/h00/h00/10819977150494/4702800310001U-01-BASEIMAGE-Hires.jpg'
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

