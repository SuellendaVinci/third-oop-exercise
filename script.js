function Conta(agencia=0, numero=0, digito=0, saldo=0, titular=null, tipo="CC", lancamentos=[]) {
    // propriedades
    this.agencia = agencia;
    this.numero = numero;
    this.digito = digito;
    this.saldo = saldo;
    this.titular = titular;
    this.tipo = tipo;
    this.lancamentos = lancamentos;
  }
  
  Conta.prototype.banco = "Nubank";
  
  Conta.prototype.extrato = function() {
    return this.lancamentos;
  }
  
  Conta.prototype.depositar = function(valor) {
    this.lancamentos.push({tipo: "deposito", valor: valor})
    return this.saldo += valor;
  }
  
  Conta.prototype.sacar = function(valor) {
    if (this.saldo >= valor) {
      this.lancamentos.push({tipo: "saque", valor: valor})
      return this.saldo -= valor;
    }
  
    return "Saldo Insuficiente!";
  }
  
  Conta.prototype.transferir = function(valor, conta) {
    this.lancamentos.push({tipo: "transferência", valor: valor, destinatário: conta});
    this.sacar(valor); // origem
    conta.depositar(valor); // destino
    return this.saldo;
  }


  const contaJoao = new Conta(001, 1234, 0, 10000, "João");
  const contaSuellen = new Conta(001, 4567, 8, 5000, "Suellen", "CP");

  
  // Conta do João
  console.log(contaJoao);
  console.log(contaJoao.extrato());
  console.log(contaJoao.banco);
  console.log(contaJoao.depositar(1000));
  console.log(contaJoao.sacar(2000));
  console.log(contaJoao.sacar(1500));
  console.log(contaJoao.transferir(1500, contaSuellen));
  
  // Conta da Suellen
  console.log(contaSuellen);
  console.log(contaSuellen.extrato());
  console.log(contaSuellen.banco);
  console.log(contaSuellen.depositar(2000));
  console.log(contaSuellen.sacar(500));
  console.log(contaSuellen.sacar(500));
  console.log(contaSuellen.transferir(200, contaJoao));
  
  console.log( new Conta() );
  

//   1 - Implementar um método, onde a cada operação executada (ex. saque, deposito, transferia) ela deve ser registrada dentro do objeto (lançamentos)
// 2 - Implementar um método, onde todos os lançamentos sejam exibidos (extrato)