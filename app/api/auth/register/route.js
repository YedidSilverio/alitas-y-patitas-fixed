import { NextResponse } from 'next/server.js';

export async function POST(request) {
  try {
    const { email, password, codigoVerificacion } = await request.json();

    if (!email || !password || !codigoVerificacion) {
      return NextResponse.json(
        { success: false, message: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'La contraseña debe tener al menos 6 caracteres' },
        { status: 400 }
      );
    }

    if (codigoVerificacion !== process.env.VERIFICATION_CODE) {
      return NextResponse.json(
        { success: false, message: 'Código de verificación incorrecto' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Usuario registrado exitosamente'
    });

  } catch {
    return NextResponse.json(
      { success: false, message: 'Error del servidor' },
      { status: 500 }
    );
  }
}
import dbConnect from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ message: "✅ Conectado a MongoDB Atlas" });
  } catch (error) {
    console.error("❌ Error al conectar:", error);
    res.status(500).json({ error: "Error al conectar con la base de datos" });
  }
}
