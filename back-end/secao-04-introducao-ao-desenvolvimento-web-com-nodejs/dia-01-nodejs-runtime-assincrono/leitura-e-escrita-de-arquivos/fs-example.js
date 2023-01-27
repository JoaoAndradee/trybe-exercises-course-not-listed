const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.tst', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main();
