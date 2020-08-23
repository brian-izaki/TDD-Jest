import CarrinhoDeCompras from './CarrinhoDeCompras';
import Item from './Item';
// import CarrinhoDeComprasDataBuilder from './CarrinhoDeComprasDataBuilder';

// Testes unitários.
// utilizado o TDD, Desenvolvimento Guiado pelos Testes
// também chamado de red-green-refactor

let carrinho;

// executa antes de cada teste (bom para resetar uma variável ou BD)
// ajuda a manter o código respeitando o DRY
beforeEach(() => {
  carrinho = new CarrinhoDeCompras();
  
  // carrinho = new CarrinhoDeComprasDataBuilder().criaComItens([10, 100, 150, 900]);
})

test('Maior preço com nenhum item', () => {
  expect(carrinho.maiorPreco()).toBe(0)
})

it('Maior preço com apenas 1 item', () => {
  // const carrinho = new CarrinhoDeCompras();
  carrinho.adiciona(new Item('Celular', 1, 900.00));

  expect(carrinho.maiorPreco()).toBe(900);
})

it('Maior preço com vários itens', () => {
  // const carrinho = new CarrinhoDeCompras();
  carrinho.adiciona(new Item('Carteira', 1, 10.00))
  carrinho.adiciona(new Item('Mesa', 1, 500.00))
  carrinho.adiciona(new Item('Fone de ouvido', 1, 50.00))

  expect(carrinho.maiorPreco()).toBe(500);
})

