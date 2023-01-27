function divisao(num1, num2) {
  if ( num2 == 0 ) throw new Error('Não pode ser feito uma divisão por zero');

  const resultado = num1 / num2;
  return resultado;
}

try {
  console.log("Resultado: ", divisao(2,2));
} catch(e) {
  console.log("Erro: ", e.message);
}
