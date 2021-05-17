const { Cities } = require("../models");
const { Op } = require("sequelize");
const Ajv = require("ajv");
const schema = require("../validates/city-validate");

const ajv = new Ajv();

const validate_data = ajv.compile(schema);

class CitiesController {

  async create(req, res, next) {
    try {
      const check_data = validate_data(req.body);

      if (!check_data)
        return res.status(400).json({
          message:
            "Os dados enviados são inválidos. Verifique e tente novamente",
        });

      const { cidade: city, estado: state } = req.body;

      await Cities.create({ city, state});

      return res.json({ message: "Cidade cadastrada com sucesso!" });
    } catch (err) {
      return next(err);
    }
  }

  async show(req, res, next) {
    try {
      let where = {};

      if (req.query.cidade) {
        where.city = { [Op.like]: `%${req.query.cidade}%` };
      }

      if (req.query.estado) {
        where.state = `${req.query.estado}`;
      }

      const cities = await Cities.findAll({
        attributes: ["id", ["city", "cidade"], ["state", "estado"]],
        where,
      });

      return res.json(cities);
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new CitiesController();
