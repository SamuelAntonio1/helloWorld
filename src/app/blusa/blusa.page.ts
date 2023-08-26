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
    {nome: "VANS CLASSIC CREW",
    descricao: "Cor: CINZA",
    valor: 300,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h23/h01/h00/h00/10786492973086/4701000820001U-01-BASEIMAGE-Hires.png'
    },

    {nome: "VANS CLASSIC CREW",
    descricao: "Cor: Preto",
    valor: 300,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/haf/h10/h00/h00/10786494414878/4701000820002U-01-BASEIMAGE-Hires.png'
    },

    {nome: "CORE BASIC CREW",
    descricao: "Cor: PRETO",
    valor: 280,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/hd0/h4d/h00/h00/11042047819806/4701002260001U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "VERSA STANDARD HOODIE",
    descricao: "Cor: CINZA",
    valor: 500,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h29/h5e/h00/h00/11219229638686/4701001080010U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "CORE BASIC PO FLEECE",
    descricao: "Cor: VINHO",
    valor: 330,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h4c/ha6/h00/h00/11031373742110/4701002270002U-01-BASEIMAGE-Hires.jpg'
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

