class Item{
  constructor(descricao, quantidade, valorUnitario){
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.valorUnitario = valorUnitario;
  }

  getValorTotal(){
    return this.quantidade * this.valorUnitario;
  }
}

export default Item;