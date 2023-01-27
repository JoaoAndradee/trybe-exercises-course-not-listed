
const express = require('express');
const peopleDB = require('../db/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;
  console.log(person);
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await peopleDB.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

it('Testando a alteração de uma pessoa com o id 1', async function () {
  sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
  const response = await chai
    .request(app)
    .put('/people/1')
    .send(
      {
        firstName: 'Lucão',
        lastName: 'Andarilho dos céus',
        email: 'lucao.andarilho@trybe.com',
        phone: '851 678 4453',
      },
    );

  expect(response.status).to.equal(200);
  expect(response.body).to
    .deep.equal({ message: 'Pessoa de id 1 atualizada com sucesso' });
});

it('Testando a exclusão da pessoa com id 1', async function () {
  sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
  const response = await chai
    .request(app)
    .delete('/people/1');

  expect(response.status).to.equal(200);
  expect(response.body).to
    .deep.equal({ message: 'Pessoa de id 1 excluída com sucesso' });
});


module.exports = router;
