
import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.page.html',
  styleUrls: ['./tenis.page.scss'],
})
export class TenisPage implements OnInit {


  qtdeItensCarrinho = 0;


  listaProdutos = [
    {nome: "AUTHENTIC",
    descricao: "Cor: VINHO",
    valor: 400,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/hed/hc4/h00/h00/11346390745118/1002000450143U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "ERA",
    descricao: "Cor: Preto",
    valor: 350,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h51/hfe/h00/h00/11319250780190/1002000650001U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "OLD SKOOL",
    descricao: "Cor: AZUL",
    valor: 450,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h06/hd5/h00/h00/11319276077086/1002001070009U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "SLIP-ON",
    descricao: "Cor: BRANCO",
    valor: 500,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h63/h45/h00/h00/11319266902046/1002000580085U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "SK8-HI",
    descricao: "Cor: PRETO",
    valor: 350,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/he8/hf8/h00/h00/11319246749726/1002001230081U-01-BASEIMAGE-Hires.jpg'
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

