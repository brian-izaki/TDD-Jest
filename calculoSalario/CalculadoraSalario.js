export default class CalculadoraSalario{
  constructor(){
  }

  calculo(funcionario){
    let porcentagemDesconto;

    const salario = funcionario.salario;
    const cargo = funcionario.cargo

    if (cargo === 'desenvolvedor'){
      porcentagemDesconto = salario > 3000 ? 0.80 : 0.90
    } else if (cargo === 'dba' || cargo === 'testador') {
      porcentagemDesconto = salario > 2500 ? 0.75 : 0.85 
    }

    return salario * porcentagemDesconto;
  }
}