const { default: CarrinhoDeCompras } = require("./CarrinhoDeCompras");
const { default: Item } = require("./Item");

/**
 * PADRÃO DE PROJETO BUILDER 
 * VISA REDUZIR LINHAS DE CÓDIGO PARA A CRIAÇÃO DE UM CENÁRIO PARA O TESTE
 * Bom para utilizar quando há diversos tipos de cenários que se repetem.
 */

class CarrinhoDeComprasDataBuilder{
  constructor(){
    this.carrinho = new CarrinhoDeCompras();
  }

  criaComItens(valores){
    for(let valor of valores){
      this.carrinho.adiciona(new Item('item', 1, valor));
    }
    return this.carrinho;
  }

}

export default CarrinhoDeComprasDataBuilder;
