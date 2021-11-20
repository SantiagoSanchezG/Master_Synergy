import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombre: {
      type: String,
      required: true
  },
  numdoc: {
      type: Number,
      required: true

  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  tipo_usuario: {
      type: String,
      required: true
  },
  user_estado: {
      type: String,
      default: "Pendiente"
    
  },
});

export default model('Usuario', usuarioSchema);