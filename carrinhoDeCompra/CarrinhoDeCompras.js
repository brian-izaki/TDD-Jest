class CarrinhoDeCompras{
  constructor(){
    this.itens = [];
  }

  adiciona(item){
    this.itens.push(item);
  }

  getItens(){
    return this.itens;
  }

  maiorPreco(){
    if (!this.itens.length) return 0;
    
    let precoMaior = this.itens[0].getValorTotal();
    for (let item of this.itens ){
      if (item.getValorTotal() > precoMaior){
        precoMaior = item.getValorTotal();
      }
    }

    return precoMaior;
  }
}

export default CarrinhoDeCompras;