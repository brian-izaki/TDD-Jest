import CarrinhoDeCompras from './CarrinhoDeCompras';
import Item from './Item';

// Testes unitários.
// utilizado o TDD, Desenvolvimento Guiado pelos Testes
// também chamado de red-green-refactor

test('Teste de maior preço com nenhum item', () => {
  const carrinho = new CarrinhoDeCompras();

  expect(carrinho.maiorPreco()).toBe(0)

})

it('Maior preço com apenas 1 item', () => {
  const carrinho = new CarrinhoDeCompras();
  carrinho.adiciona(new Item('Celular', 1, 900.00));

  expect(carrinho.maiorPreco()).toBe(900);
})

it('Maior preço de varios itens', () => {
  const carrinho = new CarrinhoDeCompras();
  carrinho.adiciona(new Item('Carteira', 1, 10.00))
  carrinho.adiciona(new Item('Mesa', 1, 500.00))
  carrinho.adiciona(new Item('Fone de ouvido', 1, 50.00))

  expect(carrinho.maiorPreco()).toBe(500);
})