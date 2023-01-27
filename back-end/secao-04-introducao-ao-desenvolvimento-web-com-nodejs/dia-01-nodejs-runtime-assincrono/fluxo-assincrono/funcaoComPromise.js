function divisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(Error('Não pode dividir por zero'));

    const resultado = num1 / num2;

    resolve(resultado);
  })
  return promise;
}

divisao(2,2)
  .then(result => console.log(result))
  .catch(err => console.log("Error: ", err.message));
