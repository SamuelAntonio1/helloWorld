import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdtempService {

  private bd: any = [];

  constructor() { }

  salvar(chave: string, valor: any){
    if(chave.trim()){
      this.bd[chave] = valor;
      return true;
    }

    return false;
  }

  buscar(chave: string){
    if(chave.trim()){
      return this.bd[chave];
    }
    return null;
  }

  deletar(chave: string){
    if(chave.trim()){
      delete this.bd[chave];
      return true;
    }

    return false;
  }

  addProdutoCarrinho(produto:any){
    //Primeiro verifica se o carrinho não existe
    // Se não (!) existir
    if(!this.bd['carrinho']){
      this.bd['carrinho'] = []; //Cria o carrinho no bd
      // E inicia o vetor vazio.
    }

    if(produto){
      //Adiciona o produto no final do vetor do carrinho
      this.bd['carrinho'].push(produto);

      this.totalCarrinho();

      return true;
    }
    return false;
  }

  removeProdutoCarrinho(posicao: number){
    //Remove 1 elemento na posicao passada
    this.bd['carrinho'].splice(posicao, 1);
    
    this.totalCarrinho();

    return true;
  }

  limparCarrinho(){
    this.bd['carrinho'] = [];

    this.totalCarrinho();
    
  }

  totalCarrinho(){
    // cria a variavel de total
    let total = 0;
    // verifica se o carrinho tem itens
    if(this.bd['carrinho'].length > 0){
      // percorre o carrinho e soma ao total
    for(let prod of this.bd['carrinho']){
      total = total + prod.valor;
    }
   } 
   this.salvar('qtdeItensCarrinho', this.bd['carrinho'].length);
   this.salvar('totalCarrinho', total);
  }
}

  