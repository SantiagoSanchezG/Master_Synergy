import Usuario from './models/Usuario';
import bcrypt from 'bcrypt';
import './schema';

export const resolvers = {
  Query: {
    usuarios: async () => {
      return await Usuario.find()
    },
    usuario: async (_, { _id }) => {
      return await Usuario.findById(_id);
    }
  },
  Mutation: {
    crearUsuario: async (_, { nombre, numdoc, email, password, tipo_usuario, user_estado }) => {
      try {
        const hashPassword = await bcrypt.hash(password, 10)
        const nuevoUsuario = new Usuario({ nombre, numdoc, email, password : hashPassword, tipo_usuario, user_estado });
        return await nuevoUsuario.save();
      } catch (error) {
        return console.log(error);
      }

    }
  },
};
