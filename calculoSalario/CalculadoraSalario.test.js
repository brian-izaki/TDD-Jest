import Funcionario from './Funcionario';
import CalculadoraSalario from './CalculadoraSalario';

let calculadoraSalario;

beforeAll(() => {
  calculadoraSalario = new CalculadoraSalario();
})

it('desenvolvedor menor que 3000', () => {

  const fun = new Funcionario('Brian', 1000, 'desenvolvedor')
  expect(calculadoraSalario.calculo(fun)).toBe(1000 * 0.90)
})

it('desenvolvedor maior que 3000', () => {
  
  const fun = new Funcionario('Brian', 4000, 'desenvolvedor')
  expect(calculadoraSalario.calculo(fun)).toBe(4000 * 0.80)
})

it('DBA e testador menor que 2500', () => {

  const dba = new Funcionario('Eduardo', 1000, 'dba');
  expect(calculadoraSalario.calculo(dba)).toBe(1000 * 0.85);
})

it('DBA e testador maior que 2500', () => {
  
  const dba = new Funcionario('Eduardo', 3000, 'dba');
  expect(calculadoraSalario.calculo(dba)).toBe(3000 * 0.75);
})
