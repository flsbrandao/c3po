const { Customers, Cities } = require("../models");
const { Op } = require("sequelize");
const Ajv = require("ajv");
const schema = require("../validates/customer-validate");

const ajv = new Ajv();

const validate_data = ajv.compile(schema);

class CustomersController {

  async create(req, res, next) {
    try {
      const check_data = validate_data(req.body);

      if (!check_data)
        return res.status(400).json({
          message:
            "Os dados enviados são inválidos. Verifique e tente novamente",
        });

      const {
        nome: name,
        sexo: sex,
        data_nascimento: birth_date,
        idade: age,
        cidade: city_id,
      } = req.body;

      const city = await Cities.findByPk(city_id);

      if (!city)
        return res.status(400).json({ message: "ID da Cidade inválido" });

      const customer = await Customers.create({
        name,
        sex,
        birth_date,
        age,
        city_id,
      });

      return res.json({
        message: "Cliente cadastrado com sucesso!",
        id: customer.id,
      });

    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { nome: name } = req.body;

      if(name.trim().length < 1)
        return res.status(400).json({
          message:
            "Os dados enviados são inválidos. Verifique e tente novamente",
        });

      const customer = await Customers.findByPk(id);

      if(!customer)
        return res.status(400).json({message:'ID cliente inválido'});

      await Customers.update({ name }, { where: { id } });

      return res.json({
        message: "Cliente atualizado com sucesso!",
      });
    } catch (err) {
      return next(err);
    }
  }

  async destroy(req, res, next) {
    try {
      const { id } = req.params;
      
      const customer = await Customers.findByPk(id);

      if(!customer)
        return res.status(400).json({message:'ID cliente inválido'});

      await Customers.destroy({ where: { id } });

      return res.json({
        message: "Cliente deletado com sucesso!",
      });

    } catch (err) {
      return next(err);
    }
  }

  async show(req, res, next) {
    try {
      let where = {};

      if (req.query.id) {
        where.id = req.query.id;
      }

      if (req.query.nome) {
        where.name = { [Op.like]: `%${req.query.nome}%` };
      }

      const customer = await Customers.findAll({
        attributes: [
          "id",
          ["name", "nome"],
          ["sex", "sexo"],
          ["birth_date", "data_nascimento"],
          ["age", "idade"],
        ],
        include: [
          {
            model: Cities,
            attributes: [
              ["city", "cidade"],
              ["state", "estado"],
            ],
          },
        ],
        where,
      });

      return res.json(customer);
      
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new CustomersController();
