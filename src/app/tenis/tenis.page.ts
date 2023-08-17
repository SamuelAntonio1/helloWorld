
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.page.html',
  styleUrls: ['./tenis.page.scss'],
})
export class TenisPage implements OnInit {

  listaProdutos = [
    {nome: "AUTHENTIC",
    descricao: "Cor: VINHO",
    valor: 400,
    },

    {nome: "ERA",
    descricao: "Cor: Preto",
    valor: 350
    },

    {nome: "OLD SKOOL",
    descricao: "Cor: AZUL",
    valor: 450
    },

    {nome: "SLIP-ON",
    descricao: "Cor: BRANCO",
    valor: 500
    },

    {nome: "SK8-HI",
    descricao: "Cor: PRETO",
    valor: 350
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
