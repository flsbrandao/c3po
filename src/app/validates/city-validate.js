module.exports = {
  type: "object",
  properties:{
    cidade: {type: "string", minLength: 1},
    estado: {type: "string", minLength: 2, maxLength: 2}
  },
  required: ["cidade", "estado"],
  additionalProperties: false
}