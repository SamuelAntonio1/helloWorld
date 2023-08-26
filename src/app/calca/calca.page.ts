import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-calca',
  templateUrl: './calca.page.html',
  styleUrls: ['./calca.page.scss'],
})
export class CalcaPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "AUTHENTIC CHINO SLIM",
    descricao: "Cor: CINZA",
    valor: 450,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h3c/hb6/h00/h00/11384621170718/4701300540001U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "AUTHENTIC CHINO SLIM",
    descricao: "Cor: BEGE",
    valor: 450,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h88/he5/h00/h00/11384619499550/4701300540002U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "AUTHENTIC CHINO SLIM",
    descricao: "Cor: VERDE",
    valor: 450,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h38/h18/h00/h00/11384626741278/4701300540004U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "AUTHENTIC CHINO LOOSE",
    descricao: "Cor: VERDE",
    valor: 360,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h88/h71/h00/h00/11219206307870/4701300510001U-01-BASEIMAGE-Hires.jpg'
    },

    {nome: "RANGE ANAHEIM BAGGY",
    descricao: "Cor: XADREZ",
    valor: 350,
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/hb8/h97/h00/h00/11384644599838/4701300820001U-01-BASEIMAGE-Hires.jpg'
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