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
    {nome: "CALÇA NIKE REFLETIVA",
    descricao: "Cor: PRETO",
    valor: 150,
    foto: 'https://pittol.vteximg.com.br/arquivos/ids/261202-330-457/2544581-1.jpg?v=637820094658900000'
    },

    {nome: "CALÇA DE MOLETOM NIKE",
    descricao: "Cor: CINZA",
    valor: 250,
    foto: 'https://static.zattini.com.br/produtos/calca-moletom-nike-nsw-club-jsy-masculina/26/HZM-1929-226/HZM-1929-226_zoom1.jpg?ts=1564778109&ims=544x'
    },

    {nome: "CALÇA NIKE REFLETIVA",
    descricao: "Cor: PRETO",
    valor: 450,
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrfBa6ghxW65A583jI00j_-sipsliE-pDQWTzGgrIV2wEm0CXvD6yF8vvtZL6EnAZhIY&usqp=CAU'
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
