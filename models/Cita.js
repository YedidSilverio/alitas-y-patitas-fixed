import mongoose from 'mongoose';

const citaSchema = new mongoose.Schema({
  nombreMascota: {
    type: String,
    required: true
  },
  especie: {
    type: String,
    required: true
  },
  tamaño: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  nombrePropietario: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  servicio: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    default: 'pendiente'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Cita || mongoose.model('Cita', citaSchema);
