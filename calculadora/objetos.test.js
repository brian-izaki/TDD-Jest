test('Atribuição de objetos', () => {
  const data = {'um': 1};
  data['dois'] = 2;

  // para verificar se a chave-valor do objeto é igual
  expect(data).toEqual({um: 1, dois: 2})
})

