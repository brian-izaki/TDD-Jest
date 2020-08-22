// o arquivo é o suíte de testes
// as funções test são os testes 

const sum =  require('./sum');
const subtraction = require("./subtraction");

// realizando teste simples
// é necessário chamar o test
test('somando 1 + 2 para ser igual a 3', () => {
  // expectativa da função . para ser 3
  // 
  expect(sum(1, 2)).toBe(3);
});

// "it" é um alias para "test"
it('subtraindo 2 - 1 para ser 1', () => {
  expect(subtraction(2, 1)).toBe(1);
})