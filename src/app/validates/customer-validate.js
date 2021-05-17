module.exports = {
  type: "object",
  properties: {
    nome: { type: "string", minLength: 1 },
    sexo: { type: "string", enum: ["M", "F"] },
    data_nascimento: { type: "string", minLength: 10, maxLength: 10 },
    idade: { type: "integer" },
    cidade: { type: "integer" },
  },
  required: ["nome", "sexo", "data_nascimento", "idade", "cidade"],
  additionalProperties: false,
};